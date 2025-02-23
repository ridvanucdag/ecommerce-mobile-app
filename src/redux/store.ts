import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import favoriteReducer from "./slices/favoriteSlice";
import basketReducer from "./slices/basketSlice";
import languageReducer from "./slices/languageSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    favorite: favoriteReducer,
    cart: basketReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
