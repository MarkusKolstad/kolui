import type { Meta, StoryObj } from "@storybook/react-vite";

import { CheckIcon, ChevronDown, XIcon } from "lucide-react";
import {
  Combobox,
  ComboboxClear,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxTrigger,
} from "../components/ui/combobox";
import { fruits, type Fruit } from "./data/example-data";

const meta = {
  title: "Example/Combobox primitives",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Combobox<Fruit>
      items={fruits}
      itemToStringLabel={(item) => item.label}
      itemToStringValue={(item) => item.value}
    >
      <ComboboxInputGroup>
        <ComboboxInput placeholder="Choose a fruit" />
        <ComboboxClear aria-label="Clear selection">
          <XIcon size={16} aria-hidden="true" />
        </ComboboxClear>
        <ComboboxTrigger aria-label="Open options">
          <ChevronDown size={16} aria-hidden="true" />
        </ComboboxTrigger>
      </ComboboxInputGroup>
      <ComboboxPortal>
        <ComboboxPositioner sideOffset={4}>
          <ComboboxPopup>
            <ComboboxList>
              {(item: Fruit) => (
                <ComboboxItem key={item.value} value={item}>
                  <ComboboxItemIndicator>
                    <CheckIcon size={16} aria-hidden="true" />
                  </ComboboxItemIndicator>
                  <span>{item.label}</span>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </ComboboxPositioner>
      </ComboboxPortal>
    </Combobox>
  ),
};
