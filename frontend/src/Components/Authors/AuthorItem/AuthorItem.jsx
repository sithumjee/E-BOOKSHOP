import React from "react";
import "./AuthorItem.css";
import { Link } from "react-router-dom";

const AuthorItem = (props) => {
  return (
    <div className="authorItem">
      <Link to={props.path}>
        <h4>{props.name}</h4>
        <p>{props.amount}</p>
      </Link>
    </div>
  );
};

export default AuthorItem;
