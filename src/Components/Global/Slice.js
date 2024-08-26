import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cart: [],
  total: 0,
  totalQty: 0,
  // QTY: 0,
  ecomUsers: [],
  isLoggedIn: false,
  loggedInUser: {},
};

const ecommerce = createSlice({
  name: "shophub",
  initialState,
  reducers: {
    signUps: (state, { payload }) => {
      state.ecomUsers.push(payload);
    },
    login: (state, { payload }) => {
      const check = state.ecomUsers.findIndex((e) => e.email === payload.email);
      if (check !== -1) {
        if (state.ecomUsers[check].password === payload.password) {
          state.isLoggedIn = true;
          state.loggedInUser = state.ecomUsers[check];
        } else {
          toast.error("Password Incorrect")
          alert("Password Incorrect");
          throw new Error("Password Incorrect")
        }
      } else {
        toast.error("User not found")
        // alert("user not found");
        throw new Error("user not found")
      }
    },
    addToCart: (state, { payload }) => {
      const check = state.cart.findIndex((e) => e.id == payload.id);
      if (check === -1) {
        state.cart.push({ ...payload, QTY: 1, totalPrice: payload.price });
        toast.success('Added to cart')
      } else {
        let value = state.cart[check];
        value.QTY += 1;
        value.totalPrice = payload.price * value.QTY;
        toast.success("It's in your cart already")
      }
      state.total = state.cart.reduce((p, e) => p + e.QTY * e.price, 0);
      state.totalQty = state.cart.reduce((acc, item) => acc + item.QTY, 0);
    },

    deleteCart: (state, { payload }) => {
      state.cart = state.cart.filter((e) => e?.id !== payload?.id);
      state.totalQty = state.cart.reduce((acc, item) => acc + item.QTY, 0);
      state.total = state.cart.reduce((p, e) => p + e.QTY * e.price, 0);
    },

    incrementQty: (state, { payload }) => {
      const item = state.cart.find((e) => e?.id === payload?.id);
      if (item) {
        item.QTY += 1;
        item.totalPrice = item.price * item.QTY;
        state.total = state.cart.reduce((total, e) => total + e.totalPrice, 0);
        state.totalQty = state.cart.reduce((qty, item) => qty + item.QTY, 0);
      }
    },

    decrementQty: (state, { payload }) => {
      const checkItem = state.cart.findIndex((e) => e?.id === payload?.id);
      if (state.cart[checkItem].QTY === 1) {
        state.cart = state.cart.filter((e) => e.id !== payload.id);
      } else {
        state.cart.map((e) => {
          if (e.id === payload.id) {
            e.QTY -= 1;
            e.totalPrice -= e.price;
          } else return e;
        });
      }
      state.total = state.cart.reduce((p, e) => p + e.QTY * e.price, 0);
      state.totalQty = state.cart.reduce((acc, item) => acc + item.QTY, 0);
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0
      state.totalQty = 0;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.loggedInUser = {};
    },
  },
});
export const {
  addToCart,
  login,
  incrementQty,
  decrementQty,
  logout,
  deleteCart,
  clearCart,
  signUps,
} = ecommerce.actions;
export default ecommerce.reducer;
