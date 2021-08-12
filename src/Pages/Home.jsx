import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ margin: "auto", width: "80%" }}>
      <h2>Hello, this is home page!</h2>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Home;
