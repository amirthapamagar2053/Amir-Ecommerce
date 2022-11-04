import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "./reducers/cartItemsReducer";
import messageReducer from "./reducers/messageReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
    messages: messageReducer,
    cartItems: cartItemsReducer,
  },
});

export default store;
