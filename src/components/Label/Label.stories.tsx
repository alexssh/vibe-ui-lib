import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "./Label"
import type { LabelProps } from "./Label.types"

const meta: Meta<LabelProps> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Atomic text label for form controls and UI captions.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
    children: {
      control: { type: "text" },
      description: "Custom label content; overrides `title` when provided",
    },
    title: {
      control: { type: "text" },
      description: "Fallback text content when `children` is not provided",
      defaultValue: "Label",
    },
    htmlFor: {
      control: { type: "text" },
      description: "Associates the label with a form control id",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Label",
  },
}

export const WithHtmlFor: Story = {
  render: () => (
    <div className="flex flex-col">
      <Label htmlFor="email">Email</Label>
      <input
        id="email"
        className="h-9 rounded border border-neutral-border-interactive px-2"
        placeholder="you@example.com"
      />
    </div>
  ),
}
