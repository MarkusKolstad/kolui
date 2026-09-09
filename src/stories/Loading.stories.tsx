import type { Meta, StoryObj } from "@storybook/react-vite";

import { Loading } from "../components/ui/loading";

const meta = {
  title: "Example/Loading",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div className="grid min-h-48 place-items-center gap-8 p-8">
      <Loading variant="spinner" label="Loading workspace" />
      <Loading variant="bar" label="Loading page" />
      <p className="text-sm text-(--text)">
        The bar variant is fixed to the top of the viewport.
      </p>
    </div>
  ),
};

export const FullPage: Story = {
  render: () => <Loading variant="overlay" label="Loading workspace" />,
};
