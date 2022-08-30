import React, { useState } from "react";
import "./AddItem.css";
export const AddItem = () => {
  const [formdata, setFormData] = useState({
    productName: "",
    mrp: 0,
    discount: 0,
    quantitiy: 100,
    deliveryCharge: 40,
    description: "",
    images: [],
  });
  function addItem(e) {
    e.preventDefault();
    console.log("new item created successfully");
  }
  function handleChange(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h2>AddItem</h2>
      <form onSubmit={addItem} className="add-item-form">
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
          <input type="number" placeholder="quantity" min="1" name="quantity" />
        </label>
        <label>
          Description
          <textarea
            type="text"
            name="description"
            placeholder="Product description"
          />
        </label>
        <label>
          Maximum Retail Price
          <input type="number" name="mrp" min="1" placeholder="MRP" />
        </label>
        <label>
          Discount
          <input type="number" name="discount" min="0" placeholder="DISCOUNT" />
        </label>
        <label>
          Upload Image
          <input type="file" name="productimage1" id="" />
        </label>
        <label>
          Upload Image
          <input type="file" name="productimage2" id="" />
        </label>
        <label>
          Upload Image
          <input type="file" name="productimage3" id="" />
        </label>
        <label>
          Upload Image
          <input type="file" name="producttmage4" id="" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};
