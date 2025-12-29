import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "../components/checkbox/Checkbox";

const meta = {
  title: "Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
