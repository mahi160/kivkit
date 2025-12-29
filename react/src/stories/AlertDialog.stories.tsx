import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/alertDialog/AlertDialog";
import { Button } from "../components/button/Button";

const meta = {
  component: AlertDialog,
  title: "AlertDialog",
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger render={() => <Button>Hello</Button>} />
      <AlertDialogPopup>
        <AlertDialogHeader>
          <AlertDialogTitle>How are you?</AlertDialogTitle>
          <AlertDialogDescription>Please tell the truth</AlertDialogDescription>
        </AlertDialogHeader>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Action</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogPopup>
    </AlertDialog>
  ),
};
