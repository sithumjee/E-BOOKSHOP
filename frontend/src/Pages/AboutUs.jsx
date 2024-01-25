import React from "react";
import "./CSS/AboutUs.css";
import originImage from "../Components/Assets/originImage.jpg";
import founderImage from "../Components/Assets/founderImage.jpg";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="textHeader">
        <h1>
          {" "}
          <span>--------</span> ORIGIN <span>--------</span>{" "}
        </h1>
      </div>

      <div className="container">
        <div className="left-container">
          <img src={originImage} alt="" />
        </div>
        <div className="right-container">
          <p>
            Our bookshop was born out of a love for literature and a passion for
            sharing great stories with our community. What started as a small
            collection of books in a cozy corner of town has grown into a
            beloved destination for book lovers of all ages. Our founders,
            <span>Sithum and Koshal</span>, envisioned a place where people
            could discover new worlds within the pages of a book and connect
            with others who share their love for reading. From humble
            beginnings, our bookshop has evolved into a welcoming space where
            everyone is encouraged to explore, learn, and find their next
            favorite read. We take pride in curating a diverse selection of
            books, from timeless classics to contemporary bestsellers, ensuring
            that there's something for every reader. Our commitment to fostering
            a love of reading extends beyond our shelves, as we regularly host
            author events, book clubs, and literary discussions to create a
            vibrant literary community. Whether you're seeking a literary
            adventure or a quiet escape, we invite you to immerse yourself in
            the magic of storytelling at our bookshop
          </p>
        </div>
      </div>

      <div className="textHeader">
        <h1>
          {" "}
          <span>--------</span> FOUNDER <span>--------</span>{" "}
        </h1>
      </div>
      <div className="container">
        <div className="left-container">
          <img src={founderImage} alt="" />
        </div>
        <div className="right-container">
          <div className="founder-info">
            <h2>Founder Information</h2>
            <p>
              <strong>Full Name:</strong> J.M. Sithum Jeevantha Jayarathna
            </p>
            <p>
              <strong>Birthday:</strong> 2000.04.29
            </p>
            <p>
              <strong>Address:</strong> "Jayasiri", Ambegoda, Diganathenna,
              Bandarawela, Sri Lanka
            </p>
            <p>
              <strong>Education:</strong> Undergraduate in Data Science
              Engineering at University of Moratuwa
            </p>
            <p>
              <strong>Founding Date of the Bookshop:</strong> 2023/12/12
            </p>
            <p className="founder-message">
              Hello, I'm J.M. Sithum Jeevantha Jayarathna, the founder of our
              beloved bookshop. It brings me great joy to see our humble
              beginning grow into a cherished haven for book enthusiasts. Our
              vision has always been to create a space where individuals can
              immerse themselves in the wonders of literature and connect with
              like-minded readers. I invite you to explore the diverse
              collection of books we offer and experience the magic of
              storytelling within our welcoming community. Thank you for being a
              part of our journey.
            </p>
          </div>
        </div>
      </div>

      <div className="textHeader">
        <h1>
          {" "}
          <span>--------</span> WHERE TO FIND <span>--------</span>{" "}
        </h1>
      </div>
      <div className="finder">
        <div className="main-finder">
          <div>
            <h2>Head Quatres</h2>
            <h5>Bandarawela</h5>
            <p>
              <span>Address : </span>
              66/2 Central Road, Bandarawela
            </p>
          </div>
        </div>

        <hr />
        <div className="sub-finder">
          <div>
            <h5>Colombo</h5>
            <p>
              <span>Address : </span>
              15/2 Senanayanka Road, Colombo
            </p>
          </div>

          <div>
            <h5>Kandy</h5>
            <p>
              <span>Address : </span>
              87/7 main Street, Kandy
            </p>
          </div>

          <div>
            <h5>Matara</h5>
            <p>
              <span>Address : </span>
              34/2 Seaside Road, Mathara
            </p>
          </div>

          <div>
            <h5>Anuradapura</h5>
            <p>
              <span>Address : </span>
              11/2 Curved Road, Anuradapura
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
