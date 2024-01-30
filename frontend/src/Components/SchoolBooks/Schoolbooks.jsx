// Schoolbooks.js
import React, { useState } from "react";
import "./Schoolbooks.css";
import booksData from "./booksData"; // Import the book data
import subjectsByGrade from "./Subjects";

const Schoolbooks = () => {
  const [grade, setGrade] = useState("Grade 1"); // State for grade selection
  const [selectedSubject, setSelectedSubject] = useState("select"); // State for selected subject
  const [relevantBook, setRelevantBook] = useState(null); // State for relevant book details

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
    setSelectedSubject("select"); // Reset selected subject when grade changes
    setRelevantBook(null); // Reset relevant book details
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleSearch = () => {
    const relevantBookInfo = booksData[grade][selectedSubject];
    if (relevantBookInfo) {
      setRelevantBook(relevantBookInfo);
    }
  };

  return (
    <div className="schoolbooks">
      <h1>--- Schoolbooks ---</h1>
      <h3>Search For the Relevant Grade and Subject </h3>

      <div className="search-box">
        <select value={grade} onChange={handleGradeChange}>
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 2">Grade 2</option>
          <option value="Grade 3">Grade 3</option>
          <option value="Grade 4">Grade 4</option>
          <option value="Grade 5">Grade 5</option>
          <option value="Grade 6">Grade 6</option>
          <option value="Grade 7">Grade 7</option>
          <option value="Grade 8">Grade 8</option>
          <option value="Grade 9">Grade 9</option>
          <option value="Grade 10">Grade 10</option>
          <option value="Grade 11">Grade 11</option>
        </select>

        <select value={selectedSubject} onChange={handleSubjectChange}>
          {subjectsByGrade[grade].map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      <hr />

      {relevantBook && (
        <>
          <div className="book-details">
            <div className="bookImage">
              <img src={relevantBook.imageUrl} alt={relevantBook.title} />
            </div>
            <div className="bookContent">
              <h2>{relevantBook.title}</h2>
              <p>
                <span>Grade:</span>
                {relevantBook.grade}
              </p>
              <p>
                <span>Subject:</span>
                {relevantBook.subject}
              </p>
            </div>
          </div>
          <div className="options">
            <div>
              <a
                className="download"
                href={relevantBook.downloadLink}
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </div>
            <div>
              <a
                href={relevantBook.readOnlineLink}
                target="_blank"
                rel="noreferrer"
              >
                Read Online
              </a>
            </div>
          </div>

          <hr />
        </>
      )}
    </div>
  );
};

export default Schoolbooks;
