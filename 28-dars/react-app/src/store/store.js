import { configureStore } from "@reduxjs/toolkit";

import UserSlice from '../userSlice/userSlice'

import TokenSlice from '../token/tokenSlice'

export const store = configureStore({
    reducer: {
        user: UserSlice,
        token: TokenSlice
    }
})