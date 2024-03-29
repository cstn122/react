import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
    name: 'UI',
    initialState: { cartIsVisible: false, notification: null },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        }
    },
});

export default UISlice;
export const UISliceActions = UISlice.actions;