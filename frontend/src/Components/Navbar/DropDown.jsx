import React, { useState } from "react";
import { serviceDropdown } from "./DropDownIcons";
import { Link } from "react-router-dom";
import "./DropDown.css";

const DropDown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <ul
        className={dropdown ? "dropdown-menu clicked" : "dropdown-menu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => serviceDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
