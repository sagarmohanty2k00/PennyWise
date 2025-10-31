import { useState } from "react";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";
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
      navigate("/", { replace: true });
    } else {
      setError("Please enter email and password.");
    }
  };

  return (
    <Box component="form" onSubmit={fakeAuth} sx={{ maxWidth: 400, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setError(null); }}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => { setPassword(e.target.value); setError(null); }}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Sign In
      </Button>
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
}
