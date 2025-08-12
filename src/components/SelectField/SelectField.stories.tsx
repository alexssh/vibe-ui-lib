import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { SelectField } from "./SelectField"
import type { SelectFieldProps } from "./SelectField.types"
import { Label } from "../Label"
import { Hint } from "../Hint"

const meta: Meta<SelectFieldProps> = {
  title: "Components/SelectField",
  component: SelectField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Basic select field styled with a dropdown icon.",
      },
    },
  },
  argTypes: {
    className: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    error: {
      control: { type: "boolean" },
      description: "Visual error state (adds red outline)",
    },
    onChange: {
      action: "changed",
      description: "Fires when the selected option changes",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <SelectField {...args}>
      <option value="">Select an option</option>
      <option value="alpha">Alpha</option>
      <option value="bravo">Bravo</option>
      <option value="charlie">Charlie</option>
    </SelectField>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <SelectField disabled>
        <option value="">Select an option</option>
        <option value="alpha">Alpha</option>
        <option value="bravo">Bravo</option>
        <option value="charlie">Charlie</option>
      </SelectField>
      <SelectField value="bravo" disabled>
        <option value="">Select an option</option>
        <option value="alpha">Alpha</option>
        <option value="bravo">Bravo</option>
        <option value="charlie">Charlie</option>
      </SelectField>
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [val, setVal] = React.useState("")
    return (
      <div className="flex flex-col gap-1">
        <SelectField value={val} onChange={(e) => setVal(e.target.value)}>
          <option value="">Select an option</option>
          <option value="alpha">Alpha</option>
          <option value="bravo">Bravo</option>
          <option value="charlie">Charlie</option>
        </SelectField>
      </div>
    )
  },
}

export const WithLabelAndHint: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      <Label>Country</Label>
      <SelectField defaultValue="">
        <option value="">Select an option</option>
        <option value="alpha">Alpha</option>
        <option value="bravo">Bravo</option>
        <option value="charlie">Charlie</option>
      </SelectField>
      <Hint>Choose your country from the list</Hint>
    </div>
  ),
}

export const WithLabelAndError: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      <Label>Country</Label>
      <SelectField defaultValue="" error>
        <option value="">Select an option</option>
        <option value="alpha">Alpha</option>
        <option value="bravo">Bravo</option>
        <option value="charlie">Charlie</option>
      </SelectField>
      <Hint variant="error">This field is required</Hint>
    </div>
  ),
}
