import axios from "axios";
import React, { useState } from "react";
import "./AddItem.css";
export const AddItem = () => {
  const authorisation = JSON.parse(localStorage.getItem("authorisation"));
  const [formdata, setFormData] = useState({
    productName: "",
    mrp: 0,
    discount: 0,
    quantitiy: 100,
    deliveryCharge: 40,
    description: "",
    images: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    let token = `Bearer ${authorisation}`;
    console.log(formdata);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorisation: token,
      },
    };
    axios
      .post("http://localhost:5600/product/create", formdata, requestOptions)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  }
  return (
    <div>
      <h2>AddItem</h2>
      <form onSubmit={handleSubmit} className="add-item-form">
        <label>
          Item Name
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity
          <input
            type="number"
            onChange={handleChange}
            placeholder="quantity"
            min="1"
            name="quantity"
          />
        </label>
        <label>
          Description
          <textarea
            type="text"
            name="description"
            onChange={handleChange}
            placeholder="Product description"
          />
        </label>
        <label>
          Maximum Retail Price
          <input
            type="number"
            name="mrp"
            min="1"
            placeholder="MRP"
            onChange={handleChange}
          />
        </label>
        <label>
          Discount
          <input
            type="number"
            name="discount"
            min="0"
            placeholder="DISCOUNT"
            onChange={handleChange}
          />
        </label>
        <label>
          Image address
          <input
            type="text"
            name="images"
            id=""
            placeholder="image url"
            onChange={handleChange}
          />
        </label>

        <input type="submit" />
      </form>
    </div>
  );
};
