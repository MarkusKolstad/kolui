import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "../components/ui/accordion";

const meta = {
  title: "Example/Accordion",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Group: Story = {
  render: () => (
    <Accordion defaultValue={["design"]}>
      <AccordionItem value="design">
        <AccordionHeader>
          <AccordionTrigger>How does the design system work?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <p>
            Tokens define the visual language, while components provide
            accessible interaction patterns that can be composed into products.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="theming">
        <AccordionHeader>
          <AccordionTrigger>Can I customize the theme?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <p>
            Override the semantic CSS variables to adapt colors, surfaces,
            borders, and typography to your product.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="multiple">
        <AccordionHeader>
          <AccordionTrigger>Can multiple sections stay open?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <p>
            Pass the Base UI multiple prop to allow more than one open item.
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};
