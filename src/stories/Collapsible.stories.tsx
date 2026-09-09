import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "../components/ui/collapsible";

const meta = {
  title: "Example/Collapsible",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-96!">
      <CollapsibleTrigger>What is a Collapsible component?</CollapsibleTrigger>
      <CollapsiblePanel>
        <p>
          Collapsible is a single expandable panel built directly on Base UI's
          Collapsible primitive.
        </p>
      </CollapsiblePanel>
    </Collapsible>
  ),
};
