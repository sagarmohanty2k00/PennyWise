import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About</h1>
      <p>About this app.</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}