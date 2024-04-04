import React, { useState } from "react";

const AuthPage = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add your authentication logic here.
    // For now, let's use a simple hardcoded username and password.
    if (username === "admin" && password === "admin") {
      // If the authentication is successful, navigate to the home page.
      history.push("/");
    } else {
      alert("Invalid username or password.");
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <h1>Authentication</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
