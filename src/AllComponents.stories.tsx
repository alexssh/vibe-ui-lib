import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

// Import from the library entry to mirror consumer usage and ensure styles load once
import {
  Button,
  Card,
  Checkbox,
  Hint,
  Icon,
  InputField,
  Label,
  Paragraph,
  SelectField,
  TextArea,
  Title,
} from "."

const meta: Meta = {
  title: "Overview/All Components",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A single canvas to preview all components in their default state.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const ButtonPreview: Story = {
  render: () => <Button>Button</Button>,
}

export const IconPreview: Story = {
  render: () => <Icon />,
}

export const CardPreview: Story = {
  render: () => <Card className="w-full" />,
}

export const CheckboxPreview: Story = {
  render: () => <Checkbox />,
}

export const TextPrimitives: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Title />
      <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    </div>
  ),
}

export const InputFieldPreview: Story = {
  render: () => (
    <div className="flex flex-col">
      <Label>Label</Label>
      <InputField />
      <Hint>Helpful hint</Hint>
    </div>
  ),
}

export const SelectFieldPreview: Story = {
  render: () => (
    <div className="flex flex-col">
      <Label>Label</Label>
      <SelectField defaultValue="">
        <option value="">Select an option</option>
        <option value="alpha">Alpha</option>
        <option value="bravo">Bravo</option>
        <option value="charlie">Charlie</option>
      </SelectField>
      <Hint>Helpful hint</Hint>
    </div>
  ),
}

export const TextAreaPreview: Story = {
  render: () => (
    <div className="flex flex-col">
      <Label>Label</Label>
      <TextArea />
      <Hint>Helpful hint</Hint>
    </div>
  ),
}
