/* import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productsReducer from "./Slices/productsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;*/
























import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productsReducer from "./Slices/productsSlice";

// Load cart from localStorage
const loadCart = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) {
      return [];
    }
    return JSON.parse(serializedCart);
  } catch (e) {
    console.error("Could not load cart", e);
    return [];
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
  preloadedState: {
    cart: loadCart(),
  },
});

export default store;

