import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@monorepo/mui-theme-base";
import type { DecoratorFn } from "@storybook/react";

export const withTheme: DecoratorFn = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {Story()}
  </ThemeProvider>
);
