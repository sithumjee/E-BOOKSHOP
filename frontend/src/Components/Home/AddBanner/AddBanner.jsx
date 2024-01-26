import React from "react";
import "./AddBanner.css";
import addBannerThinking from "../../Assets/addBannerThinking.png";

const AddBanner = () => {
  return (
    <div className="addBanner">
      <div className="bannerContent">
        <div className="left">
          <h1>Get 20% off on your first order</h1>
          <p>
            Use code <span>WELCOME20</span>
          </p>
          <button>Shop Now</button>
        </div>
        <div className="right">
          <img src={addBannerThinking} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddBanner;
