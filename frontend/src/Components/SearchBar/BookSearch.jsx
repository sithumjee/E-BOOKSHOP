import React, { useState } from "react";
import "./BookSearch.css";

const BookSearch = ({ allProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Perform the search based on the search term
    const searchResults = allProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.Author_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    // Handle the search results, e.g., display them or pass them to another component
    console.log(searchResults);
  };

  return (
    <div className="searchbox">
      <input
        type="text"
        placeholder="Search for books"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default BookSearch;
