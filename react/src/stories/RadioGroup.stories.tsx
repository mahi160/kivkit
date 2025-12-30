import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, RadioItem } from "../components/radioGroup/RadioGroup";

const meta = {
  title: "RadioGroup",
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioItem value="option1">Option 1</RadioItem>
      <RadioItem value="option2">Option 2</RadioItem>
    </RadioGroup>
  ),
};
