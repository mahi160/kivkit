import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  useComboboxAnchor,
} from "../components/combobox/Combobox";
import {
  IconSearch,
  IconUser,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBriefcase,
  IconCode,
  IconPalette,
  IconTag,
} from "@tabler/icons-react";
import { useState } from "react";

const meta = {
  title: "Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Combobox>;

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
  { value: "watermelon", label: "Watermelon" },
];

const people = [
  { value: "john", label: "John Doe", email: "john@example.com", role: "Developer" },
  { value: "jane", label: "Jane Smith", email: "jane@example.com", role: "Designer" },
  { value: "bob", label: "Bob Johnson", email: "bob@example.com", role: "Manager" },
  { value: "alice", label: "Alice Brown", email: "alice@example.com", role: "Developer" },
  { value: "charlie", label: "Charlie Wilson", email: "charlie@example.com", role: "Designer" },
];

const groupedOptions = {
  Fruits: [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ],
  Vegetables: [
    { value: "carrot", label: "Carrot" },
    { value: "broccoli", label: "Broccoli" },
    { value: "spinach", label: "Spinach" },
  ],
  Grains: [
    { value: "rice", label: "Rice" },
    { value: "wheat", label: "Wheat" },
    { value: "oats", label: "Oats" },
  ],
};

const tags = [
  { value: "react", label: "React", icon: <IconCode size={16} /> },
  { value: "vue", label: "Vue", icon: <IconCode size={16} /> },
  { value: "angular", label: "Angular", icon: <IconCode size={16} /> },
  { value: "svelte", label: "Svelte", icon: <IconCode size={16} /> },
  { value: "next", label: "Next.js", icon: <IconCode size={16} /> },
  { value: "nuxt", label: "Nuxt", icon: <IconCode size={16} /> },
];

