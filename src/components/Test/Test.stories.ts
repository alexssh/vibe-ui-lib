import { Meta, StoryObj } from "@storybook/react"

// @ts-expect-error: TestProps is exported only in the type build
import { Test, TestProps } from "./Test"

const meta: Meta<TestProps> = {
  title: "Components/Test/Test",
  component: Test,
  tags: ["autodocs"],
  args: {
    title: "Sample Test Title",
    variant: "primary",
    children: "Hello world",
    onClick: () => {
      console.log("CLICKED!")
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const TestPreview: Story = {}
