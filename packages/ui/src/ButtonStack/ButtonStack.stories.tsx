import { Button } from "@mui/material";
import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { ButtonStack as Component } from "./ButtonStack";

const VARIANTS = ["contained", "outlined", "text"] as const;

const meta: ComponentMeta<typeof Component> = {
  component: Component,
  args: {
    spacing: 1,
    children: VARIANTS.map((variant) => (
      <Button key={variant} variant={variant}>
        {variant} variant
      </Button>
    )),
  },
};

export default meta;

type Story = ComponentStoryObj<typeof Component>;

export const ButtonStack: Story = {};
