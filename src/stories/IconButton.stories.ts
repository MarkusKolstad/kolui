import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { XIcon, type LucideProps } from "lucide-react";
import { createElement } from "react";
import { IconButton } from "../components/ui/buttons";

const icon = (
  svg: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >,
) =>
  createElement(svg, {
    // size: 16,
    "aria-hidden": true,
  });

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Buttons/IconButton",
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/arg-types
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "ghost"],
    },
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
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    shape: {
      control: "select",
      options: ["rounded", "square"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "filled",
    theme: "primary",
    children: icon(XIcon),
  },
};

export const Secondary: Story = {
  args: {
    variant: "outlined",
    children: icon(XIcon),
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: icon(XIcon),
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: icon(XIcon),
  },
};

export const Medium: Story = {
  args: {
    size: "lg",
    children: icon(XIcon),
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: icon(XIcon),
  },
};
