import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import {
  Button,
  Checkbox,
  Hint,
  InputField,
  Label,
  Paragraph,
  SelectField,
  TextArea,
  Title,
} from "."

type FieldErrors = {
  name?: string
  email?: string
  theme?: string
  message?: string
  terms?: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const FormController: React.FC = () => {
  const [nameValue, setNameValue] = React.useState<string>("")
  const [emailValue, setEmailValue] = React.useState<string>("")
  const [themeValue, setThemeValue] = React.useState<string>("")
  const [messageValue, setMessageValue] = React.useState<string>("")
  const [termsChecked, setTermsChecked] = React.useState<boolean>(false)

  const [fieldErrors, setFieldErrors] = React.useState<FieldErrors>({})
  const [submitted, setSubmitted] = React.useState<boolean>(false)

  const clearError = (key: keyof FieldErrors) => {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  const validate = (): boolean => {
    const nextErrors: FieldErrors = {}

    if (!nameValue.trim()) nextErrors.name = "Name is required"
    if (!emailValue.trim()) nextErrors.email = "Email is required"
    else if (!emailRegex.test(emailValue))
      nextErrors.email = "Enter a valid email"
    if (!themeValue) nextErrors.theme = "Please choose a theme"
    if (!messageValue.trim()) nextErrors.message = "Message is required"
    if (!termsChecked) nextErrors.terms = "You must accept the terms"

    setFieldErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const ok = validate()
    setSubmitted(true)
    if (ok) {
      // For demo: simple feedback
      // eslint-disable-next-line no-alert
      alert("Form submitted successfully!")
    }
  }

  const nameId = "demo-name"
  const emailId = "demo-email"
  const themeId = "demo-theme"
  const messageId = "demo-message"
  const termsId = "demo-terms"

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex max-w-xl flex-col gap-8"
    >
      <div className="flex flex-col gap-3">
        <Title level={2} title="Contact us" />
        <Paragraph content="Please fill in the form below. All fields are required." />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <Label htmlFor={nameId}>Name</Label>
          <InputField
            id={nameId}
            required
            value={nameValue}
            onChange={(e) => {
              setNameValue(e.target.value)
              clearError("name")
            }}
            onClear={() => {
              setNameValue("")
              clearError("name")
            }}
            onFocus={() => clearError("name")}
            error={Boolean(fieldErrors.name)}
            placeholder="Your full name"
          />
          {fieldErrors.name ? (
            <Hint variant="error">{fieldErrors.name}</Hint>
          ) : null}
        </div>

        <div className="flex flex-col">
          <Label htmlFor={emailId}>Email</Label>
          <InputField
            id={emailId}
            type="email"
            required
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value)
              clearError("email")
            }}
            onClear={() => {
              setEmailValue("")
              clearError("email")
            }}
            onFocus={() => clearError("email")}
            error={Boolean(fieldErrors.email)}
            placeholder="you@example.com"
          />
          {fieldErrors.email ? (
            <Hint variant="error">{fieldErrors.email}</Hint>
          ) : null}
        </div>

        <div className="flex flex-col">
          <Label htmlFor={themeId}>Theme</Label>
          <SelectField
            id={themeId}
            required
            value={themeValue}
            onChange={(e) => {
              setThemeValue(e.target.value)
              clearError("theme")
            }}
            onFocus={() => clearError("theme")}
            error={Boolean(fieldErrors.theme)}
          >
            <option value="support">Support</option>
            <option value="sales">Sales</option>
            <option value="feedback">Feedback</option>
          </SelectField>
          {fieldErrors.theme ? (
            <Hint variant="error">{fieldErrors.theme}</Hint>
          ) : null}
        </div>

        <div className="flex flex-col">
          <Label htmlFor={messageId}>Message</Label>
          <TextArea
            id={messageId}
            required
            rows={4}
            value={messageValue}
            onChange={(e) => {
              setMessageValue(e.target.value)
              clearError("message")
            }}
            onFocus={() => clearError("message")}
            error={Boolean(fieldErrors.message)}
            placeholder="How can we help?"
          />
          {fieldErrors.message ? (
            <Hint variant="error">{fieldErrors.message}</Hint>
          ) : null}
        </div>

        <div className="flex flex-col">
          <Checkbox
            id={termsId}
            title="I agree to the terms and conditions"
            checked={termsChecked}
            onCheckedChange={(next) => {
              setTermsChecked(next)
              clearError("terms")
            }}
          />
          {fieldErrors.terms ? (
            <Hint variant="error">{fieldErrors.terms}</Hint>
          ) : null}
        </div>
      </div>
      <div className="flex items-center">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}

const meta: Meta = {
  title: "Examples/Controlled Form",
  component: FormController,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <FormController />,
}
