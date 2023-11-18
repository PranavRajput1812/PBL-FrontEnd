import {  createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosinstance";
const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data : localStorage.getItem('data') || {}
};
    const authSlice = createSlice({
        name:'auth',
        initialState,
        reducers:{},
    });


    export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
        try {
            const response = axiosInstance.post("user/register", data);
            toast.promise(response, {
                loading: 'Wait! creating your account',
                success: (data) => {
                    return data?.data?.message;
                },
                error: 'Failed to create your account'
            });
            return await response;
        } catch(error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
    })

    export const login = createAsyncThunk("/auth/login", async (data) => {
        try {
            const response = axiosInstance.post("user/login", data);
            toast.promise(response, {
                loading: 'Wait! authenticating your account',
                success: (data) => {
                    return data?.data?.message;
                },
                error: 'Failed to authenticate your account'
            });
            return await response;
        } catch(error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
    })

// eslint-disable-next-line no-empty-pattern
//export const {} = authSlice.actions;
export default authSlice.reducer;