export type Lang = "en" | "sv";

export const LANGS: Lang[] = ["en", "sv"];

export const otherLang = (lang: Lang): Lang => (lang === "en" ? "sv" : "en");

/**
 * Build an absolute path for a given language and a language-neutral path.
 * `path` should start with "/" and NOT include a language prefix, e.g. "/blog/".
 * EN lives at the root, SV under /sv/.
 */
export function localePath(lang: Lang, path: string): string {
  const clean = path === "/" ? "" : path.replace(/^\/+/, "/");
  if (lang === "en") {
    return clean === "" ? "/" : clean;
  }
  return clean === "" ? "/sv/" : `/sv${clean}`;
}

/**
 * Given the current lang and the language-neutral path of the CURRENT page,
 * return the path to the same page in the other language.
 */
export function alternatePath(lang: Lang, path: string): string {
  return localePath(otherLang(lang), path);
}

export const SITE_URL = "https://drivetest.se";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
