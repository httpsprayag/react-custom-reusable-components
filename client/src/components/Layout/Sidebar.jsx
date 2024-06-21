/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const drawerWidth = 240;
const collapsedWidth = 60;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Profile", icon: <AccountCircleIcon /> },
    { text: "Notifications", icon: <NotificationsIcon /> },
    { text: "Analytics", icon: <TrendingUpIcon /> },
  ];

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => toggleSidebar(false)}
      variant="permanent"
      sx={{
        width: collapsed ? collapsedWidth : drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: collapsed ? collapsedWidth : drawerWidth,
          backgroundColor: "#f0f0f0", // Light background color
          transition: (theme) =>
            theme.transitions.create(["width"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          overflowX: "hidden",
        },
      }}
    >
      <List>
        <ListItem disablePadding>
          <IconButton onClick={() => setCollapsed(!collapsed)}>
            <MenuIcon />
          </IconButton>
        </ListItem>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{ justifyContent: collapsed ? "center" : "flex-start" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: collapsed ? 0 : 3,
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            {!collapsed && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
