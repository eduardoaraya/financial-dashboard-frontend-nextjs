import { AppBar, Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import React from "react";

export interface HeaderProps {
  gridArea: string;
  avatarPhoto?: string;
}

export const Header: React.FC<HeaderProps> = ({ gridArea, avatarPhoto }) => {
  return (
    <AppBar position="static" color="primary" sx={style(gridArea)}>
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

const style = (gridArea: string): SxProps<Theme> => ({
  boxShadow: 0,
  gridArea,
  ".wrapper": {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    boxSizing: "border-box",
    padding: "5px 45px",
  },
});
