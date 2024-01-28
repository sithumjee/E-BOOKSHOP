// Schoolbooks.js
import React, { useState } from "react";
import "./Schoolbooks.css";
import booksData from "./booksData"; // Import the book data

const Schoolbooks = () => {
  const [grade, setGrade] = useState("1-5"); // State for grade selection
  const [selectedSubject, setSelectedSubject] = useState("select"); // State for selected subject
  const [relevantBook, setRelevantBook] = useState(null); // State for relevant book details

  const subjectsByGrade = {
    "1-5": [
      "select",
      "Parisaraya",
      "Vidyawa",
      "Sinhala",
      "Ganithaya",
      "Demala",
      "English",
      "Dancing",
      "Art",
      "Music",
    ],
    "6-8": [
      "select",
      "Science",
      "Maths",
      "English",
      "History",
      "Civics",
      "Tamil",
      "Dancing",
      "Art",
      "Music",
      "Sinhala",
      "ICT",
      "Health",
      "PTS",
      "Geography",
    ],
    "9-11": [
      "select",
      "Science",
      "Maths",
      "English",
      "History",
      "Civics",
      "Tamil",
      "Dancing",
      "Art",
      "Music",
      "Sinhala",
      "ICT",
      "Health",
      "PTS",
      "Geography",
      "English Literature",
      "Sinhala Literature",
    ],
  };

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
          <option value="1-5">Grade 1-5</option>
          <option value="6-8">Grade 6-8</option>
          <option value="9-11">Grade 9-11</option>
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
        <div className="book-details">
          <h2>{relevantBook.title}</h2>
          <p>Grade: {relevantBook.grade}</p>
          <p>Subject: {relevantBook.subject}</p>
          <img src={relevantBook.imageUrl} alt={relevantBook.title} />
          <a href={relevantBook.downloadLink} target="_blank" rel="noreferrer">
            Download
          </a>
          <a
            href={relevantBook.readOnlineLink}
            target="_blank"
            rel="noreferrer"
          >
            Read Online
          </a>
        </div>
      )}
    </div>
  );
};

export default Schoolbooks;
