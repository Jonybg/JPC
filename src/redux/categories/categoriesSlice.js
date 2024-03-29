import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../data/Categories";

const INITIAL_STATE = {
    categories: Categories,
    selectedCategory: "Todas",
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
        setCategory: (state, action) => {
            return {
                ...state,
                selectedCategory: action.payload !== state.selectedCategory ? action.payload : null
            }
        },
        getCategories: state => {
            return state;
        }
    }
})

export const { getCategories, setCategory } = categoriesSlice.actions

export default categoriesSlice.reducer