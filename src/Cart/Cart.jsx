import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const isLoggedIn = useSelector((store) => {
    return store.isLoggedIn;
  });
  const cart = useSelector((store) => {
    return store.cart;
  });
  useEffect(() => {
    setTotalPrice(0);
    cart.map((el) => {
      let x = (Math.floor(el.mrp * (100 - el.discount)) / 100).toFixed(0);
      setTotalPrice((totalPrice) => {
        return +totalPrice + +x;
      });
    });
  }, []);

  return (
    <>
      <h2>Cart items</h2>
      {!isLoggedIn ? (
        <div>"Login first to view items"</div>
      ) : (
        <span>Your Items</span>
      )}
      <table>
        <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>M.R.P.</th>
            <th>DISCOUNT </th>
            <th>PRICE </th>
          </tr>
        </thead>

        <tbody>
          {cart.map((el) => {
            return (
              <tr>
                <td>{el.productName}</td>
                <td>{el.mrp}</td>
                <td>
                  {el.discount}
                  {"%"}
                </td>
                <td>
                  {(Math.floor(el.mrp * (100 - el.discount)) / 100).toFixed(0)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        Total Price : <b>{totalPrice}</b>
      </div>
      <button>Proceed to pay</button>
    </>
  );
};
