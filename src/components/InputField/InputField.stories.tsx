import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { InputField } from "./InputField"
import type { InputFieldProps } from "./InputField.types"
import { Label } from "../Label"
import { Hint } from "../Hint"

const meta: Meta<InputFieldProps> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Basic text input with optional clear button and error state.",
      },
    },
  },
  argTypes: {
    className: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    showClear: { control: { type: "boolean" }, defaultValue: true },
    error: { control: { type: "boolean" } },
    onChange: { action: "changed", description: "Value change" },
    onClear: { action: "cleared", description: "Clear button clicked" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
  args: { placeholder: "Placeholder" },
}

export const WithValue: Story = {
  args: { defaultValue: "Value" },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <InputField placeholder="Disabled placeholder" disabled />
      <InputField value="Disabled value" disabled />
    </div>
  ),
}

export const ErrorWithLabelAndHint: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      <Label>Email</Label>
      <InputField defaultValue="invalid@" error />
      <Hint variant="error">Please enter a valid email</Hint>
    </div>
  ),
}

export const WithLabelAndHint: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      <Label>Username</Label>
      <InputField placeholder="Type your username" />
      <Hint>Use 3–16 characters</Hint>
    </div>
  ),
}

export const ControlledWithClear: Story = {
  render: () => {
    const [val, setVal] = React.useState("Hello")
    return (
      <InputField
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onClear={() => setVal("")}
      />
    )
  },
}
