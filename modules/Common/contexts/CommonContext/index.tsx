import { ThemeProvider } from "@mui/material/styles";
import theme from "../../styles/theme";

export interface CommonContextProps {}

const CommonContext: React.FC<CommonContextProps> = ({
  children,
}): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CommonContext;
