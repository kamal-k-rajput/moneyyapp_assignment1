import React from "react";
import { Link } from "react-router-dom";
import "./NotificationPanel.css";
export const NotificationPanel = () => {
  return (
    <div className="notification-container">
      <b>Notification</b>
      <p>
        for
        <Link to="/login"> login </Link>
        purpose use abc@mail.com and password abc@123 OR create an account
      </p>
    </div>
  );
};
