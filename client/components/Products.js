import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem } from "../reducers/cartItemsReducer";
import { setMessageObject } from "../reducers/messageReducer";

const Products = ({ products }) => {
  const dispatch = useDispatch();
  //retrive all products from redux store
  // const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.users);
  const message = useSelector((state) => state.messages);

  const addToCart = async (productId) => {
    if (user) {
      dispatch(addCartItem(productId));
      dispatch(setMessageObject("Added item to cart successfully!!"));
    } else {
      dispatch(setMessageObject("Login first!!"));
    }
  };
  return (
    <div className="wrapper ">
      <div className=" flex split-center h4"> All Products</div>
      {message ? <div className=" flex split-center ">{message}</div> : null}
      <div className="gallery flex ">
        {products.map((product, index) => {
          return (
            <div key={index} className="content">
              <Link to={`/product/${product.id}`}>
                <img
                  className="product-img"
                  src={product.imagePath}
                  alt={`$product.productName`}
                />
                <h3 className="title">{product.productName.slice(0, 20)}</h3>
                <p className="desc">{product.specification.slice(0, 50)}...</p>
                <h6 className="price">Rs.{product.price}</h6>
              </Link>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product.id)}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
