import axios from "axios";
import { basePath } from "../utils";

const baseUrl = basePath + "api/orderDetails";

const getCartItems = async () => {
  const token = await JSON.parse(window.localStorage.getItem("loggedinUser"))
    .token;

  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const response = await axios.get(`${baseUrl}/cart`, config);

  return response.data;
};

const getAll = async () => {
  const response = await axios.get(`${baseUrl}`);
  return response.data;
};

const createOrder = async (productId) => {
  const token = await JSON.parse(window.localStorage.getItem("loggedinUser"))
    .token;

  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const response = await axios.post(baseUrl, { productId }, config);

  return response.data;
};

export default { createOrder, getCartItems, getAll };
