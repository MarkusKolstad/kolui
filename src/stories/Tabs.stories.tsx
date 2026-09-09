import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import {
  Tab,
  TabIndicator,
  TabPanel,
  Tabs,
  TabsList,
} from "@/components/ui/tabs/tabs";

import "./tabs-story.css";

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

const tabs = [
  { value: "overview", label: "Overview" },
  { value: "activity", label: "Activity" },
  { value: "members", label: "Members" },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: "filled",
    theme: "primary",
  },
  render: (args: any) => {
    return (
      <Tabs className="tabs-story">
        <TabsList
          variant={args.variant}
          theme={args.theme}
          aria-label="Workspace views"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} value={tab.value}>
              {tab.label}
            </Tab>
          ))}
          <TabIndicator />
        </TabsList>
        <TabPanel value="overview" className="tabs-story-panel">
          <div className="tabs-story-panel-header">
            <div>
              <p className="tabs-story-eyebrow">Workspace overview</p>
              <h2>Northstar is moving forward</h2>
              <p>Keep an eye on the work that needs attention this week.</p>
            </div>
            <span className="tabs-story-status">On track</span>
          </div>
          <div className="tabs-story-metrics">
            <div>
              <strong>24</strong>
              <span>Open tasks</span>
            </div>
            <div>
              <strong>8</strong>
              <span>Completed</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Contributors</span>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="activity" className="tabs-story-panel">
          <div className="tabs-story-panel-header">
            <div>
              <p className="tabs-story-eyebrow">Recent activity</p>
              <h2>What changed this week</h2>
              <p>Updates from your team, gathered in one place.</p>
            </div>
          </div>
          <ul className="tabs-story-list">
            <li>
              <strong>Amelia</strong> moved Launch plan to In progress
            </li>
            <li>
              <strong>Jonas</strong> completed the onboarding checklist
            </li>
            <li>
              <strong>Priya</strong> added a new project brief
            </li>
          </ul>
        </TabPanel>
        <TabPanel value="members" className="tabs-story-panel">
          <div className="tabs-story-panel-header">
            <div>
              <p className="tabs-story-eyebrow">People</p>
              <h2>Your project team</h2>
              <p>Six people are currently collaborating in Northstar.</p>
            </div>
          </div>
          <div className="tabs-story-member-list">
            <span>
              <b>MK</b> Markus Kolstad <em>Owner</em>
            </span>
            <span>
              <b>AM</b> Amelia Morgan <em>Editor</em>
            </span>
            <span>
              <b>JP</b> Jonas Persson <em>Editor</em>
            </span>
          </div>
        </TabPanel>
      </Tabs>
    );
  },
};
