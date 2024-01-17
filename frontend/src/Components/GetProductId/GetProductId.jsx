import React from "react";
import "./GetProductId.css";

const GetProductId = (props) => {
  const { product } = props;
  return (
    <div className="getProductId">
      HOME <img alt="arrow_icon" />
      SHOP
      <img alt="arrow_icon" />
      {product.category}
      <img alt="arrow_icon" />
      {product.name}
    </div>
  );
};

export default GetProductId;
