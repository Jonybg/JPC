import { createSlice } from "@reduxjs/toolkit";

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
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST)
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