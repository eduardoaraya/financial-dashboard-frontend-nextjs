import { Box, SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import React from "react";
import Header from "../Header";
import MainContent from "../MainContent";
import Sidebar from "../Sidebar";

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <Box sx={style}>
      <Header gridArea="header" />
      <Sidebar gridArea="sidebar" />
      <MainContent gridArea="main" />
    </Box>
  );
};

export default Layout;

const style: SxProps<Theme> = {
  display: "grid",
  gridTemplateAreas: `"header header header header"
                      "sidebar main main main"
                      "sidebar main main main"
                      "siderbar footer footer footer"`,
  gridTemplateColumns: "370px 1fr 1fr 1fr",
};
