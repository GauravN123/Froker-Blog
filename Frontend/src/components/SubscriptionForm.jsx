// src/components/SubscriptionForm.js
import React from "react";
import "./css/SubscriptionForm.css";
import subscription from "../assets/subscription.png";

const SubscriptionForm = () => {
  return (
    <div className="subscription-form">
      <h3>Subscribe to our newsletter to get the latest updates and news</h3>
      <form>
      <img className="img-sub" src={subscription} alt="QR Code" />
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
