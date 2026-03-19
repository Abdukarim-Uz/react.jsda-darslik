import { configureStore } from "@reduxjs/toolkit";

import UserSlice from '../userSlice/userSlice'

export const store = configureStore({
    reducer: {
        user: UserSlice
    }
})