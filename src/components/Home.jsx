import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page.</p>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
}