/**
 * Tidies text typed by people before it goes into a title or description:
 * collapses whitespace, drops a stray space before punctuation, and collapses
 * text that was entered twice in a row ("SamsungSamsung" -> "Samsung").
 */
export function cleanText(text: string | null | undefined): string {
  const single = (text ?? "")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim()
  return single.replace(/^(.{3,}?)\s*\1+$/i, "$1")
}

/** Form hints that were saved as if they were real profile text. */
const PLACEHOLDER = /max \d+ characters|your professional background|lorem ipsum/i

/** True when text is empty or is one of the app's form hints, not something a person wrote. */
export function isPlaceholderText(text: string | null | undefined): boolean {
  const clean = cleanText(text)
  return !clean || PLACEHOLDER.test(clean)
}
