import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'app',
  initialState: {
    cart: [],
    Qty: 0,
  },
  reducers: {
    addToCart: (state, {payload})=>{
      const check = state.cart.findIndex((e) => e.id === payload.id);
      if (check >= 0) {
        state.cart[check].Qty += 1
      } else {
        const add = {...payload, Qty: 1};
        state.cart.push(add);
      }
    }
  }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer