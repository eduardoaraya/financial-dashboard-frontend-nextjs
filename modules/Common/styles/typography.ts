import {
  TypographyOptions,
  TypographyStyleOptions,
} from "@mui/material/styles/createTypography";

export const getDefaultStyle = (size: number): TypographyStyleOptions => ({});

export default {
  h1: getDefaultStyle(1),
  h2: getDefaultStyle(1),
  h3: getDefaultStyle(1),
  h4: getDefaultStyle(1),
  h5: getDefaultStyle(1),
  h6: getDefaultStyle(1),
  body1: getDefaultStyle(1),
  body2: getDefaultStyle(1),
  subtitle1: getDefaultStyle(1),
  subtitle2: getDefaultStyle(1),
} as TypographyOptions;
