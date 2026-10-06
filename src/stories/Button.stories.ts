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
      options: ["filled", "outlined", "glass", "ghost"],
    },
    theme: {
      control: "select",
      options: [
        "default",
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

export const Glass: Story = {
  args: {
    variant: "glass",
    children: "Glass",
  },
};

export const VariantPalette: Story = {
  args: {
    size: "md",
    shape: "square",
  },
  parameters: {
    layout: "padded",
  },
  render: (args) => {
    const size = args.size ?? "md";
    const shape = args.shape ?? "square";
    const themes = [
      "default",
      "primary",
      "secondary",
      "accent",
      "success",
      "warning",
      "error",
    ] as const;
    const variants = ["filled", "outlined", "glass", "ghost"] as const;
    const cells = [
      createElement("span", { key: "corner" }),
      ...themes.map((theme) =>
        createElement(
          "span",
          {
            key: `heading-${theme}`,
            style: { fontSize: "0.75rem", textAlign: "center" },
          },
          theme,
        ),
      ),
      ...variants.flatMap((variant) => [
        createElement(
          "span",
          {
            key: `label-${variant}`,
            style: {
              fontSize: "0.75rem",
              textAlign: "center",
              textTransform: "capitalize",
            },
          },
          variant,
        ),
        ...themes.map((theme) =>
          createElement(
            Button,
            {
              key: `${variant}-${theme}`,
              variant,
              theme,
              size,
              shape,
            },
            theme,
          ),
        ),
      ]),
    ];

    return createElement(
      "div",
      { style: { maxWidth: "100%", overflowX: "auto", padding: "1rem" } },
      createElement(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "5rem repeat(7, minmax(6rem, max-content))",
            justifyItems: "center",
            alignItems: "center",
            gap: "0.75rem",
            width: "max-content",
          },
        },
        ...cells,
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
