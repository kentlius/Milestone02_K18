import React from "react";
import LoginForm from "../Components/LoginForm";

function Login() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #effff9 82.29%, #e3fff5 100%)",
      }}
    >
      <div style={{ width: "80%", margin: "auto" }}>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
