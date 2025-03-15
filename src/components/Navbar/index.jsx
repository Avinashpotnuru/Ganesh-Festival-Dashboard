/* eslint-disable react/prop-types */
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const Navbar = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
        ml: isMobile ? 0 : `${drawerWidth}px`,
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Ganesh Festival Dashboard
        </Typography>
        <IconButton color="inherit" edge="end">
          <LogoutIcon onClick={handleLogout} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
