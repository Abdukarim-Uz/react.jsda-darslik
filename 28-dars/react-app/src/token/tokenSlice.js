import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        hidden: false
    },
    reducers: {
        setHidden: (state, action) => {
            state.hidden = action.payload
        }
    }
})
export const { setHidden } = tokenSlice.actions
export default tokenSlice.reducer