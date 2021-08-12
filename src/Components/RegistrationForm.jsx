import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/RegistrationForm.css";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitClick = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      let data = {
        username: username,
        password: password,
      };

      fetch("/api/create", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => window.alert(data.message));
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div>
      <h2>Register</h2>
      <form action="#">
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={handleUsernameChange}
            value={username}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
          />
        </div>
        <button onClick={onSubmitClick} type="submit">
          Register Now
        </button>
      </form>
      <p>
        Already have an account?<Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}

export default RegistrationForm;
