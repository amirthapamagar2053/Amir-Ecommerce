import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Login from "./Login";
import ProductDetail from "./ProductDetail";
import Products from "./Products";
import ShippingAddress from "./ShippingAddress";
import Signup from "./Signup";

const Router = ({ products, productDetail }) => (
  <Routes>
    <Route path="/" element={<Products products={products} />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/cart" element={<Cart />} />
    <Route
      path="/product/:id"
      element={<ProductDetail productDetail={productDetail} />}
    />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/shipping-address" element={<ShippingAddress />} />
  </Routes>
);

export default Router;
