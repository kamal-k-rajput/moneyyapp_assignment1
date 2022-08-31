import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Login.css";
export const Login = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => {
    return store;
  });
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const handleEvent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  function submitForm(e) {
    e.preventDefault();

    axios.post("http://localhost:5600/login", { ...formData }).then((res) => {
      localStorage.setItem("authorisation", JSON.stringify(res.data.token));
      dispatch({
        type: "login",
        payload: {
          authorisation: res.data.token,
          loggedInUser: {
            userId: res.data.user._id,
            name: res.data.user.name,
            mobileNumber: res.data.user.mobileNumber,
            email: res.data.user.email,
          },
        },
      });
    });
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submitForm}>
        <label>
          Enter Email
          <input
            type="email"
            placeholder="Email"
            onChange={handleEvent}
            name="email"
          />
        </label>
        <label>
          Enter password
          <input
            type="password"
            placeholder="password"
            onChange={handleEvent}
            name="password"
          />
        </label>
        <input type="submit" />
      </form>
      <h1>OR</h1>
      <Link to="/signup" className="sign-up-button">
        Sign Up Here
      </Link>
    </div>
  );
};
