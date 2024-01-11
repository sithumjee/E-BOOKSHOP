import React from "react";
import "./CSS/ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="main">
        <h3>head quoters</h3>
        <p>
          <span>contact :</span>
          <p>057-5682925</p>
          <p>071-1663875</p>
        </p>
        <p>
          <span>Email</span>
          <Link>nenapiyasa@gmail.com</Link>
        </p>
        <p>
          Follow us on Facebook
          <Link>nenapiyasa</Link>
        </p>
      </div>

      <div className="sub">
        <div className="subbranches">
          <h3>branch name</h3>
          <p>
            <span>call us</span>
            057-5647383
          </p>
          <p>
            <span>Wattsapp </span>0711663876
          </p>
        </div>
        <div className="subbranches">
          <h3>branch name</h3>
          <p>
            <span>call us</span>
            057-5647383
          </p>
          <p>
            <span>Wattsapp </span>0711663876
          </p>
        </div>
        <div className="subbranches">
          <h3>branch name</h3>
          <p>
            <span>call us</span>
            057-5647383
          </p>
          <p>
            <span>Wattsapp </span>0711663876
          </p>
        </div>
        <div className="subbranches">
          <h3>branch name</h3>
          <p>
            <span>call us</span>
            057-5647383
          </p>
          <p>
            <span>Wattsapp </span>0711663876
          </p>
        </div>
      </div>

      <div className="feedback">
        <div className="feedback-banner">
          <div>
            <p>Send your feedback to us</p>
          </div>
          <div>
            <input type="text" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
