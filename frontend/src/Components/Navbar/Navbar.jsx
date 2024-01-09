// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { navItems } from "./NavItmes.js"; // Make sure the import path is correct
import DropDown from "./DropDown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
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

        <div className="navbar__right">
          <button>LOGIN</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
