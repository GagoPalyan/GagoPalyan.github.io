import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import profileSlice from "../features/profile/profileSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    profile: profileSlice,
  },
});
