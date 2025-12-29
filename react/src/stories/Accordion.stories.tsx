import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "../components/accordion/Accordion";
const meta = {
  component: Accordion,
  tags: ["autodocs"],
  title: "Accordion",
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: "400px" }}>
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Jim Halpert</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: "pretty" }}>
              Jim is a salesman at Dunder Mifflin known for his pranks on
              Dwight, his relationship with Pam, and his dry sense of humor.
              He's the everyman of the office who often looks directly at the
              camera with knowing expressions.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Dwight Schrute</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: "pretty" }}>
              Dwight is the Assistant Regional Manager (or Assistant TO the
              Regional Manager) who runs a beet farm and considers himself a
              survivalist. He's Michael's most loyal employee and Jim's frequent
              prank victim.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Michael Scott</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: "pretty" }}>
              Michael is the Regional Manager who thinks he's the "World's Best
              Boss." He loves to make jokes (often inappropriate) and considers
              his employees his friends. His coffee mug confirms his
              self-proclaimed title.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
