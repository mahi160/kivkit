import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../components/dialog/Dialog";
import { Input } from "../components/input/Input";
import { Button } from "../components/button/Button";

const meta = {
  title: "Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger
        nativeButton={false}
        render={(prop) => <Button {...prop}>Edit</Button>}
      ></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div style={{ display: "grid", gap: "1rem", padding: "1rem 0" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <label
              htmlFor="name"
              style={{ textAlign: "right", fontSize: "0.875rem" }}
            >
              Name
            </label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <label
              htmlFor="username"
              style={{ textAlign: "right", fontSize: "0.875rem" }}
            >
              Username
            </label>
            <Input id="username" defaultValue="@peduarte" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose
            nativeButton={false}
            render={(props) => <Button {...props}>Save changes</Button>}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
