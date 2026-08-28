import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import {
  Tab,
  TabIndicator,
  TabPanel,
  Tabs,
  TabsList,
} from "@/components/ui/tabs/tabs";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Tabs",
  //   component: ReactNode,
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
      options: ["primary", "secondary", "tertiary"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof TabsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabs = Array.from(Array(5)).map((_item, index) => index + 1);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: "filled",
    theme: "primary",
  },
  render: (args: any) => {
    return (
      <Tabs>
        <TabsList variant={args.variant} theme={args.theme}>
          {tabs.map((tab) => (
            <Tab value={`tab${tab}`}>Tab {tab}</Tab>
          ))}
          <TabIndicator />
        </TabsList>
        {tabs.map((tab) => (
          <TabPanel value={`tab${tab}`}>TabPanel {tab}</TabPanel>
        ))}
      </Tabs>
    );
  },
};
