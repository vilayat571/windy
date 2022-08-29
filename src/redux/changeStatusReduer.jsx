import { createSlice } from "@reduxjs/toolkit";

const changeStatusReduer = createSlice({
    name: 'changeStatusReduer',
    initialState: {
        isDark: true
    },
    reducers: {
        changeStatus: (state, action) => {
            state.isDark = !action.payload;
        }
    }
});

export const { changeStatus } = changeStatusReduer.actions;
export default changeStatusReduer.reducer;