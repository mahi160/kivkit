import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "../components/empty/Empty";
import { Button } from "../components/button/Button";
import { IconFolderSearch } from "@tabler/icons-react";

const meta = {
  title: "Empty",
  component: Empty,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderSearch />
        </EmptyMedia>
        <EmptyTitle>No files found</EmptyTitle>
        <EmptyDescription>
          It looks like you haven't uploaded any files yet. Start by uploading a
          file or create a new folder.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Upload File</Button>
      </EmptyContent>
    </Empty>
  ),
};
