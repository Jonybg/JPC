import { createSlice } from "@reduxjs/toolkit";
import { addItemTocart, removeItemFromCart, resetShippingCost } from "./cart-utils"

const INITIAL_STATE = {
    cartItems: [],
    shippingCost: 0,
    hidden: true,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            const { img, title, price } = action.payload;
            const existingItem = state.cartItems.find((item) => item.title === title);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ img, title, price, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const { title } = action.payload;
            const existingItem = state.cartItems.find((item) => item.title === title);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.cartItems = state.cartItems.filter((item) => item.title !== title);
                }
            }

        },

        clearCart: (state) => {
            return {
                ...state,
                cartItems: [],
                shippingCost: 0
            }
        },
        toggleHiddenCart: (state) => {
            return {
                ...state,
                hidden: !state.hidden
            }
        },
    }
})

export const { addToCart, removeFromCart, clearCart, toggleHiddenCart } = cartSlice.actions

export default cartSlice.reducer