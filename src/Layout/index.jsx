import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Navbar, Sidebar } from "../components/index";

const drawerWidth = 240;

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Responsive check

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Navbar handleDrawerToggle={handleDrawerToggle} />

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Sidebar />
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
