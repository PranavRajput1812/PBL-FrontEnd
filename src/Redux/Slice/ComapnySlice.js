import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosinstance";

const initialState = {
    companyData: []   
}

export const getAllCompanies = createAsyncThunk('/company/get',async()=>{
    try {
        const response = axiosInstance.get('/company');
        toast.promise(response,{
            loading:"Loading comapny Data...",
            success:"Company data loaded succesfully",
            error:"Failed to get the courses",
        })
        return (await response).data.company;
    } catch (error) {
        toast.error(error?.data?.message)
    }
})
const companySlice = createSlice({
    name:"comapny",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
            builder.addCase(getAllCompanies.fulfilled,(state,action)=>{
                if (action.payload) {
                    state.companyData = [...action.payload]
                }
            })
    }
});
export default companySlice.reducer;