import React from "react";
import "./BookDetails.css"; // Import the CSS file for styling book details

const BookDetails = ({ book }) => {
  const { image, name, grade } = book; // Assuming the book object contains image, name, and grade properties

  return (
    <div className="book-details">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>Grade: {grade}</p>
        <div className="buttons">
          <button>Read Online</button>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
