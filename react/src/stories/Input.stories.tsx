import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../components/input/Input";

const meta = {
  title: "Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
