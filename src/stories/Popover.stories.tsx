import type { Meta, StoryObj } from "@storybook/react-vite";

import { Settings, X } from "lucide-react";
import { Button } from "../components/ui/buttons/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "../components/ui/popover";

const meta = {
  title: "Example/Popover",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button theme="default" variant="outlined" />}>
        <Settings size={16} aria-hidden="true" />
        Display settings
      </PopoverTrigger>
      <PopoverContent arrow>
        <PopoverTitle>Display settings</PopoverTitle>
        <PopoverDescription>
          Adjust how content is displayed in this workspace.
        </PopoverDescription>
        <div className="mt-4 flex justify-end">
          <PopoverClose render={<Button theme="default" variant="outlined" />}>
            <X size={16} aria-hidden="true" />
            Close
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
