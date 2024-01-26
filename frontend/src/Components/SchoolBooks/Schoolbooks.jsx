import React from "react";
import "./Schoolbooks.css";

const Schoolbooks = () => {
  return (
    <div className="schoolbooks">
      <h1>--- Schoolbooks ---</h1>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Schoolbooks;
