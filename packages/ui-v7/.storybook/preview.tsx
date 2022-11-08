import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "packages/theme/src";
import type { DecoratorFn } from "@storybook/react";

const withTheme: DecoratorFn = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {Story()}
  </ThemeProvider>
);

export const decorators = [withTheme];
