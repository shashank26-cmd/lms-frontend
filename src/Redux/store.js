import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slices/AuthSlice.js'
import courseSliceReducer from "./Slices/CourseSlice.js";
import razorpaySliceReducer from './Slices/RazorPaySlice.js';
import lectureSliceReducer from "./Slices/LectureSlice.js"

const store=configureStore({
    reducer:{

auth : authSliceReducer,
course:courseSliceReducer,
razorpay:razorpaySliceReducer,
lecture:lectureSliceReducer


    },
    devTools:true
});
export default store;

// 1 only import config store and const store =configstore(reducer,devtools) after creating slices import them and now main.jsx provider