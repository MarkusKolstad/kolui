import type { Meta, StoryObj } from "@storybook/react-vite";

import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/buttons/button";
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerDescription,
  DrawerPopup,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DrawerViewport,
} from "../components/ui/drawer";

type DrawerStoryArgs = {
  side: "left" | "right" | "up" | "down";
  defaultOpen: boolean;
  modal: boolean | "trap-focus";
  disablePointerDismissal: boolean;
};

const meta = {
  title: "Example/Drawer",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: "select",
      options: ["left", "right", "up", "down"],
    },
    defaultOpen: {
      control: "boolean",
    },
    modal: {
      control: "select",
      options: [true, false, "trap-focus"],
    },
    disablePointerDismissal: {
      control: "boolean",
    },
  },
  args: {
    side: "right",
    defaultOpen: false,
    modal: true,
    disablePointerDismissal: false,
  },
} satisfies Meta<DrawerStoryArgs>;

export default meta;
type Story = StoryObj<DrawerStoryArgs>;

export const RightSide: Story = {
  render: (args) => (
    <Drawer
      swipeDirection={args.side}
      defaultOpen={args.defaultOpen}
      modal={args.modal}
      disablePointerDismissal={args.disablePointerDismissal}
    >
      <DrawerTrigger render={<Button theme="primary" />}>
        Open drawer
        <ArrowRight size={16} aria-hidden="true" />
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerViewport data-side={args.side}>
          <DrawerPopup>
            <div className="flex items-start justify-between gap-4">
              <div>
                <DrawerTitle>Quick settings</DrawerTitle>
                <DrawerDescription>
                  Update your workspace preferences without leaving the page.
                </DrawerDescription>
              </div>
              <DrawerClose />
            </div>
            <div className="grid gap-3 text-sm text-(--text)">
              <p>Changes are saved automatically as you make them.</p>
              <Button variant="outlined" theme="secondary">
                Manage preferences
              </Button>
            </div>
          </DrawerPopup>
        </DrawerViewport>
      </DrawerPortal>
    </Drawer>
  ),
};
