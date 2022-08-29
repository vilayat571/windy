import { configureStore } from "@reduxjs/toolkit";
import changeDegreReducer from "../redux/changeDegreReducer";
import changeStatusReduer from "../redux/changeStatusReduer";
import weatherReducer from "../redux/weatherReducer";

export const store = configureStore({
    reducer: {
        weatherReducer: weatherReducer,
        changeStatusReduer:changeStatusReduer,
        changeDegreReducer:changeDegreReducer
    }
});