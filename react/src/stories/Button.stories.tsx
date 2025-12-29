import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../components/button/Button";
import { IconHome, IconLoader } from "@tabler/icons-react";

const meta = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
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

export const Colors: Story = {
  render: () => (
    <div className="showcase">
      <Button>Default</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="danger">Danger</Button>
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
      <Button shape="pill">Pill Shaped</Button>
      <Button shape="sharp">Sharp</Button>
      <Button size="icon" shape="circle">
        <IconHome />
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="showcase">
      <style>
        {`
          .spinner {
            animation: spin 2s linear infinite;
          }
          @keyframes spin {
            from {
              transform: rotate(0deg); /* Starting angle */
            }
            to {
              transform: rotate(360deg); /* Ending angle (one full turn) */
            }
          }
        `}
      </style>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button disabled>
        <IconLoader className="spinner" />
        Loading
      </Button>
    </div>
  ),
};

export const Customization: Story = {
  render: () => (
    <div className="showcase">
      <style>
        {`
          .custom {
            width: 200px;
          }
        `}
      </style>
      <Button
        style={{ backgroundColor: "purple", color: "white" }}
        className="custom"
      >
        Custom Styled
      </Button>
    </div>
  ),
};
