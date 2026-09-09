import type { Meta, StoryObj } from "@storybook/react-vite";

import { Switch } from "../components/ui/switch";

const meta = {
  title: "Example/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const States: Story = {
  render: () => (
    <div className="grid gap-5">
      <Switch
        label="Email notifications"
        description="Receive a summary when your team has activity."
      />
      <Switch
        label="Dark mode"
        description="Use the dark theme across the workspace."
        defaultChecked
      />
      <Switch label="Unavailable setting" disabled />
    </div>
  ),
};
