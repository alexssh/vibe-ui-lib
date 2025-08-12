import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Hint } from "./Hint"
import type { HintProps } from "./Hint.types"

const meta: Meta<HintProps> = {
  title: "Components/Hint",
  component: Hint,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Atomic hint/help or error message text displayed near inputs.",
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
      description: "Custom content; overrides `title` when provided",
    },
    title: {
      control: { type: "text" },
      description: "Fallback text content when `children` is not provided",
      defaultValue: "Hint",
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "error"],
      description: "Visual tone of the hint text",
      defaultValue: "default",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Helpful hint goes here",
    variant: "default",
  },
}

export const Error: Story = {
  args: {
    children: "There is an error with this field",
    variant: "error",
  },
}

export const WithGutter: Story = {
  render: () => (
    <div className="flex flex-col">
      <input className="h-9 rounded border border-neutral-border-interactive px-2" />
      <Hint>This is some guidance below an input</Hint>
    </div>
  ),
}
