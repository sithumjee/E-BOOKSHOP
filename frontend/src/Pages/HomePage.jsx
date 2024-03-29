// HomePage.js
import React from "react";
import Home from "../Components/Home/Home";
import "./CSS/HomePage.css";
import HomeNavigate from "../Components/Home/HomeNavigate/HomeNavigate";
import Latest from "../Components/Home/Latest/Latest";
import Popular from "../Components/Home/Popular/Popular";

import AddBanner from "../Components/Home/AddBanner/AddBanner";

const HomePage = () => {
  return (
    <div className="homepage">
      <Home />
      <hr />
      <HomeNavigate />
      <Popular />
      <AddBanner />
      <Latest />
    </div>
  );
};

export default HomePage;
