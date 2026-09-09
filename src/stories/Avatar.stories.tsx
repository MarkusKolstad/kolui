import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import "./avatar.css";

const meta = {
  title: "Example/Avatar",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  render: () => (
    <div className="avatar-story-gallery">
      <div className="avatar-story-item">
        <Avatar size="xxs">
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
        <span>XXS fallback</span>
      </div>
      <div className="avatar-story-item">
        <Avatar size="xs">
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
        <span>XS fallback</span>
      </div>
      <div className="avatar-story-item">
        <Avatar size="sm">
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
        <span>Small fallback</span>
      </div>
      <div className="avatar-story-item">
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop"
            alt="Portrait of a team member"
          />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <span>Image avatar</span>
      </div>
      <div className="avatar-story-item">
        <Avatar size="lg">
          <AvatarFallback>JR</AvatarFallback>
        </Avatar>
        <span>Large fallback</span>
      </div>
    </div>
  ),
};
