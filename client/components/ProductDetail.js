import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../reducers/cartItemsReducer";
import { setMessageObject } from "../reducers/messageReducer";

const ProductDetail = ({ productDetail }) => {
  const dispatch = useDispatch();
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
    <div className="wrapper">
      {message ? <div className=" flex split-center ">{message}</div> : null}
      <div className="detail-gallery flex split-center">
        <div className="container-lg">
          <div className=" flex image">
            <div>
              <img
                className="detail-img"
                src={productDetail.imagePath}
                alt=""
              />
            </div>
            <div className="margin-sm">
              <div className="detail-title">{productDetail.productName}</div>
              Brand:
              <span className="detail-brand">
                {" "}
                {productDetail.brand.brandName}
              </span>
              <div className="line-1"></div>
              <div className="detail-price">Rs. {productDetail.price}</div>
              <div style={{ display: "block" }}>
                <button className="no-button no-button-font-sm"> - </button>
                <span className="detail-quantity">1</span>
                <button className="no-button no-button-font-sm"> + </button>
              </div>
              <button
                className="margin-sm botton  "
                onClick={() => addToCart(productDetail.id)}
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="line-1"></div>
          <h2 className="detail-title">Specifications</h2>
          <div style={{ color: "white" }}>{productDetail.specification}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
