import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: ({
        ism: "abdukarim"
    }),
    reducers: {
        setIsm: (action, state) => {
            state.ism = action.payload
        }
    }
})

export const { setIsm } = userSlice.actions

export default userSlice.reducer