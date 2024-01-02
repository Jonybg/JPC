import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "./categories/categoriesSlice"
import productsReducer from "./products/productsSlice.js";

const persistConfig = {
    key: "root",
    storage,
};

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
