import { createTheme, responsiveFontSizes } from "@mui/material";
import typography from "./typography";

export const theme = createTheme({
  typography,
});

export default responsiveFontSizes(theme);
