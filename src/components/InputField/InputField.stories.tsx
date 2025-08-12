import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { InputField } from "./InputField"
import type { InputFieldProps } from "./InputField.types"

const meta: Meta<InputFieldProps> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Basic input field with optional clear button.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
    value: {
      control: { type: "text" },
      description: "Controlled input value",
    },
    defaultValue: {
      control: { type: "text" },
      description: "Uncontrolled default value",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the input is disabled",
    },
    showClear: {
      control: { type: "boolean" },
      description: "Toggle clear button visibility",
      defaultValue: true,
    },
    onClear: {
      action: "cleared",
      description: "Called when the clear button is pressed",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
  args: {
    placeholder: "Placeholder",
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: "Value",
  },
}

export const Disabled: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-2">
        <InputField placeholder={"Disabled placeholder"} disabled />
        <InputField value={"Disabled value"} disabled />
      </div>
    )
  },
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
