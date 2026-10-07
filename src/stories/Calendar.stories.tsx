import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Calendar,
  type CalendarProps,
} from "../components/ui/inputs/calendar/calendar";

const meta = {
  title: "Example/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    weekStartsOn: {
      control: "radio",
      options: ["sunday", "monday"],
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveCalendar({
  weekStartsOn,
}: Pick<CalendarProps, "weekStartsOn">) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Calendar
      value={selectedDate}
      onValueChange={setSelectedDate}
      weekStartsOn={weekStartsOn}
    />
  );
}

export const Default: Story = {
  args: {
    weekStartsOn: "sunday",
  },
  render: (args) => <InteractiveCalendar weekStartsOn={args.weekStartsOn} />,
};

export const MonthBoundary: Story = {
  args: {
    defaultValue: new Date(2026, 8, 1),
    weekStartsOn: "monday",
  },
};
