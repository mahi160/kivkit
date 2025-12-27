import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../components/button/Button";
import { IconHome } from "@tabler/icons-react";

const meta = {
  component: Button,
  title: "Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Button",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="showcase">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="showcase">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="showcase">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="danger">Danger</Button>
    </div>
  ),
};

export const IconSizes: Story = {
  render: () => (
    <div className="showcase">
      <Button size="icon-sm">
        <IconHome />
      </Button>
      <Button size="icon">
        <IconHome />
      </Button>
      <Button size="icon-lg">
        <IconHome />
      </Button>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="showcase">
      <Button>Default</Button>
      <Button shape="pill">Pill shaped</Button>
      <Button shape="sharp">Sharp</Button>
      <Button size="icon" shape="circle">
        <IconHome />
      </Button>
    </div>
  ),
};
