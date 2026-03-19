import { configureStore } from "@reduxjs/toolkit";

import SonSlice from '../features/son/sonSlice'

import UserSlice from '../features/user/userSlice'

export const store = configureStore({
    reducer: {

        son: SonSlice,
        user: UserSlice
    }
})