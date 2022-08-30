import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
export const Login = () => {
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
    console.log("log in form submitted");
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
