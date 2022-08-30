import React, { useState } from "react";
import "./Signup.css";
export const SignUp = () => {
  const [formData, setformData] = useState({
    name: "",
    mobileNumber: "",
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

  function handleSubmit(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    fetch("http://localhost:5600/users/create", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        data.status
          ? alert("user created successfully")
          : alert("fill all the fields");
      });
  }
  return (
    <div>
      return (
      <div className="form-container" id="users/create">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Enter your full name
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              onChange={handleEvent}
            />
          </label>
          <label>
            Enter your Mobile Number
            <input
              onChange={handleEvent}
              type="number"
              name="mobileNumber"
              placeholder="Enter Mobile Number"
            />
          </label>
          <label>
            Email:
            <input type="email" name="email" placeholder="email" />
          </label>
          <label>
            Password
            <input type="password" placeholder="password" name="password" />
          </label>
          <input type="submit" value="ADD USER" />
        </form>
      </div>
      );
    </div>
  );
};
