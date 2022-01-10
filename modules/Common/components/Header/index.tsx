import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Tooltip,
} from "@mui/material";
import React from "react";

export interface HeaderProps {
  gridArea: string;
}

export const Header: React.FC<HeaderProps> = ({ gridArea }) => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        boxShadow: 0,
        gridArea,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          boxSizing: "border-box",
          padding: "5px 45px",
        }}
      >
        <Tooltip title="Open settings">
          <IconButton>
            <Avatar
              alt="Remy Sharp"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQE-QRM1Aw-Vng/profile-displayphoto-shrink_800_800/0/1637178360733?e=1647475200&v=beta&t=ZJMFCcl_Yj6YM4JHa3qaK6k7tdsclTMmvUbLrXZx92o"
            />
          </IconButton>
        </Tooltip>
      </Box>
    </AppBar>
  );
};

export default Header;
