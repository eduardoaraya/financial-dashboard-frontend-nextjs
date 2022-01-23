import { Box, Paper, Typography } from "@mui/material";
import React from "react";

export interface PaperInfoProps {
  title: string;
  value: string;
}

export const PaperInfo: React.FC<PaperInfoProps> = ({ title, value }) => {
  return (
    <Paper
      sx={{
        maxWidth: "30%",
        padding: "15px 20px",
        borderRadius: "5px",
        boxShadow: "0px 0px 7px -5px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <Typography variant="h3">{value}</Typography>
    </Paper>
  );
};

export default PaperInfo;
