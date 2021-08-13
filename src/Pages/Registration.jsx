import React from "react";
import RegistrationForm from "../Components/RegistrationForm";

function Registration() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #effff9 82.29%, #e3fff5 100%)",
      }}
    >
      <div style={{ width: "80%", margin: "auto" }}>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default Registration;
