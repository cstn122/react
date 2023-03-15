// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import authReducer from './authSlice';

// merging multiple slices
// multiple slices have only one store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  }
});

export default store;
