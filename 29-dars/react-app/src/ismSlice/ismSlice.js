import { createSlice } from "@reduxjs/toolkit";

const ismSlice = createSlice({
    name: "user",
    initialState: {
        ism: JSON.parse(localStorage.getItem("userIsm")) || null
    },

})
export default ismSlice.reducer