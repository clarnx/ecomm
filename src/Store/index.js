import { authSlice } from "./authSlice";
import { configureStore } from "@reduxjs/toolkit";
import {cartSlice} from './cartSlice'





export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
  },

});
;
