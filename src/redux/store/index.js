import { configureStore } from "@reduxjs/toolkit";
import MusicReducer from "../reducers";

const store = configureStore({
    reducer: {
        music: MusicReducer
    }
})
export default store