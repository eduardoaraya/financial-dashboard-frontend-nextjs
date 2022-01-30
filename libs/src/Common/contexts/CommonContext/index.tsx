import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@core/Common/styles/theme";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CommonContextProps {}

const CommonContext: React.FC<CommonContextProps> = ({
  children,
}): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CommonContext;
