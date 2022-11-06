import React from "react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "./components/Router";

import { initializeProducts } from "./reducers/productReducer";
import { setUserObject } from "./reducers/userReducer";
import { initializeCartItems } from "./reducers/cartItemsReducer";
import { useMatch } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cartItems);
  // const user = useSelector((state) => state.users);

  useEffect(() => {
    // load products in store form backend
    console.log("the useeffect entered");
    dispatch(initializeProducts());
    dispatch(setUserObject());
    dispatch(initializeCartItems());
  }, [dispatch]);

  const matchProduct = useMatch("/product/:id");
  const productDetail = matchProduct
    ? products.find((prod) => {
        return prod.id === Number(matchProduct.params.id);
      })
    : null;

  return (
    <>
      <NavBar cartItems={cartItems} />

      <Router products={products} productDetail={productDetail} />
    </>
  );
};

export default App;
