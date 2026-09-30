"use client"

import type { ComponentProps } from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"

const variants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

/**
 * Subtle entrance animation for a section as it scrolls into view.
 * Use sparingly — not every section needs one. No-ops entirely for
 * users who prefer reduced motion.
 */
function FadeIn({
  delay = 0,
  ...props
}: ComponentProps<typeof motion.div> & { delay?: number }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <motion.div {...props} />
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      {...props}
    />
  )
}

export { FadeIn }
