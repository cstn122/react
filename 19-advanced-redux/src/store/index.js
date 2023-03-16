import { configureStore } from "@reduxjs/toolkit";
import UISlice from "./ui-slice";
import CartSlice from './cart-slice';

const store = configureStore({
    reducer: {
        ui: UISlice.reducer,
        cart: CartSlice.reducer,
    }
});

export default store;