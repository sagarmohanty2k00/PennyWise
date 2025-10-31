import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fakeAuth = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
      navigate("/", { replace: true });  // Redirect to home on login success
    } else {
      setError("Please enter email and password.");
    }
  };

  return (
    <form onSubmit={fakeAuth} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setError(null); }}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => { setPassword(e.target.value); setError(null); }}
        required
      />
      <button type="submit">Sign In</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
