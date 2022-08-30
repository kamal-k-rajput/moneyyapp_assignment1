import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductItem } from "./ProductItem/ProductItem";
import uniqid from "uniqid";
import "./Products.css";
export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => {
    return store.products;
  });
  return (
    <>
      <h2>Products</h2>
      <div className="products-container">
        {products.map((el) => {
          return <ProductItem product={el} key={uniqid()} />;
        })}
      </div>
    </>
  );
};
