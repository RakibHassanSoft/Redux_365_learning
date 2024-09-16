import { configureStore } from "@reduxjs/toolkit";
import reducer from './counterSlice'


// console.log(configureStore)
export const store = configureStore({
    reducer:{
        counter:reducer
    },
})