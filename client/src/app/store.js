import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import productsReducer from "../features/productsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
});

export default store;
