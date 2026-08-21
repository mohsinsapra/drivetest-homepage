/** Rough reading-time estimate (~200 wpm) from a bundle of HTML/plain strings. */
export function estimateReadingMinutes(parts: (string | undefined)[]): number {
  const text = parts.filter(Boolean).join(" ").replace(/<[^>]+>/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
