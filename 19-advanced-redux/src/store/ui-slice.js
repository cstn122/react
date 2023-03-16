import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
    name: 'UI',
    initialState: {cartIsVisible: false},
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    },
});

export default UISlice;
export const UISliceActions = UISlice.actions;