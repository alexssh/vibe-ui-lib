import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { TextArea } from "./TextArea"
import type { TextAreaProps } from "./TextArea.types"
import { Label } from "../Label"
import { Hint } from "../Hint"

const meta: Meta<TextAreaProps> = {
  title: "Components/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Basic multiline text input with error state.",
      },
    },
  },
  argTypes: {
    className: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    error: { control: { type: "boolean" } },
    onChange: { action: "changed" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
  args: { placeholder: "Placeholder", rows: 3 },
}

export const WithValue: Story = {
  args: { defaultValue: "Line 1\nLine 2", rows: 4 },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <TextArea placeholder="Disabled placeholder" disabled rows={3} />
      <TextArea defaultValue="Disabled value" disabled rows={3} />
    </div>
  ),
}

export const WithLabelAndHint: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      <Label>About you</Label>
      <TextArea placeholder="Tell us something about yourself" rows={4} />
      <Hint>Minimum 20 characters</Hint>
    </div>
  ),
}

export const ErrorWithLabelAndHint: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      <Label>About you</Label>
      <TextArea defaultValue="Too short" error rows={4} />
      <Hint variant="error">Please provide at least 20 characters</Hint>
    </div>
  ),
}
