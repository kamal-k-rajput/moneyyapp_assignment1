import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("authorisation");
    dispatch({
      type: "logout",
    });
  }, []);
  return <div>Logged out Successfully</div>;
};
