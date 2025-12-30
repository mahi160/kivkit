import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "../components/switch/Switch";

const meta = {
  title: "Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
