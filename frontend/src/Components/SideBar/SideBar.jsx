import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="left-sidebar">
        <div className="imp-links">
          <Link>
            <img alt="" />
            Friends
          </Link>
          <Link>
            <img alt="" />
            Groups
          </Link>
          <Link>
            <img alt="" />
            Market Places
          </Link>
          <Link>
            <img alt="" />
            Watch
          </Link>
          <Link>
            <img alt="" />
            Latest News
          </Link>
          <Link>see more</Link>
        </div>

        <div className="shortcut-links">
          <p>Your Shortcuts</p>
          <Link>
            <img alt="" />
            Web Developers
          </Link>
          <Link>
            <img alt="" />
            Web Design Course
          </Link>
          <Link>
            <img alt="" />
            Full Stack Development
          </Link>
          <Link>
            <img alt="" />
            Website Experts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
