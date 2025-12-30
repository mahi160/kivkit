import type { Meta, StoryObj } from "@storybook/react-vite";
import { Kbd, KbdGroup } from "../components/kbd/Kbd";

const meta = {
  title: "Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to search
      </p>

      <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        Shortcuts:
        <KbdGroup>
          <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd>
        </KbdGroup>
      </p>
    </div>
  ),
};
