import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="logo" />
        <h1>NENAPIYASA</h1>
      </div>
      <div className="navbar__center">
        <ul className="navbar__center__list">
          <li className="navbar__center__list__item">
            <Link>Home</Link>
          </li>
          <li className="navbar__center__list__item">
            <Link>About</Link>
          </li>
          <li className="navbar__center__list__item">
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        <button>LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
