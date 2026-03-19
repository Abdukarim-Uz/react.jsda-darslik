import { configureStore } from "@reduxjs/toolkit";

import IsmSlice from '../ismSlice/ismSlice'

import TokenSlice from '../tokenSlice/tokenSlice'

export const store = configureStore({
    reducer: {
        user: IsmSlice,
        auth: TokenSlice,
    }
})  
