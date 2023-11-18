import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slice/authSlice";
import ComapnySliceReducer from "./Slice/ComapnySlice";

const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        company:ComapnySliceReducer
    },
    devTools:true
})

export default store