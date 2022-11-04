import axios from "axios";
import { basePath } from "../utils";

const baseUrl = basePath + "api/products";

const getAll = async () => {
  const response = await axios.get(`${baseUrl}?limit=10`);

  return response.data;
};
const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);

  return response.data;
};

export default { getAll, getOne };
