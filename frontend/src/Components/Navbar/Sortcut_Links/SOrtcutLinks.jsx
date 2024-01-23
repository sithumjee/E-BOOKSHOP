import React from "react";
import "./sortcutLinks.css";
import { Link } from "react-router-dom";

const ShortcutLinks = () => {
  return (
    <div className="shortcut">
      <Link to="/author">Authors</Link>
      <Link to="schoolbooks">School Books</Link>
      <Link to="pastPapers">Past Papers</Link>
      <Link to="onlineReading">Online Reading</Link>
    </div>
  );
};

export default ShortcutLinks;
