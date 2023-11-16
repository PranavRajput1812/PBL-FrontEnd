import {  createSlice } from "@reduxjs/toolkit";

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

// eslint-disable-next-line no-empty-pattern
//export const {} = authSlice.actions;
export default authSlice.reducer;