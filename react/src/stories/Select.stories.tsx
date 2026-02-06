import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../components/select/Select";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBriefcase,
  IconPalette,
  IconWorld,
  IconClock,
  IconStar,
  IconHeart,
  IconShieldCheck,
  IconTrendingUp,
  IconUsers,
  IconSettings,
} from "@tabler/icons-react";
import { useState } from "react";

const meta = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "grape", label: "Grape" },
  { value: "orange", label: "Orange" },
  { value: "strawberry", label: "Strawberry" },
];

const countries = [
  { value: "us", label: "United States", icon: <IconWorld size={16} /> },
  { value: "uk", label: "United Kingdom", icon: <IconWorld size={16} /> },
  { value: "ca", label: "Canada", icon: <IconWorld size={16} /> },
  { value: "au", label: "Australia", icon: <IconWorld size={16} /> },
  { value: "de", label: "Germany", icon: <IconWorld size={16} /> },
  { value: "fr", label: "France", icon: <IconWorld size={16} /> },
];

const timezones = [
  { value: "pst", label: "Pacific (PST)", offset: "UTC-8" },
  { value: "mst", label: "Mountain (MST)", offset: "UTC-7" },
  { value: "cst", label: "Central (CST)", offset: "UTC-6" },
  { value: "est", label: "Eastern (EST)", offset: "UTC-5" },
  { value: "utc", label: "UTC", offset: "UTC+0" },
  { value: "cet", label: "Central European (CET)", offset: "UTC+1" },
];

const roles = {
  Engineering: [
    { value: "dev", label: "Developer", icon: <IconBriefcase size={16} /> },
    { value: "senior-dev", label: "Senior Developer", icon: <IconBriefcase size={16} /> },
    { value: "lead", label: "Tech Lead", icon: <IconBriefcase size={16} /> },
  ],
  Design: [
    { value: "designer", label: "Designer", icon: <IconPalette size={16} /> },
    { value: "senior-designer", label: "Senior Designer", icon: <IconPalette size={16} /> },
    { value: "design-lead", label: "Design Lead", icon: <IconPalette size={16} /> },
  ],
  Management: [
    { value: "pm", label: "Product Manager", icon: <IconUsers size={16} /> },
    { value: "em", label: "Engineering Manager", icon: <IconUsers size={16} /> },
    { value: "director", label: "Director", icon: <IconUsers size={16} /> },
  ],
};

const priorities = [
  { value: "low", label: "Low", color: "#10b981" },
  { value: "medium", label: "Medium", color: "#f59e0b" },
  { value: "high", label: "High", color: "#ef4444" },
  { value: "critical", label: "Critical", color: "#dc2626" },
];

