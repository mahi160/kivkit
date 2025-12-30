import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "../components/textarea/Textarea";

const meta = {
  title: "Textarea",
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
