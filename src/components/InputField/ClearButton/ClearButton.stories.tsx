import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ClearButton } from "./ClearButton"

const meta: Meta = {
  title: "Components/InputField/ClearButton",
  component: ClearButton as React.ComponentType,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Private subcomponent used by InputField to clear the value. Mirrors secondary Button surface without border.",
      },
    },
  },
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    ariaLabel: {
      control: { type: "text" },
      description: "Accessible label",
      defaultValue: "Clear",
    },
    onClick: { action: "clicked" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <ClearButton {...(args as any)} />
      <span className="text-sm text-[color:var(--color-neutral-text-secondary)]">
        Click to clear
      </span>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
