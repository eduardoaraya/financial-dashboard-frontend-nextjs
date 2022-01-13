import { Box, SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import React from "react";
import Header from "../Header";
import MainContent from "../MainContent";
import Sidebar from "../Sidebar";

export interface LayoutProps {
  titlePage: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, titlePage }) => {
  return (
    <Box sx={style()}>
      <Header />
      <Sidebar />
      <MainContent title={titlePage}>{children}</MainContent>
    </Box>
  );
};

export default Layout;

const style = (): SxProps<Theme> => ({
  position: "relative",
  height: "100%",
  minHeight: "100vh",
});
