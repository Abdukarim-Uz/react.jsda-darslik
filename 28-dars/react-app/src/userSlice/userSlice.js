import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name: "user",
    initialState: {
        data: null
    },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload
        }
    }
})
export const { setUser } = userslice.actions
export default userslice.reducer