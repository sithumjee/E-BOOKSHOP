import React from "react";
import "./CSS/ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="main">
        <h1>
          BANDARAWELA (<span>Head Quatres</span>)
        </h1>
        <p>
          <span>Address :</span>
          No. 123, Main Street, Bandarawela.
        </p>

        <div className="mainDetails">
          <div>
            <p>
              <span>contact :</span>
              <p>057-5682925</p>
              <p>071-1663875</p>
            </p>
          </div>

          <div>
            <p>
              <span>Email: </span>
              <Link>nenapiyasa@gmail.com</Link>
            </p>
            <p>
              Follow us on Facebook
              <Link> nenapiyasa</Link>
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="sub">
        <div className="subbranches">
          <h3>Colombo</h3>
          <p>
            <span>call us</span>
            057-5647383
          </p>
          <p>
            <span>Whatsapp </span>0711663876
          </p>
        </div>
        <div className="subbranches">
          <h3>Kandy</h3>
          <p>
            <span>call us</span>
            057-5647383
          </p>
          <p>
            <span>Whatsapp </span>0711663876
          </p>
        </div>
        <div className="subbranches">
          <h3>Matara</h3>
          <p>
            <span>call us</span>
            057-5647383
          </p>
          <p>
            <span>Whatsapp </span>0711663876
          </p>
        </div>
        <div className="subbranches">
          <h3>Anuradapura</h3>
          <p>
            <span>call us</span>
            057-5647383
          </p>
          <p>
            <span>Whatsapp </span>0711663876
          </p>
        </div>
      </div>

      <hr />

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
