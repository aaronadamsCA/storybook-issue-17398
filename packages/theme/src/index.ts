import type {
  TypographyStyle,
  TypographyStyleOptions,
} from "@mui/material/styles/createTypography";

import type { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariantsOptions {
    systemFontFamily?: TypographyStyleOptions["fontFamily"];
  }

  interface TypographyVariants {
    systemFontFamily: TypographyStyle["fontFamily"];
  }
}

export const options: ThemeOptions = {
  palette: {
    primary: {
      main: "#2A4A52",
    },
  },
  typography: {
    systemFontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  },
};

export const theme = createTheme(options);
