import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Questions? call 071-1663875</h2>

      <div className="row">
        <div className="colum">
          <Link to="">FAQ</Link>
          <Link to="">About Us</Link>
          <Link to="">Privacy</Link>
          <Link to="">Speed Test</Link>
        </div>

        <div className="colum">
          <Link to="">Help Center</Link>
          <Link to="">Jobs </Link>
          <Link to="">Cookies Preferences</Link>
          <Link to="">Legal Notes</Link>
        </div>

        <div className="colum">
          <Link to="">Categories</Link>
          <Link to="">Authors</Link>
          <Link to="">Corporate Information</Link>
          <Link to="">Only on NENAPIYASA</Link>
        </div>

        <div className="colum">
          <Link to="">Media Center</Link>
          <Link to="">Terms of Use</Link>
          <Link to="">Contact Us</Link>
        </div>
      </div>
      <div className="footer-email">
        <input type="text" placeholder="Want to email" />
        <button className="langBtn"> Send</button>
      </div>
      <p className="copyright">NENAPIYASA Sri Lanka</p>
    </div>
  );
};

export default Footer;
