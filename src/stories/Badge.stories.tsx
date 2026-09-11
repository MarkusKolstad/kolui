import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "../components/ui/badge";

const meta = {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "accent",
        "success",
        "warning",
        "error",
      ],
    },
    variant: {
      control: "select",
      options: ["filled", "outlined", "soft"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md"],
    },
    shape: {
      control: "select",
      options: ["rounded", "square"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "In review",
    theme: "accent",
    variant: "soft",
    size: "sm",
    shape: "rounded",
  },
};

export const Gallery: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge theme="accent">In review</Badge>
      <Badge theme="success">Approved</Badge>
      <Badge theme="warning">Needs attention</Badge>
      <Badge theme="error">Restricted</Badge>
      <Badge theme="secondary" variant="outlined">
        12 documents
      </Badge>
      <Badge theme="primary" variant="filled" size="md">
        Active case
      </Badge>
    </div>
  ),
};
