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

export const setUserObject = (user) => {
  return async (dispatch) => {
    dispatch(setUsers(user));
  };
};

export const setShippingAddress = (shippingAddress) => {
  return async (dispatch) => {
    // const users = await userServices.getAll();
    // // console.log("anecdotes", anecdotes);
    // const userToUpdate = users.find((user) => user.id === id);
    // console.log("anecdoteToupdate", anecdoteToUpdate);
    const updatedUser = await shippingServices.add(shippingAddress);
    console.log(updatedUser, "updateduser");
    const updatedContent = await signUpServices.getOne(updatedUser.id);
    // console.log("THE updated content is", updatedContent);
    dispatch(setUserShippingAddress(updatedContent));
    window.localStorage.setItem("loggedinUser", JSON.stringify(updatedContent));
  };
};
export const { setUsers, setUserShippingAddress } = userSlice.actions;
export default userSlice.reducer;
