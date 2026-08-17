import { renderInlineMathHTML, formatSubSupFallback } from './mathRenderer'

/**
 * Global Math & Chemistry Sanitizer for VG NEET Library
 * Guarantees raw LaTeX source code NEVER appears in the student-facing UI.
 * Converts LaTeX commands into clean HTML, plain text, and Unicode mathematical notation.
 */
export function cleanMathNotation(input: string | undefined | null): string {
  if (!input) return ''
  const s = String(input);
  return renderInlineMathHTML(s);
}

export function sanitizeTextPlain(input: string | undefined | null): string {
  if (!input) return ''
  return formatSubSupFallback(String(input));
}
