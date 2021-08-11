import React, { useState } from "react";
import { login, logout, useAuth } from "../Authentication";
import "./style/LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logged] = useAuth();

  const onSubmitClick = (event) => {
    event.preventDefault();
    console.log("You pressed login button");
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
        } else {
          console.log("Please type in correct username/password");
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
    <div>
      <h2>Login</h2>
      {!logged ? (
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
          <button onClick={onSubmitClick} type="submit">
            Login Now
          </button>
        </form>
      ) : (
        <button onClick={() => logout()}>Logout</button>
      )}
    </div>
  );
}

export default LoginForm;