export const Playground: Story = {
  render: () => {
    const [selectedFruit, setSelectedFruit] = useState<string | null>(null);
    const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
    const [selectedFood, setSelectedFood] = useState<string | null>(null);
    const [searchValue, setSearchValue] = useState("");
    const [multiValue, setMultiValue] = useState<string[]>([]);
    const chipsAnchor = useComboboxAnchor();

    return (
      <div style={{ width: "700px", display: "flex", flexDirection: "column", gap: "40px", padding: "40px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Combobox Component</h2>

        {/* Basic Combobox */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Basic Combobox
          </label>
          <Combobox value={selectedFruit} onValueChange={(value) => setSelectedFruit(value)}>
            <ComboboxInput placeholder="Select a fruit..." showTrigger showClear />
            <ComboboxContent>
              <ComboboxList>
                {fruits.map((fruit) => (
                  <ComboboxItem key={fruit.value} value={fruit.value}>
                    {fruit.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
          {selectedFruit && (
            <p style={{ marginTop: "8px", fontSize: "12px", color: "var(--muted-foreground)" }}>
              Selected: {fruits.find(f => f.value === selectedFruit)?.label}
            </p>
          )}
        </div>

        {/* Combobox with Search */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Searchable Combobox
          </label>
          <Combobox 
            value={searchValue} 
            onValueChange={(value) => setSearchValue(value)}
          >
            <ComboboxInput placeholder="Search fruits..." showTrigger showClear />
            <ComboboxContent>
              <ComboboxList>
                {fruits
                  .filter((fruit) =>
                    fruit.label.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  .map((fruit) => (
                    <ComboboxItem key={fruit.value} value={fruit.value}>
                      {fruit.label}
                    </ComboboxItem>
                  ))}
                <ComboboxEmpty>No fruits found</ComboboxEmpty>
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>

        {/* Combobox with Icons */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Combobox with Icons
          </label>
          <Combobox value={selectedPerson} onValueChange={(value) => setSelectedPerson(value)}>
            <ComboboxInput placeholder="Select a person..." showTrigger showClear />
            <ComboboxContent>
              <ComboboxList>
                {people.map((person) => (
                  <ComboboxItem key={person.value} value={person.value}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%" }}>
                      <IconUser size={16} />
                      <div style={{ flex: 1 }}>
                        <div>{person.label}</div>
                        <div style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
                          {person.email}
                        </div>
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
                        {person.role}
                      </span>
                    </div>
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>

        {/* Grouped Combobox */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Grouped Combobox
          </label>
          <Combobox value={selectedFood} onValueChange={(value) => setSelectedFood(value)}>
            <ComboboxInput placeholder="Select food..." showTrigger showClear />
            <ComboboxContent>
              <ComboboxList>
                {Object.entries(groupedOptions).map(([category, items], index) => (
                  <ComboboxGroup key={category}>
                    {index > 0 && <ComboboxSeparator />}
                    <ComboboxLabel>{category}</ComboboxLabel>
                    {items.map((item) => (
                      <ComboboxItem key={item.value} value={item.value}>
                        {item.label}
                      </ComboboxItem>
                    ))}
                  </ComboboxGroup>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>

        {/* Multi-select with Chips */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Multi-select with Chips
          </label>
          <Combobox 
            multiple
            value={multiValue}
            onValueChange={(details) => {
              if (Array.isArray(details)) {
                setMultiValue(details);
              }
            }}
          >
            <ComboboxChips ref={chipsAnchor}>
              {multiValue.map((value) => {
                const tag = tags.find(t => t.value === value);
                return (
                  <ComboboxChip key={value} value={value}>
                    {tag?.icon}
                    {tag?.label}
                  </ComboboxChip>
                );
              })}
              <ComboboxChipsInput placeholder="Select technologies..." />
            </ComboboxChips>
            <ComboboxContent anchor={chipsAnchor.current}>
              <ComboboxList>
                {tags.map((tag) => (
                  <ComboboxItem key={tag.value} value={tag.value}>
                    {tag.icon}
                    {tag.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
          {multiValue.length > 0 && (
            <p style={{ marginTop: "8px", fontSize: "12px", color: "var(--muted-foreground)" }}>
              Selected {multiValue.length} {multiValue.length === 1 ? 'item' : 'items'}
            </p>
          )}
        </div>

        {/* Combobox with Custom Styling */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Combobox with Custom Styling
          </label>
          <Combobox>
            <ComboboxInput 
              placeholder="Type to search..." 
              showTrigger 
              showClear
              style={{ width: "100%" }}
            />
            <ComboboxContent>
              <ComboboxList>
                <ComboboxItem value="red">
                  <IconPalette size={16} style={{ color: "red" }} />
                  Red
                </ComboboxItem>
                <ComboboxItem value="blue">
                  <IconPalette size={16} style={{ color: "blue" }} />
                  Blue
                </ComboboxItem>
                <ComboboxItem value="green">
                  <IconPalette size={16} style={{ color: "green" }} />
                  Green
                </ComboboxItem>
                <ComboboxItem value="yellow">
                  <IconPalette size={16} style={{ color: "gold" }} />
                  Yellow
                </ComboboxItem>
                <ComboboxItem value="purple">
                  <IconPalette size={16} style={{ color: "purple" }} />
                  Purple
                </ComboboxItem>
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>

        {/* Disabled Combobox */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Disabled Combobox
          </label>
          <Combobox disabled>
            <ComboboxInput 
              placeholder="This is disabled..." 
              showTrigger 
              disabled
            />
            <ComboboxContent>
              <ComboboxList>
                {fruits.map((fruit) => (
                  <ComboboxItem key={fruit.value} value={fruit.value}>
                    {fruit.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>

        {/* Combobox with Empty State */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Combobox with Empty State
          </label>
          <Combobox>
            <ComboboxInput placeholder="Search for items..." showTrigger showClear />
            <ComboboxContent>
              <ComboboxList>
                <ComboboxEmpty>
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    <IconSearch size={32} style={{ opacity: 0.5, marginBottom: "8px" }} />
                    <div>No items found</div>
                    <div style={{ fontSize: "12px", marginTop: "4px" }}>
                      Try adjusting your search
                    </div>
                  </div>
                </ComboboxEmpty>
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>

        {/* Compact Combobox */}
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}>
            Compact Size
          </label>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Combobox>
              <ComboboxInput 
                placeholder="Small..." 
                showTrigger 
                style={{ width: "200px" }}
              />
              <ComboboxContent>
                <ComboboxList>
                  {fruits.slice(0, 3).map((fruit) => (
                    <ComboboxItem key={fruit.value} value={fruit.value}>
                      {fruit.label}
                    </ComboboxItem>
                  ))}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>

            <Combobox>
              <ComboboxInput 
                placeholder="Medium..." 
                showTrigger 
                style={{ width: "300px" }}
              />
              <ComboboxContent>
                <ComboboxList>
                  {fruits.slice(0, 3).map((fruit) => (
                    <ComboboxItem key={fruit.value} value={fruit.value}>
                      {fruit.label}
                    </ComboboxItem>
                  ))}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </div>
        </div>
      </div>
    );
  },
};
