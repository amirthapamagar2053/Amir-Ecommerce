import axios from "axios";
const baseUrl = "http://localhost:3001/api/users/shipping";

const add = async (shippingAddress) => {
  const token = await JSON.parse(window.localStorage.getItem("loggedinUser"))
    .token;

  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const response = await axios.put(
    baseUrl,
    {
      shippingAddress,
    },
    config
  );
  return response.data;
};
//eslint-disable-next-line
export default { add };
