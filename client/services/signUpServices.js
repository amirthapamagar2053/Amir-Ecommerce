import axios from "axios";
const baseUrl = "http://localhost:3001/api/users";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const signUp = async (firstName, lastName, email, password) => {
  const response = await axios.post(baseUrl, {
    firstName,
    lastName,
    email,
    password,
  });
  return response.data;
};
//eslint-disable-next-line
export default { signUp, getAll, getOne };
