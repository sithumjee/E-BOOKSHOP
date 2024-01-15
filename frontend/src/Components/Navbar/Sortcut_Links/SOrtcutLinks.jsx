import React from "react";
import "./sortcutLinks.css";
import { Link } from "react-router-dom";

const ShortcutLinks = () => {
  return (
    <div className="shortcut">
      <Link>Authors</Link>
      <Link>School Books</Link>
      <Link>Past Papers</Link>
      <Link>Online Reading</Link>
    </div>
  );
};

export default ShortcutLinks;
