import type { ReactNode } from "react"
import { Eyebrow, H2, Lead } from "@/components/ui/typography"
import { cn } from "cn"

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <H2>{title}</H2>
      {description ? <Lead className="max-w-2xl">{description}</Lead> : null}
    </div>
  )
}

export { SectionHeading }
