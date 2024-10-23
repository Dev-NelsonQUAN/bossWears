import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'app',
  initialState: {
    cart: [],
    Qty: 0,
  },
  reducers: {
    addToCart: (state, {payload})=>{
      const check = state.cart.findIndex((e) => e._id === payload._id);
      if (check >= 0) {
        state.cart[check].Qty += 1
      } else {
        const add = {...payload, Qty: 1};
        state.cart.push(add);
      }
    },
    removeCart: (state, { payload }) => {
      state.cart = state.cart.filter((e) => e._id !== payload._id);
    },
    decreaseQty: (state, { payload }) => {
      let newCart = state.cart.map((e) => {
        if (e._id === payload._id) {
          return { ...e, Qty: e.Qty - 1 };
        } else {
          return e;
        }
      });
      newCart = newCart.filter((e) => e.Qty > 0);
      state.cart = newCart;
    },
    increaseQty: (state, { payload }) => {
      const array = state.cart.map((e) => {
        if (e._id === payload._id) {
          e.Qty += 1;
          return e;
        } else {
          return e;
        }
      });
    },
    clearCart: (state) => {
      state.cart = [];
    },
  }
})

export const {addToCart,removeCart,decreaseQty,increaseQty} = cartSlice.actions
export default cartSlice.reducer