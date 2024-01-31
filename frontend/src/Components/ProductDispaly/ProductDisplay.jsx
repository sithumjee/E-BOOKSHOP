import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

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

        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
