import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setShippingAddress } from "../reducers/userReducer";

import { useNavigate } from "react-router-dom";

const ShippingAddress = () => {
  const navigate = useNavigate();
  const message = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const addShippingAddress = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const address = event.target.address.value;
    const phone = event.target.phnumber.value;
    const shippingAddress = `${name}~${address}~${phone}`;
    // const response = await shippingServices.add(shippingAddress);
    // console.log(response);
    dispatch(setShippingAddress(shippingAddress));
    navigate("/checkout");
  };

  return (
    <div>
      <div className="wrapper container">
        <div className="margin-sm  width-md container-md">
          <form className="width-md text-center" onSubmit={addShippingAddress}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="address" placeholder="Address" />
            <input type="number" name="phnumber" placeholder="Phone no." />
            <p className="message">{message}</p>

            <button className="primary-button ">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
