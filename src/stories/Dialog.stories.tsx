import type { Meta, StoryObj } from "@storybook/react-vite";

import { Bell, X } from "lucide-react";
import { Button } from "../components/ui/buttons/button";
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

const meta = {
  title: "Example/Dialog",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button theme="primary" />}>
        <Bell size={16} aria-hidden="true" />
        View notifications
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <div>
            <DialogTitle>Notifications</DialogTitle>
            <DialogDescription>
              You are all caught up. We will let you know when something needs
              your attention.
            </DialogDescription>
          </div>
          <div className="flex justify-end gap-2">
            <DialogClose
              render={<Button variant="outlined" theme="secondary" />}
            >
              <X size={16} aria-hidden="true" />
              Close
            </DialogClose>
          </div>
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  ),
};
