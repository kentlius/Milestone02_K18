import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../Authentication";

function Chat() {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h3>Hi, this is Chat Page!</h3>
      <Link to="/">
        <p style={{ color: "white", background: "black" }}>Back to Home</p>
      </Link>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Chat;
