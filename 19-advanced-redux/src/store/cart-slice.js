import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            state.totalQuantity += 1;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    name: action.payload.title,
                    id: action.payload.id,
                    price: action.payload.price,
                    quantity: 1,
                    totalPrice: action.payload.price,
                });
            } else {
                existingItem.quantity += 1;
                existingItem.totalPrice += action.payload.price;
            }
        },
        removeItemFromCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            state.totalQuantity -= 1;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            } else {
                existingItem.quantity -= 1;
                existingItem.totalPrice -= existingItem.price;
            }
        },
    },
});


export const CartSliceActions = CartSlice.actions;

export default CartSlice;