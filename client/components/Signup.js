import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setMessageObject } from "../reducers/messageReducer";
import signUpServices from "../services/signUpServices";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages);
  const handleSignUp = async (event) => {
    event.preventDefault();
    const firstName = event.target.firstname.value;
    const lastName = event.target.lastname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmpassword.value;
    if (password !== confirmPassword) {
      dispatch(setMessageObject("*Password doesnot match!!"));
    } else {
      const response = await signUpServices.signUp(
        firstName,
        lastName,
        email,
        password
      );
      if (response.error) {
        dispatch(setMessageObject(response.error));
      } else {
        event.target.firstname.value = "";
        event.target.lastname.value = "";
        event.target.email.value = "";
        event.target.password.value = "";
        event.target.confirmpassword.value = "";
        navigate("/login");
      }
    }
  };
  return (
    <div>
      <div className="wrapper container">
        <div className="margin-sm  width-md container-md">
          <form className="width-md text-center" onSubmit={handleSignUp}>
            <input type="text" placeholder="Firstname" name="firstname" />
            <input type="text" placeholder="Lastname" name="lastname" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmpassword"
            />
            <p className="message">{message}</p>
            <p className="text-white">
              Already have an account? <Link to="/login"> Login</Link>
            </p>
            <button className="primary-button ">SignUp</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
