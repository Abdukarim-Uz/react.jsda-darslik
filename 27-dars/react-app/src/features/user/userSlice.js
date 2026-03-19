import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        ism: "abdukarim",
        yosh: 12,
        job: "frontend"
    },
    reducers: {
        ism2: (state) => {
            state.ism = "azizbek"
        },
        job2: (state) => {
            state.job = "backend"
        }
    }
})

export const { ism2, job2 } = userSlice.actions

export default userSlice.reducer
