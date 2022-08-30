import React from "react";
import "./ProductItem.css";
import { useSelector } from "react-redux";
export const ProductItem = ({ product }) => {
  function addToCart(e) {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("Please Log in first to add product in cart");
    }
    console.log("item added to cart");
  }
  const isLoggedIn = useSelector((store) => {
    return store.isLoggedIn;
  });
  return (
    <section className="item-container">
      <img
        alt="product"
        src="https://images.unsplash.com/photo-1633080413586-0937ec56702c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p className="product-description">{product.description}</p>
      <button onClick={addToCart}>ADD TO CART</button>
    </section>
  );
};
