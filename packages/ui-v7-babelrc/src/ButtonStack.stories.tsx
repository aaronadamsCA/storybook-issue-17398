import { Button } from "@mui/material";
import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { ButtonStack } from "./ButtonStack";

const VARIANTS = ["contained", "outlined", "text"] as const;

const meta: ComponentMeta<typeof ButtonStack> = {
  component: ButtonStack,
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

type Story = ComponentStoryObj<typeof ButtonStack>;

export const Default: Story = {};
