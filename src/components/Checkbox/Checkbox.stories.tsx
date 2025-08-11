import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./Checkbox"

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    checked: { control: false, table: { category: "State" } },
    defaultChecked: { control: "boolean", table: { category: "State" } },
    disabled: { control: "boolean" },
    onCheckedChange: { action: "checkedChange" },
    name: { control: "text" },
    value: { control: "text" },
    id: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: { title: "Label" },
}

export const Checked: Story = {
  args: { title: "Checked", defaultChecked: true },
}

export const Disabled: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-4">
        <Checkbox checked={false} title="Label" disabled />
        <Checkbox checked={true} title="Checked" disabled />
      </div>
    )
  },
}
