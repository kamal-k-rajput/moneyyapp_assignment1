import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { ProductItem } from "./ProductItem/ProductItem";
import uniqid from "uniqid";

import "./Products.css";
export const Products = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((store) => {
    return store.products;
  });
  useEffect(() => {
    axios
      .get(
        "http://localhost:5600/product?results=10&pageNo=1&sortBy=-1&minPrice=0&maxPrice=1000000000"
      )
      .then((res) => {
        dispatch({ type: "addProduct", payload: res.data.products });
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .then((data) => {
        return setData(data);
      });
  }, []);

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
