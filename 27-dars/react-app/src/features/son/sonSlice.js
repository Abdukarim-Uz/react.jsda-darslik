import { createSlice } from "@reduxjs/toolkit";

const sonSlice = createSlice({
    name: "son",
    initialState: {
        count: 0
    },
    reducers: {
        add: (state) => {
            state.count = state.count + 1;
        },
        remove: (state) => {
            state.count = state.count - 1
        }
    }
});

export const { add } = sonSlice.actions
export const { remove } = sonSlice.actions

export default sonSlice.reducer