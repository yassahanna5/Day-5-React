/* import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exist = state.cartItems.find((i) => i.id === action.payload.id);
      if (exist) {
        exist.qty += 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;*/




















/*import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQty: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQty: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;*/

















































































/*import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;*/







































/*import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
    clearCart: () => {
      return [];
    },
    increaseQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;*/














































import { createSlice } from "@reduxjs/toolkit";

const saveCart = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Could not save cart", e);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveCart(state);
    },
    removeFromCart: (state, action) => {
      const newState = state.filter((p) => p.id !== action.payload);
      saveCart(newState);
      return newState;
    },
    clearCart: () => {
      saveCart([]);
      return [];
    },
    increaseQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      saveCart(state);
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
