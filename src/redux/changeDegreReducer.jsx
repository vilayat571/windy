import { createSlice } from "@reduxjs/toolkit";

const changeDegreReducer = createSlice({
    name: "changeDegreReducer",
    initialState: {
        isKelvin: false
    },
    reducers: {
        changeDegree: (state, action) => {
            state.isKelvin = action.payload;
        }
    }
});
export const { changeDegree } = changeDegreReducer.actions;
export default changeDegreReducer.reducer;