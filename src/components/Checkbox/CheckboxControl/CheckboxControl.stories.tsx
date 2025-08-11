import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { CheckboxControl } from "./CheckboxControl"

const meta: Meta<typeof CheckboxControl> = {
  title: "Components/Checkbox/CheckboxControl (private)",
  component: CheckboxControl,
  tags: ["autodocs"],
  parameters: { controls: { exclude: ["onCheckedChange"] } },
  argTypes: {
    id: { control: false },
    name: { control: "text" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof CheckboxControl>

export const Unchecked: Story = {
  args: { checked: false },
}

export const Checked: Story = {
  args: { checked: true },
}

export const Disabled: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-4">
        <CheckboxControl checked={false} disabled />
        <CheckboxControl checked={true} disabled />
      </div>
    )
  },
}

export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)
    return (
      <div className="flex flex-col gap-4">
        <CheckboxControl
          {...args}
          checked={checked}
          onCheckedChange={setChecked}
        />
      </div>
    )
  },
}
