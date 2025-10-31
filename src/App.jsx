import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Container } from "@mui/material";

import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Expenses from "./components/Expenses";
import EMIs from "./components/EMIs";
import Stats from "./components/Stats";

const theme = createTheme();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Logout handler clears login state and navigates to login page
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header loggedIn={loggedIn} onLogout={handleLogout} />
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/login" element={<Login onLogin={() => setLoggedIn(true)} />} />
            <Route path="/" element={loggedIn ? <Home /> : <Navigate to="/login" replace />} />
            <Route
              path="/expenses"
              element={loggedIn ? <Expenses /> : <Navigate to="/login" replace />}
            />
            <Route path="/emis" element={loggedIn ? <EMIs /> : <Navigate to="/login" replace />} />
            <Route path="/stats" element={loggedIn ? <Stats /> : <Navigate to="/login" replace />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
