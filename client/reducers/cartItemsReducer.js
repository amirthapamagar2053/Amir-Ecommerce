import { createSlice } from "@reduxjs/toolkit";
import orderServices from "../services/orderServices";

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    setItems(state, action) {
      return action.payload;
    },
    addItem(state, action) {
      state.push(action.payload);

      // return [...state, action.payload];
    },
  },
});

export const initializeCartItems = () => {
  return async (dispatch) => {
    const cartItems = await orderServices.getCartItems();

    dispatch(setItems(cartItems));
  };
};
export const addCartItem = (productId) => {
  return async (dispatch) => {
    const order = await orderServices.createOrder(productId);
    const products = await orderServices.getAll();

    const addedItem = products.find(
      (product) => product.productId === order.productId
    );

    dispatch(addItem(addedItem));
  };
};

export const { setItems, addItem } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
