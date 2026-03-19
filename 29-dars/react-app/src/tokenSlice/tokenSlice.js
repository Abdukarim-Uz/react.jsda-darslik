import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "auth",
    initialState: {
         token:JSON.parse(sessionStorage.getItem("isToken")) || null
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        logout: (state) => {
            state.token = null
        }
    }

})
export const { setToken, logout } = tokenSlice.actions
export default tokenSlice.reducer   