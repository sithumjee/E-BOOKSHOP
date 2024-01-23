import React from "react";
import "./Authors.css";

const Authors = () => {
  return (
    <div className="authors">
      <div className="top-container">
        <input type="text" placeholder="Search by name" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Authors;
