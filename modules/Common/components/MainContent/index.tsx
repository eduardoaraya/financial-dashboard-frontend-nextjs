import React from "react";
import { Box, Typography } from "@mui/material";

export interface MainContentProps {
  gridArea: string;
}

const MainContent: React.FC<MainContentProps> = ({ gridArea }) => {
  return (
    <Box
      sx={{
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
      }}
    >
      <Box className="page-title">
        <Typography variant="h5">Dashboard</Typography>
      </Box>
      <Box className="page-main-content">Content</Box>
    </Box>
  );
};

export default MainContent;
