import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Grid2X2,
  List,
} from "lucide-react";
import { Toggle, ToggleGroup } from "../components/ui/toggle";

const meta = {
  title: "Example/Toggle",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Grouped: Story = {
  render: () => (
    <div className="grid gap-6">
      <ToggleGroup aria-label="Text alignment" defaultValue={["left"]}>
        <Toggle value="left" aria-label="Align left">
          <AlignLeft size={16} aria-hidden="true" />
        </Toggle>
        <Toggle value="center" aria-label="Align center">
          <AlignCenter size={16} aria-hidden="true" />
        </Toggle>
        <Toggle value="right" aria-label="Align right">
          <AlignRight size={16} aria-hidden="true" />
        </Toggle>
      </ToggleGroup>

      <ToggleGroup
        aria-label="View mode"
        multiple
        defaultValue={["comfortable"]}
      >
        <Toggle value="comfortable">
          <List size={16} aria-hidden="true" />
          Comfortable
        </Toggle>
        <Toggle value="grid">
          <Grid2X2 size={16} aria-hidden="true" />
          Grid
        </Toggle>
      </ToggleGroup>
    </div>
  ),
};

export const Standalone: Story = {
  render: () => (
    <Toggle aria-label="Toggle notifications" defaultPressed>
      Notifications
    </Toggle>
  ),
};
