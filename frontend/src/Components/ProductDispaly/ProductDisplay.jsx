import React, { useContext } from "react";
import "./ProductDisplay.css";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="productDisplay">
      <div className="display-left">
        <div className="productDisplay-img">
          <img className="productDisplay-img-main" src={product.image} alt="" />
        </div>
      </div>

      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="display-right-star">
          <p>(122)</p>
        </div>

        <div className="display-right-price">
          <div className="rightPriceOld">Rs {product.old_price}</div>
          <div className="rightPriceNew">Rs {product.new_price}</div>
        </div>

        <div className="display-right-description">
          <p>{product.description}</p>
        </div>

        <button>ADD TO CART</button>
        <p className="displayCategory">
          <span>Category :</span>Women , T-shirt, Crop Top{" "}
        </p>
        <p className="displayCategory">
          <span>Tags :</span>Modern , Latest{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
