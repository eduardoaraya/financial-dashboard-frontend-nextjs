import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Typography,
  Theme,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import navigationItems from "./navigationItems";

export interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Box sx={style()}>
      <Box className="logo">
        <Typography variant="h3">Logo</Typography>
      </Box>
      <Divider light />
      <Box component="nav">
        <List className="navigator-list">
          {navigationItems.map((item, key) => (
            <ListItem key={key} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider light />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Configurações" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

const style = (): SxProps<Theme> => ({
  width: "100%",
  maxWidth: "370px",
  boxShadow: 3,
  position: "fixed",
  height: "100%",
  top: "66px",
  left: 0,
  background: "#FFF",
  zIndex: 99,
  ".logo": {
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".navigator-list": {
    height: "100%",
    minHeight: "calc(70vh - 66px)",
  },
});
