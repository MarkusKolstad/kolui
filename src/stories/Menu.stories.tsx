import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoreHorizontal } from "lucide-react";
import { Button } from "../components/ui/buttons/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuItem,
  MenuLinkItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuTrigger,
} from "../components/ui/menu";

const meta = {
  title: "Example/Menu",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuTrigger render={<Button theme="secondary" variant="outlined" />}>
        <MoreHorizontal size={16} aria-hidden="true" />
        Actions
      </MenuTrigger>
      <MenuPortal>
        <MenuPositioner sideOffset={6}>
          <MenuPopup>
            <MenuItem onClick={() => undefined}>Edit workspace</MenuItem>
            <MenuItem onClick={() => undefined}>Duplicate</MenuItem>
            <MenuLinkItem
              href="https://base-ui.com/react/components/menu"
              target="_blank"
              rel="noreferrer"
            >
              Read the menu docs
            </MenuLinkItem>
            <MenuSeparator />
            <MenuCheckboxItem checked>Show activity</MenuCheckboxItem>
            <MenuRadioGroup defaultValue="compact">
              <MenuRadioItem value="compact">Compact view</MenuRadioItem>
              <MenuRadioItem value="comfortable">
                Comfortable view
              </MenuRadioItem>
            </MenuRadioGroup>
            <MenuSeparator />
            <MenuItem onClick={() => undefined}>Archive workspace</MenuItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </Menu>
  ),
};
