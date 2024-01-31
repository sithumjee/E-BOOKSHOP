// Navbar.js
import React, { useState, useContext } from "react";

import "./Navbar.css";
import logo from "../Assets/logo.png";
import { navItems } from "./NavItmes.js"; // Make sure the import path is correct
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const { totalCartItems } = useContext(ShopContext);
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <img src={logo} alt="logo" />
          <h1>NENAPIYASA</h1>
        </div>
        <div className="navbar__center">
          <ul className="dropdownul">
            {navItems.map((item) => {
              if (item.title === "Categories") {
                return (
                  <li key={item.id} className={item.cName}>
                    <Link
                      onClick={() => setDropdown(!dropdown)} // Toggle the dropdown on click
                    >
                      {item.title}
                    </Link>
                    {dropdown && <DropDown />}
                  </li>
                );
              }

              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="navbar__cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <img src={cart_icon} alt="cart" />
          </Link>

          <span className="cart_count">{totalCartItems()}</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
