import aboutImage from "../Assets/aboutImage.jpg";

const booksData = {
  "1-5": {
    Parisaraya: {
      title: "Parisaraya Book",
      grade: "1-5",
      subject: "Parisaraya",
      imageUrl: aboutImage,
      downloadLink: "parisaraya.pdf",
      readOnlineLink: "parisaraya-online",
    },
    Vidyawa: {
      title: "Vidyawa Book",
      grade: "1-5",
      subject: "Vidyawa",
      imageUrl: "vidyawa.jpg",
      downloadLink: "vidyawa.pdf",
      readOnlineLink: "vidyawa-online",
    },
    // Add more books for grades 1-5
  },
  "6-8": {
    Science: {
      title: "Science Book",
      grade: "6-8",
      subject: "Science",
      imageUrl: "science.jpg",
      downloadLink: "science.pdf",
      readOnlineLink: "science-online",
    },
    Maths: {
      title: "Maths Book",
      grade: "6-8",
      subject: "Maths",
      imageUrl: "maths.jpg",
      downloadLink: "maths.pdf",
      readOnlineLink: "maths-online",
    },
    // Add more books for grades 6-8
  },
  // Add books for other grades
};

export default booksData;
