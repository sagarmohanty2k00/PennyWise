import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Expenses from "./components/Expenses";
import EMIs from "./components/EMIs";
import Stats from "./components/Stats";
import "./App.css";

function App() {
  // Simulated auth state for demo
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <main className="container">
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setLoggedIn(true)} />} />
          {/* Redirect to login if not logged in */}
          <Route path="/" element={loggedIn ? <Home /> : <Navigate to="/login" replace />} />
          <Route path="/expenses" element={loggedIn ? <Expenses /> : <Navigate to="/login" replace />} />
          <Route path="/emis" element={loggedIn ? <EMIs /> : <Navigate to="/login" replace />} />
          <Route path="/stats" element={loggedIn ? <Stats /> : <Navigate to="/login" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
