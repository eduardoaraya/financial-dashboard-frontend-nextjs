import React from "react";
import { Box, SxProps, Typography } from "@mui/material";
import { Theme } from "@mui/system";

export interface MainContentProps {
  title?: string;
}

const MainContent: React.FC<MainContentProps> = ({ title, children }) => {
  return (
    <Box sx={style()}>
      <Box className="wrapper">
        <Box className="page-title">
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Box className="page-main-content">{children}</Box>
        <Box component="footer">
          © Copyright 2022 | Todos os direitos reservados
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;

const style = (): SxProps<Theme> => ({
  position: "relative",
  width: "100%",
  height: "100%",
  paddingLeft: "370px",
  paddingTop: "66px",
  ".wrapper": {},
  ".page-title": {
    boxShadow: 1,
    padding: "45px",
  },
  ".page-main-content": {
    background: "#DDD",
    height: "100%",
    minHeight: "70vh",
    padding: "45px",
  },
});
