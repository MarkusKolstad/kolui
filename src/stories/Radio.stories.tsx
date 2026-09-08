import type { Meta, StoryObj } from "@storybook/react-vite";

import { RadioGroupField } from "../components/ui/inputs/radio";

const meta = {
  title: "Example/RadioGroupField",
  component: RadioGroupField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroupField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "plan",
    label: "Choose a plan",
    description: "You can change your plan later.",
    defaultValue: "team",
    options: [
      {
        value: "starter",
        label: "Starter",
        description: "For personal projects and small experiments.",
      },
      {
        value: "team",
        label: "Team",
        description: "For growing teams shipping together.",
      },
      {
        value: "enterprise",
        label: "Enterprise",
        description: "For organizations with advanced needs.",
      },
    ],
  },
};
