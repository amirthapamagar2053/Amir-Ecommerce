import { createSlice } from "@reduxjs/toolkit";
import productServices from "../services/productServices";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts(state, action) {
      return action.payload;
    },
  },
});
export default productSlice.reducer;

export const initializeProducts = () => {
  return async (dispatch) => {
    const products = await productServices.getAll();
    dispatch(setProducts(products));
  };
};

export const { setProducts } = productSlice.actions;
