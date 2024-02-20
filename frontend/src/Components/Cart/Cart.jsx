import React, { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const Cart = () => {
  const { all_product, cartItems, removeToCart, cartTotal } =
    useContext(ShopContext);
  return (
    <div className="carditems">
      <div className="cartitems-format-main">
        <p>Book Name</p>
        <p>Author Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={item.id}>
              <div className="carditems-format">
                <p>{item.name}</p>
                <p>{item.Author_Name}</p>
                <p>Rs {item.new_price}</p>
                <p className="carditem-quantity">{cartItems[item.id]}</p>
                <p className="totalprice">
                  Rs {item.new_price * cartItems[item.id]}
                </p>
                <img
                  className="remove-icon"
                  src={remove_icon}
                  alt="Remove"
                  onClick={() => {
                    removeToCart(item.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null; // Ensure a value is always returned from the map function
      })}

      <div className="cardItems-down">
        <div className="cardItems-total">
          <h1>CART TOTAL</h1>
          <div>
            <div className="cardItems-total-item">
              <p>SubTotal</p>
              <p>Rs {cartTotal()}</p>
            </div>

            <div className="cardItems-total-item">
              <p>Shipping</p>
              <p> Rs {cartTotal() * 0.2}</p>
            </div>

            <div className="cardItems-total-item">
              <h3>Total</h3>
              <h3>Rs {cartTotal() * 1.2}</h3>
            </div>
          </div>

          <button>Proceed to Checkout</button>
        </div>
        <div className="cartItems-promocode">
          <p>If you have a promo code,Enter it here</p>
          <div className="cardItems-promobox">
            <input type="text" placeholder="Enter Code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
