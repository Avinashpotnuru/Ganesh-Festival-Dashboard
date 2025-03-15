import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, AttachMoney, Receipt, BarChart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/" },
    { text: "Donations", icon: <AttachMoney />, path: "/donations" },
    { text: "Expenses", icon: <Receipt />, path: "/expenses" },
    { text: "Reports", icon: <BarChart />, path: "/reports" },
  ];

  return (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item.text} component={Link} to={item.path}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
