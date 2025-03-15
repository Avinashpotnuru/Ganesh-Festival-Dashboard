/* eslint-disable react/prop-types */
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const Navbar = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Responsive check

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
        <Typography variant="h6" noWrap>
          Ganesh Festival Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
