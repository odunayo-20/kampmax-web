"use client"

import * as React from "react"
import { CheckCircle2, Loader2, Send } from "lucide-react"

import {
  inquiryTypes,
  submitContactInquiry,
  type ContactSubmissionPayload,
} from "@/app/_data/contact"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FormMessage } from "@/components/ui/form-message"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FormErrors = Partial<Record<keyof ContactSubmissionPayload, string>>

function ContactForm() {
  const [formData, setFormData] = React.useState<ContactSubmissionPayload>({
    name: "",
    email: "",
    inquiryType: "general",
    organization: "",
    phone: "",
    message: "",
    websiteUrl: "", // Honeypot field
  })

  const [errors, setErrors] = React.useState<FormErrors>({})
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  )
  const [feedbackMessage, setFeedbackMessage] = React.useState("")

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required."
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required."
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address (e.g. name@example.com)."
      }
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type."
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty."
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Please provide at least 15 characters to explain your request."
    } else if (formData.message.length > 2000) {
      newErrors.message = "Message must not exceed 2000 characters."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear individual field error upon editing
    if (errors[name as keyof ContactSubmissionPayload]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setStatus("submitting")
    setFeedbackMessage("")

    try {
      const result = await submitContactInquiry(formData)

      if (result.success) {
        setStatus("success")
        setFeedbackMessage(result.message)
      } else {
        setStatus("error")
        setFeedbackMessage(result.message || "An unexpected error occurred. Please try again.")
      }
    } catch {
      setStatus("error")
      setFeedbackMessage("Unable to send message. Please check your connection and try again.")
    }
  }

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      inquiryType: "general",
      organization: "",
      phone: "",
      message: "",
      websiteUrl: "",
    })
    setErrors({})
    setStatus("idle")
    setFeedbackMessage("")
  }

  return (
    <Card className="border-border/80 shadow-xs">
      <CardContent className="p-6 sm:p-8">
        {status === "success" ? (
          <div
            role="alert"
            className="flex flex-col items-center gap-4 py-8 text-center"
          >
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="size-6" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Inquiry Received
              </h3>
              <p className="max-w-md text-sm text-muted-foreground">
                {feedbackMessage}
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            {/* Honeypot field (hidden from assistive technologies and users) */}
            <div
              className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="websiteUrl">Leave this field blank</label>
              <input
                id="websiteUrl"
                type="text"
                name="websiteUrl"
                tabIndex={-1}
                autoComplete="off"
                value={formData.websiteUrl}
                onChange={handleChange}
              />
            </div>

            {/* Error banner if submission failed */}
            {status === "error" && (
              <div
                role="alert"
                className="rounded-lg border border-destructive/40 bg-destructive/10 p-3.5 text-xs text-destructive"
              >
                {feedbackMessage}
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-name">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="e.g. Adeyemi Adeleke"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <FormMessage id="name-error" variant="error">
                    {errors.name}
                  </FormMessage>
                )}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-email">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="e.g. adeyemi@example.com"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <FormMessage id="email-error" variant="error">
                    {errors.email}
                  </FormMessage>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Inquiry Type */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-inquiryType">
                  Inquiry Type <span className="text-destructive">*</span>
                </Label>
                <select
                  id="contact-inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30"
                >
                  {inquiryTypes.map((type) => (
                    <option
                      key={type.value}
                      value={type.value}
                      className="bg-card text-foreground"
                    >
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.inquiryType && (
                  <FormMessage variant="error">{errors.inquiryType}</FormMessage>
                )}
              </div>

              {/* Phone Number (Optional) */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <span className="text-3xs text-muted-foreground">Optional</span>
                </div>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. +234 801 234 5678"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Organization / Business Name (Optional) */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="contact-organization">
                  Organization / Business Name
                </Label>
                <span className="text-3xs text-muted-foreground">Optional</span>
              </div>
              <Input
                id="contact-organization"
                name="organization"
                type="text"
                placeholder="e.g. Campus Printing Co. or UNILAG Tech Society"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="contact-message">
                  Message <span className="text-destructive">*</span>
                </Label>
                <span className="text-3xs text-muted-foreground">
                  {formData.message.length} / 2000
                </span>
              </div>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="How can we help? Please provide details regarding your questions, campus location, or partnership ideas..."
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <FormMessage id="message-error" variant="error">
                  {errors.message}
                </FormMessage>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "mt-2 w-full gap-2 sm:w-auto",
              })}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="size-4" aria-hidden="true" />
                  <span>Send Inquiry</span>
                </>
              )}
            </button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

export { ContactForm }
