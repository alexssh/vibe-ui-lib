import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Title } from "./Title"
import type { TitleProps } from "./Title.types"

const meta: Meta<TitleProps> = {
  title: "Components/Title",
  component: Title,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Semantic headings h1–h6 with system typography.",
      },
    },
  },
  argTypes: {
    level: { control: { type: "radio" }, options: [1, 2, 3, 4, 5, 6] },
    title: { control: { type: "text" } },
    className: { control: { type: "text" } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { level: 1, title: "Title" } }
