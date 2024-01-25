import React from "react";
import "./CSS/ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="finder">
        <div className="main-finder">
          <div>
            <h1>
              {" "}
              <span>--------</span> Head Quatres <span>--------</span>{" "}
            </h1>
            <h2>Bandarawela</h2>

            <div>
              <p>
                <span>contact :</span>
                <p>057-5682925</p>
                <p>071-1663875</p>
              </p>
            </div>

            <div>
              <p>
                <span>Email</span>
                <Link>nenapiyasa@gmail.com</Link>
              </p>
              <p>
                Follow us on Facebook
                <Link>nenapiyasa</Link>
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="sub-finder">
          <div>
            <h4>Colombo</h4>
            <p>
              <span>call us</span>
              057-5647383
            </p>
            <p>
              <span>Wattsapp </span>0711663876
            </p>
          </div>

          <div>
            <h4>Kandy</h4>
            <p>
              <span>call us</span>
              057-5647383
            </p>
            <p>
              <span>Wattsapp </span>0711663876
            </p>
          </div>

          <div>
            <h4>Matara</h4>
            <p>
              <span>call us</span>
              057-5647383
            </p>
            <p>
              <span>Wattsapp </span>0711663876
            </p>
          </div>

          <div>
            <h4>Anuradapura</h4>
            <p>
              <span>call us</span>
              057-5647383
            </p>
            <p>
              <span>Wattsapp </span>0711663876
            </p>
          </div>
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
