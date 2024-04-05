import React, { useState } from "react";
import "./Transaction.css";

const Transaction = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    paymentMethod: "delivery", // Default payment method
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the user info to the server for payment processing
    console.log(userInfo);
  };

  return (
    <div className="transaction">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={userInfo.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={userInfo.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="address"
          value={userInfo.address}
          onChange={handleInputChange}
          placeholder="Address"
        />
        <select
          name="paymentMethod"
          value={userInfo.paymentMethod}
          onChange={handleInputChange}
        >
          <option value="delivery">After Delivery</option>
          <option value="online">Online</option>
        </select>
        {userInfo.paymentMethod === "online" && (
          <div>
            <input
              type="text"
              name="cardNumber"
              value={userInfo.cardNumber}
              onChange={handleInputChange}
              placeholder="Card Number"
            />
            <input
              type="text"
              name="expiryDate"
              value={userInfo.expiryDate}
              onChange={handleInputChange}
              placeholder="Expiry Date"
            />
            <input
              type="text"
              name="cvv"
              value={userInfo.cvv}
              onChange={handleInputChange}
              placeholder="CVV"
            />
            <input
              type="text"
              name="cardHolderName"
              value={userInfo.cardHolderName}
              onChange={handleInputChange}
              placeholder="Card Holder Name"
            />
          </div>
        )}
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default Transaction;
