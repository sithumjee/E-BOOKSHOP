import React from "react";
import "./HomeBanner.css";
import homeBanner from "../../Assets/homebanner.jpg";

const HomeBanner = () => {
  return (
    <div className="banner">
      <div className="banner__image">
        <img src={homeBanner} alt="banner" />
      </div>
      <div className="banner__content">
        <h1>Welcome to Our Bookstore</h1>
        <p>Discover a world of great books</p>
      </div>
    </div>
  );
};

export default HomeBanner;
