import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>

      <li className="navbar-list">
        <ul>
          <Link to="/products"> Product</Link>
        </ul>
        <ul>
          <Link to="/Login"> LogIn</Link>
        </ul>
        <ul>
          <Link to="/products"> SignUp</Link>
        </ul>
        <ul>
          <Link to="/cart"> Cart</Link>
        </ul>

        {/* <ul>Cart</ul>
        <ul>LogIn</ul>
        <ul>Sign Up</ul> */}
      </li>
    </div>
  );
};
