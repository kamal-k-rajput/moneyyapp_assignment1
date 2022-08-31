import React from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => {
    return store.isLoggedIn;
  });

  function addToCart(product) {
    dispatch({
      type: "addtocart",
      payload: product,
    });
    if (!isLoggedIn) {
      alert("Please Log in first to add product in cart");
    }

    // item addition in cart
  }

  return (
    <section className="item-container">
      <img alt="product" src={product.images[0]} />
      <p className="product-title">
        <b>{product.productName}</b>
      </p>
      <p>
        <span>M.R.P. </span>
        {product.mrp}
      </p>
      <p>
        <span>Discount </span>
        <span>{product.discount}</span>
      </p>
      <p>
        <span>Delivery Charge </span>
        <span>{product.deliveryCharge}</span>
      </p>
      <p>
        <span>Remaining Items </span>
        <span>{product.quantity}</span>
      </p>
      <p className="product-description">
        
        <div>
          <h2>discription</h2>
          {product.description}</div>
      </p>
      <button
        className="add-to-cart-btn"
        onClick={(e) => {
          e.preventDefault();
          addToCart(product);
        }}
      >
        ADD TO CART
      </button>
      <Link to={`/product/${product._id}`}>
        <button className="review-btn">Review &amp; Product Details</button>
      </Link>
    </section>
  );
};
