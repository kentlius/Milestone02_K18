import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style/RegistrationForm.module.css";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitClick = (event) => {
    event.preventDefault();
    if (username == "" || password == "" || confirmPassword == "") {
      window.alert("Please fill the form!");
    } else if (password === confirmPassword) {
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
    <div className={styles.regContainer}>
      <div className={styles.reg}>
        <h2 className={styles.title}>Register</h2>
        <form action="#">
          <div>
            <input
              className={styles.inputForm}
              type="text"
              placeholder="Username"
              onChange={handleUsernameChange}
              value={username}
            />
          </div>
          <div>
            <input
              className={styles.inputForm}
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div>
            <input
              className={styles.inputForm}
              type="password"
              placeholder="Confirm Password"
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
            />
          </div>
          <button
            className={styles.logButton}
            onClick={onSubmitClick}
            type="submit"
          >
            Register Now
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className={styles.link} to="/login">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;
