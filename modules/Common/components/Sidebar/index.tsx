import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import LaunchIcon from "@mui/icons-material/Launch";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Box
      sx={{
        maxWidth: "370px",
        boxShadow: 3,
      }}
    >
      <Box
        className="logo"
        sx={{
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Logo</Typography>
      </Box>
      <Divider light />
      <Box component="nav">
        <List
          sx={{
            minHeight: "70vh",
          }}
        >
          {NavigatorItems.map((item, key) => (
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

const NavigatorItems: { title: string; icon: JSX.Element }[] = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Lançamento",
    icon: <LaunchIcon />,
  },
  {
    title: "Fluxo de Caixa",
    icon: <VisibilityIcon />,
  },
  {
    title: "Investimentos",
    icon: <ShowChartIcon />,
  },
  {
    title: "Metas",
    icon: <TrackChangesIcon />,
  },
];
