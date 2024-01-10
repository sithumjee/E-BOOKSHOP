import React from "react";
import "./HomeNavigate.css";

const HomeNavigate = () => {
  return (
    <div className="homeNavigate">
      <div className="navigate-header">
        <h1>CATEGORIES</h1>
      </div>
      <hr />
      <div className="navigate-content">
        <div className="navigate-content-box">
          <h3>Romance</h3>
        </div>
        <div className="navigate-content-box">
          <h3>Fiction</h3>
        </div>
        <div className="navigate-content-box">
          <h3>History</h3>
        </div>
        <div className="navigate-content-box">
          <h3>Business & Money</h3>
        </div>
        <div className="navigate-content-box">
          <h3>Adventure</h3>
        </div>
        <div className="navigate-content-box">
          <h3>Romance</h3>
        </div>
        <div className="navigate-content-box">
          <h3>Fiction</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeNavigate;