export const Playground: Story = {
  render: () => {
    const [selectedFruit, setSelectedFruit] = useState<string>("");
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [selectedTimezone, setSelectedTimezone] = useState<string>("");
    const [selectedRole, setSelectedRole] = useState<string>("");
    const [selectedPriority, setSelectedPriority] = useState<string>("");

    return (
      <div style={{ width: "700px", display: "flex", flexDirection: "column", gap: "40px", padding: "40px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Select Component</h2>

        {/* Basic Select */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Basic Select
          </label>
          <Select value={selectedFruit} onValueChange={(value) => setSelectedFruit(value[0] || "")}>
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit..." />
            </SelectTrigger>
            <SelectContent>
              {fruits.map((fruit) => (
                <SelectItem key={fruit.value} value={fruit.value}>
                  {fruit.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedFruit && (
            <p style={{ marginTop: "8px", fontSize: "12px", color: "var(--muted-foreground)" }}>
              Selected: {fruits.find(f => f.value === selectedFruit)?.label}
            </p>
          )}
        </div>

        {/* Select with Icons */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Select with Icons
          </label>
          <Select value={selectedCountry} onValueChange={(value) => setSelectedCountry(value[0] || "")}>
            <SelectTrigger>
              <SelectValue placeholder="Select a country..." />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.value} value={country.value}>
                  {country.icon}
                  {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Select with Secondary Text */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Select with Secondary Text
          </label>
          <Select value={selectedTimezone} onValueChange={(value) => setSelectedTimezone(value[0] || "")}>
            <SelectTrigger>
              <SelectValue placeholder="Select timezone..." />
            </SelectTrigger>
            <SelectContent>
              {timezones.map((tz) => (
                <SelectItem key={tz.value} value={tz.value}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <IconClock size={16} />
                      <span>{tz.label}</span>
                    </div>
                    <span style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
                      {tz.offset}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Grouped Select */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Grouped Select
          </label>
          <Select value={selectedRole} onValueChange={(value) => setSelectedRole(value[0] || "")}>
            <SelectTrigger>
              <SelectValue placeholder="Select a role..." />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(roles).map(([category, items], index) => (
                <SelectGroup key={category}>
                  {index > 0 && <SelectSeparator />}
                  <SelectLabel>{category}</SelectLabel>
                  {items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.icon}
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Select with Custom Styling */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Priority Select with Colors
          </label>
          <Select value={selectedPriority} onValueChange={(value) => setSelectedPriority(value[0] || "")}>
            <SelectTrigger>
              <SelectValue placeholder="Select priority..." />
            </SelectTrigger>
            <SelectContent>
              {priorities.map((priority) => (
                <SelectItem key={priority.value} value={priority.value}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: priority.color,
                      }}
                    />
                    {priority.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Small Size Select */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Small Size Select
          </label>
          <Select>
            <SelectTrigger size="sm">
              <SelectValue placeholder="Small select..." />
            </SelectTrigger>
            <SelectContent>
              {fruits.slice(0, 4).map((fruit) => (
                <SelectItem key={fruit.value} value={fruit.value}>
                  {fruit.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Multiple Selects in a Row */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Multiple Selects
          </label>
          <div style={{ display: "flex", gap: "16px" }}>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="First..." />
              </SelectTrigger>
              <SelectContent>
                {fruits.slice(0, 3).map((fruit) => (
                  <SelectItem key={fruit.value} value={fruit.value}>
                    {fruit.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Second..." />
              </SelectTrigger>
              <SelectContent>
                {fruits.slice(3, 6).map((fruit) => (
                  <SelectItem key={fruit.value} value={fruit.value}>
                    {fruit.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Disabled Select */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Disabled Select
          </label>
          <Select disabled>
            <SelectTrigger disabled>
              <SelectValue placeholder="This is disabled..." />
            </SelectTrigger>
            <SelectContent>
              {fruits.map((fruit) => (
                <SelectItem key={fruit.value} value={fruit.value}>
                  {fruit.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Select with Long List (Scrollable) */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Scrollable Select (Long List)
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select from many options..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Numbers</SelectLabel>
                {Array.from({ length: 20 }, (_, i) => (
                  <SelectItem key={i} value={`item-${i + 1}`}>
                    Item {i + 1}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Select with Complex Items */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Select with Rich Content
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select user..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user1">
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <IconUser size={16} />
                  <div>
                    <div>John Doe</div>
                    <div style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
                      john@example.com
                    </div>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="user2">
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <IconUser size={16} />
                  <div>
                    <div>Jane Smith</div>
                    <div style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
                      jane@example.com
                    </div>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="user3">
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <IconUser size={16} />
                  <div>
                    <div>Bob Johnson</div>
                    <div style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
                      bob@example.com
                    </div>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Different Alignment */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Position Variations
          </label>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Align start..." />
              </SelectTrigger>
              <SelectContent align="start">
                {fruits.slice(0, 3).map((fruit) => (
                  <SelectItem key={fruit.value} value={fruit.value}>
                    {fruit.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Align center..." />
              </SelectTrigger>
              <SelectContent align="center">
                {fruits.slice(0, 3).map((fruit) => (
                  <SelectItem key={fruit.value} value={fruit.value}>
                    {fruit.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Align end..." />
              </SelectTrigger>
              <SelectContent align="end">
                {fruits.slice(0, 3).map((fruit) => (
                  <SelectItem key={fruit.value} value={fruit.value}>
                    {fruit.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    );
  },
};
