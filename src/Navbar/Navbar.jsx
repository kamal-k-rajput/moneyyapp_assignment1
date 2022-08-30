import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart";
export const Navbar = () => {
  const isLoggedIn = useSelector((store) => {
    return store.isLoggedIn;
  });
  return (
    <>
      <li className="navbar-list">
        <ul>
          <Link to="/products"> Products</Link>
        </ul>
        <ul>
          <Link to="/additem">Add Product</Link>
        </ul>
        <ul>
          {!isLoggedIn ? (
            <Link to="/Login"> LogIn</Link>
          ) : (
            <Link to="/logout"> Log Out</Link>
          )}
        </ul>
        <ul>
          <Link to="/cart"> Cart{Cart.totalItems}</Link>
        </ul>
      </li>
    </>
  );
};
