import React from "react";
import { Box, SxProps, Typography } from "@mui/material";
import { Theme } from "@mui/system";

export interface MainContentProps {
  gridArea: string;
  title?: string;
}

const MainContent: React.FC<MainContentProps> = ({
  gridArea,
  title,
  children,
}) => {
  return (
    <Box sx={style(gridArea)}>
      <Box className="page-title">
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box className="page-main-content">{children}</Box>
    </Box>
  );
};

export default MainContent;

const style = (gridArea: string): SxProps<Theme> => ({
  position: "relative",
  width: "100%",
  minHeight: "70vh",
  gridArea,
  overflowY: "scroll",
  ".page-title": {
    padding: "45px",
    boxShadow: 1,
  },
  ".page-main-content": {
    background: "#DDD",
    height: "100%",
  },
});
