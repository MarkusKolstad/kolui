import type { Meta, StoryObj } from "@storybook/react-vite";

import { AppleIcon } from "lucide-react";
import { createElement } from "react";
import { ComboboxField } from "../components/ui/inputs/combobox/index";
import { fruits, type Fruit } from "./data/example-data";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ComboboxField",
  component: ComboboxField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/arg-types
  argTypes: {
    // backgroundColor: { control: "color" },
    // variant: {
    //   control: "select",
    //   options: ["filled", "outlined", "ghost"],
    // },
    // color: {
    //   control: "select",
    //   options: [
    //     "primary",
    //     "secondary",
    //     "accent",
    //     "success",
    //     "warning",
    //     "error",
    //   ],
    // },
    // size: {
    //   control: "select",
    //   options: ["sm", "md", "lg"],
    // },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  //   args: { onClick: fn() },
} satisfies Meta<typeof ComboboxField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Combobox",
    description: "Combobox description",
    items: fruits,
    startAdornment: createElement(AppleIcon, {
      size: 16,
      "aria-hidden": true,
    }),
    itemToStringLabel: (item) => (item as unknown as Fruit).label,
    itemToStringValue: (item) => (item as unknown as Fruit).value,
  },
};
