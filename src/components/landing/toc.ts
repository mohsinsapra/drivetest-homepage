import { slugify } from "./labels";

/** Adds ids to every <h2> in an HTML string and returns the matching TOC items. */
export function tocFromHtml(html: string): { html: string; items: { id: string; label: string }[] } {
  const used = new Set<string>();
  const items: { id: string; label: string }[] = [];
  const out = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (_m, attrs: string, inner: string) => {
    const label = inner.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    const existing = attrs.match(/\sid=["']([^"']+)["']/);
    let id = existing ? existing[1] : slugify(label) || "section";
    if (!existing) {
      const base = id;
      let n = 2;
      while (used.has(id)) id = `${base}-${n++}`;
    }
    used.add(id);
    if (label) items.push({ id, label });
    return existing ? `<h2${attrs}>${inner}</h2>` : `<h2${attrs} id="${id}">${inner}</h2>`;
  });
  return { html: out, items };
}
