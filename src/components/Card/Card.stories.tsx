import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./Card"
import type { CardProps } from "./Card.types"

const meta: Meta<CardProps> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Container block with rounded corners and a divider border. Accepts content via `children` or `slot`. When empty, renders the literal string 'Placeholder'.",
      },
    },
  },
  argTypes: {
    className: { control: { type: "text" }, description: "Extra CSS classes" },
    children: {
      control: { type: "text" },
      description: "Content inside the card (alias of `slot`)",
    },
    slot: {
      control: { type: "text" },
      description: "Figma 'slot' content; treated as children",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithSlotProp: Story = {
  args: {
    slot: (
      <div className="flex w-full flex-col gap-2 px-4">
        <h3 className="text-[21px] font-semibold">Slot Title</h3>
        <p className="text-[16px] leading-[20px] text-[color:var(--color-neutral-text-secondary)]">
          Provided via slot prop
        </p>
      </div>
    ),
  },
}
