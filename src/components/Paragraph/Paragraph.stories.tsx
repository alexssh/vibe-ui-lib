import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Paragraph } from "./Paragraph"
import type { ParagraphProps } from "./Paragraph.types"

const meta: Meta<ParagraphProps> = {
  title: "Components/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Body text 16/20. Supports alternative tags and nested content.",
      },
    },
  },
  argTypes: {
    as: { control: { type: "radio" }, options: ["p", "div", "span"] },
    content: { control: { type: "text" } },
    className: { control: { type: "text" } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    as: "p",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat.",
  },
}

export const NestedElements: Story = {
  render: () => (
    <Paragraph>
      This is <strong>bold</strong>, <em>italic</em>, and <a href="#">a link</a>
      .
    </Paragraph>
  ),
}
