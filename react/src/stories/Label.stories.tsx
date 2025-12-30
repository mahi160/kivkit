import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../components/label/Label";
import { Checkbox } from "../components/checkbox/Checkbox";
import { Input } from "../components/input/Input";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Label>Accept terms and conditions</Label>,
};

export const WithInput: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "0.5rem", width: "300px" }}>
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};
