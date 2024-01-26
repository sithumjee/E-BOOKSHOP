import React, { useState } from "react";
import "./Schoolbooks.css";

const Schoolbooks = () => {
  const [grade, setGrade] = useState("1-5"); // State for grade selection

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
  };

  return (
    <div className="schoolbooks">
      <h1>--- Schoolbooks ---</h1>

      <div className="search-box">
        <select value={grade} onChange={handleGradeChange}>
          <option value="1-5">Grade 1-5</option>
          <option value="6-8">Grade 6-8</option>
          <option value="9-11">Grade 9-11</option>
        </select>

        <select>
          {subjectsByGrade[grade].map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        <button>Search</button>
      </div>

      <div className="content"></div>
    </div>
  );
};

export default Schoolbooks;
