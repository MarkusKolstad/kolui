import type { Meta, StoryObj } from "@storybook/react-vite";

import { createElement } from "react";
import { fn } from "storybook/test";

import { Button } from "../components/ui/buttons/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Buttons/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/arg-types
  argTypes: {
    // backgroundColor: { control: "color" },
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
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    // primary: true,

    variant: "filled",
    theme: "primary",
    children: "Filled",
  },
};

export const Secondary: Story = {
  args: {
    variant: "outlined",
    children: "Outlined",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const DarkSurfacePalette: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    const themes = [
      "primary",
      "secondary",
      "accent",
      "success",
      "warning",
      "error",
    ] as const;
    const variants = ["filled", "outlined", "ghost"] as const;

    return createElement(
      "div",
      {
        style: {
          display: "grid",
          gap: "1rem",
          background: "#16171d",
          padding: "2rem",
          borderRadius: "1rem",
        },
      },
      variants.map((variant) =>
        createElement(
          "div",
          {
            key: variant,
            style: {
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
            },
          },
          themes.map((theme) =>
            createElement(
              Button,
              {
                key: `${variant}-${theme}`,
                variant,
                theme,
              },
              theme,
            ),
          ),
        ),
      ),
    );
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};
