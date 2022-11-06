import { createSlice } from "@reduxjs/toolkit";

import shippingServices from "../services/shippingServices";
import signUpServices from "../services/signUpServices";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUsers(state, action) {
      const user = action.payload;

      return user;
    },
    setUserShippingAddress(state, action) {
      const user = action.payload;

      return user;
    },
  },
});

export const setUserObject = () => {
  return async (dispatch) => {
    let user = JSON.parse(window.localStorage.getItem("loggedinUser"));

    if (!user) {
      dispatch(setUsers(null));
    } else {
      user = await signUpServices.getOne(user.email);

      dispatch(setUsers(user));
    }
  };
};

export const setShippingAddress = (shippingAddress) => {
  return async (dispatch) => {
    const updatedUser = await shippingServices.add(shippingAddress);
    console.log(updatedUser, "updateduser");
    const updatedContent = await signUpServices.getOne(updatedUser.id);
    console.log("THE updated content is", updatedContent);
    dispatch(setUserShippingAddress(updatedContent));
    // window.localStorage.setItem(
    //   "loggedinUser",
    //   JSON.stringify({
    //     ...JSON.parse(window.localStorage.getItem("loggedinUser")),
    //     shippingAddress,
    //   })
    // );
  };
};
export const { setUsers, setUserShippingAddress } = userSlice.actions;
export default userSlice.reducer;
