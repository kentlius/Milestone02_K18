import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login, logout, useAuth } from "../Authentication";
import styles from "./style/LoginForm.module.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logged] = useAuth();

  const onSubmitClick = (event) => {
    event.preventDefault();
    let data = {
      username: username,
      password: password,
    };
    console.log(data);
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((token) => {
        if (token.access_token) {
          login(token);
          window.alert("Login successful!");
        } else {
          window.alert("Please type in correct username/password");
        }
      });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <h2 className={styles.title}>Login</h2>
        {!logged ? (
          <div>
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
              <button
                className={styles.logButton}
                onClick={onSubmitClick}
                type="submit"
              >
                Login Now
              </button>
            </form>
            <p>
              Don't have an account yet?{" "}
              <Link className={styles.link} to="/register">
                Sign up
              </Link>
            </p>
          </div>
        ) : (
          <button className={styles.logButton} onClick={() => logout()}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
