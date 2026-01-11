import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from "../components/inputGroup/InputGroup";
import {
  IconSearch,
  IconMail,
  IconLock,
  IconCurrencyDollar,
  IconAt,
  IconCalendar,
  IconEye,
  IconEyeOff,
  IconCopy,
  IconSend,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";

const meta = {
  title: "InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div style={{ width: "600px", display: "flex", flexDirection: "column", gap: "32px", padding: "40px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>InputGroup Component</h2>
        
        {/* Basic Input */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Basic Input
          </label>
          <InputGroup>
            <InputGroupInput placeholder="Enter text..." />
          </InputGroup>
        </div>

        {/* Search Input */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Search with Icon
          </label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>
                <IconSearch size={16} />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs">
                <IconX size={14} />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Email Input */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Email with Domain
          </label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>
                <IconAt size={16} />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="username" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>@example.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Password Input */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Password with Toggle
          </label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>
                <IconLock size={16} />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              type={showPassword ? "text" : "password"}
              placeholder="Enter password..."
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                size="icon-xs"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IconEyeOff size={14} /> : <IconEye size={14} />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* URL Input */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            URL Input
          </label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="example.com" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="xs">
                <IconCopy size={14} />
                Copy
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Price Input */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Price Input
          </label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>
                <IconCurrencyDollar size={16} />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="0.00" type="number" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>USD</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Date Input */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Date Input
          </label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>
                <IconCalendar size={16} />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput type="date" />
          </InputGroup>
        </div>

        {/* Block Start Label */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Block Start Label
          </label>
          <InputGroup>
            <InputGroupAddon align="block-start">
              <InputGroupText>
                <IconMail size={16} />
                Email Address
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="you@example.com" />
          </InputGroup>
        </div>

        {/* Block End Helper */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Block End Helper
          </label>
          <InputGroup>
            <InputGroupAddon align="block-start">
              <InputGroupText>Email Address</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="you@example.com" />
            <InputGroupAddon align="block-end">
              <InputGroupText>We'll never share your email</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Textarea */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Textarea with Send Button
          </label>
          <InputGroup>
            <InputGroupAddon align="block-start">
              <InputGroupText>Message</InputGroupText>
            </InputGroupAddon>
            <InputGroupTextarea placeholder="Type your message..." rows={4} />
            <InputGroupAddon align="block-end">
              <InputGroupButton size="xs" variant="default">
                <IconSend size={14} />
                Send
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Disabled State */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Disabled State
          </label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>
                <IconMail size={16} />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="Disabled input..." disabled />
          </InputGroup>
        </div>

        {/* Invalid State */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Invalid State
          </label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>
                <IconMail size={16} />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="invalid@email" aria-invalid="true" />
          </InputGroup>
          <p style={{ marginTop: "4px", fontSize: "12px", color: "var(--destructive)" }}>
            Please enter a valid email address
          </p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Newsletter Signup
          </label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>
                <IconMail size={16} />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="Enter your email..." type="email" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="xs" variant="default">
                Subscribe
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    );
  },
};
