import { createSlice } from '@reduxjs/toolkit';
import { Products, TotalProducts } from "../../data/Products";

const INITIAL_STATE = {
    products: Products,
    totalProducts: TotalProducts
};

export const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state => {
            return state;
        },
        getFirstProduct: state => {
            return state.products[0];
        }
    }
});

export const { getProducts, getFirstProduct } = productsSlice.actions;

export default productsSlice.reducer;
