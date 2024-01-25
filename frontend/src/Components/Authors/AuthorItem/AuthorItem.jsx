import React from "react";
import "./AuthorItem.css";
import { Link } from "react-router-dom";

const AuthorItem = (props) => {
  return (
    <div className="authorItem">
      <div className="itemComponent">
        <Link to={props.path}>
          <h4>
            {props.name} <span>{props.amount} books</span>
          </h4>
        </Link>
      </div>

      <hr />
    </div>
  );
};

export default AuthorItem;
