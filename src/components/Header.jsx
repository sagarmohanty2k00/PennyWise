import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";

export default function Header({ loggedIn, onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const showBackButton = !(location.pathname === "/" || location.pathname === "/login");
  const showHomeButton = location.pathname !== "/";

  const handleLogoutClick = () => {
    onLogout();
    navigate("/login", { replace: true });
  };

  return (
    <AppBar position="static" color="primary" sx={{ mb: 3 }}>
      <Toolbar>
        {showBackButton && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={() => navigate(-1)}
            sx={{ mr: 1 }}
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        {showHomeButton && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            onClick={() => navigate("/")}
            sx={{ mr: 1 }}
          >
            <HomeIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Expense Tracker
        </Typography>
        {loggedIn && (
          <Button color="inherit" onClick={handleLogoutClick}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
