import React from "react";
import "./Authors.css";
import authorList from "./AuthorList";
import AuthorItem from "./AuthorItem/AuthorItem";

const Authors = () => {
  return (
    <div className="authors">
      <div className="top-container">
        <input type="text" placeholder="Search by name" />
        <button>Search</button>
      </div>

      <div className="author-list">
        {authorList.map((item, i) => {
          return (
            <AuthorItem
              key={i}
              id={item.id}
              name={item.name}
              amount={item.amount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Authors;
