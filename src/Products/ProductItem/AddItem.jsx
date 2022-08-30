import React from "react";
import "./AddItem.css";
export const AddItem = () => {
  function addItem(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h2>AddItem</h2>
      <form onSubmit={addItem} className="add-item-form">
        <label>
          Item Name
          <input type="text" name="productName" placeholder="Product Name" />
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
          <input type="file" name="product image" id="" />
        </label>
        <label>
          Upload Image
          <input type="file" name="product image" id="" />
        </label>
        <label>
          Upload Image
          <input type="file" name="product image" id="" />
        </label>
        <label>
          Upload Image
          <input type="file" name="product image" id="" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};
