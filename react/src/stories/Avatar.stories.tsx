import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/avatar/Avatar";

const meta = {
  title: "Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://picsum.photod/200" alt="Picusm" />
      <AvatarFallback>LP</AvatarFallback>
    </Avatar>
  ),
};
