import type { StackProps } from "@mui/material";
import { Stack } from "@mui/material";
import { forwardRef } from "react";

export type ButtonStackProps = StackProps;

export const ButtonStack = forwardRef<typeof Stack, ButtonStackProps>(
  function ButtonStack(props, ref) {
    return (
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ sm: "baseline" }}
        spacing={1}
        {...props}
        ref={ref}
      />
    );
  }
);
