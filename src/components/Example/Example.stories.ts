import { Meta, StoryObj } from "@storybook/react"

// @ts-expect-error: ExampleProps is exported only in the type build
import { Example, ExampleProps } from "./Example"

const meta: Meta<ExampleProps> = {
  title: "Components/Example/Example",
  component: Example,
  tags: ["autodocs"],
  args: {
    title: "Sample Example",
    variant: "primary",
    children: "Hello world",
    onClick: () => {
      console.log("CLICKED!")
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const ExamplePreview: Story = {}
