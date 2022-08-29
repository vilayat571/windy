import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPrognos = createAsyncThunk('/getPrognos/', async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city === undefined ? 'Baku' : city}&appid=d32bd17e782e54a0729a829c462c76ac`;
    const data = fetch(url)
        .then((res) => res.json())
        .then(data => {
            return data
        });
    return data;
});

const weatherReducer = createSlice({
    name: "weatherReducer",
    initialState: {
        situation: {
            isLoading: false,
            error: null
        },
        data: []
    },
    extraReducers: {
        [getPrognos.pending]: (state, action) => {
            state.situation.isLoading = true;
            state.situation.error = null;
        },
        [getPrognos.fulfilled]: (state, action) => {
            if(action.payload.cod==='404'){
                state.data = 'city not found';
            }
            state.situation.isLoading = false;
                state.data = action.payload;
        },
        [getPrognos.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message;
            console.log(action.error.message && action.error.message);
        }
    }
});
export default weatherReducer.reducer;