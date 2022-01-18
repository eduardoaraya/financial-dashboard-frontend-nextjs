import React from "react";
import { SxProps, Theme } from "@mui/system";
import { AppBar, Avatar, Box, IconButton, Tooltip } from "@mui/material";

export interface HeaderProps {
  avatarPhoto?: string;
}

export const Header: React.FC<HeaderProps> = ({ avatarPhoto }) => {
  return (
    <AppBar position="static" color="primary" sx={style()}>
      <Box className="wrapper">
        <Tooltip title="Open settings">
          <IconButton>
            <Avatar alt="Profile" src={avatarPhoto} />
          </IconButton>
        </Tooltip>
      </Box>
    </AppBar>
  );
};

export default Header;

const style = (): SxProps<Theme> => ({
  boxShadow: 0,
  position: "fixed",
  top: 0,
  width: "100%",
  left: 0,
  zIndex: 999,
  ".wrapper": {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    boxSizing: "border-box",
    padding: "5px 45px",
  },
});
