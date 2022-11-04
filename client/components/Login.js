import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { initializeCartItems } from "../reducers/cartItemsReducer";
import { setMessageObject } from "../reducers/messageReducer";
import { setUserObject } from "../reducers/userReducer";
import loginServices from "../services/loginServices";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages);

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await loginServices.login(email, password);

    if (response.error) {
      dispatch(setMessageObject(response.error));
    } else {
      window.localStorage.setItem("loggedinUser", JSON.stringify(response));
      dispatch(setMessageObject("the login made sucessful"));
      dispatch(setUserObject(response));
      //   dispatch(initializeCartItems());
      navigate("/");
    }
  };

  return (
    <div>
      <div className="wrapper container">
        <div className="margin-sm  width-md container-md">
          <form className="width-md text-center" onSubmit={handleLogin}>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <p className="message">{message}</p>

            <p className="text-white margin-top-md">
              Not registered? <Link to="/signup">SignUp</Link>
            </p>
            <button className="primary-button ">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
