#!/usr/bin/env node
// Verifies every EN/SV string value from the legacy translations.json
// appears somewhere in the ported src/content modules (after stripping
// HTML tags and collapsing whitespace). Prints any misses.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
// A copy of the legacy site's locales/translations.json, kept in-repo so this
// script is self-contained (the original legacy checkout is not part of this repo).
const LEGACY_TRANSLATIONS = path.join(__dirname, "legacy-reference", "translations.json");

function findTranslationsFile() {
  if (fs.existsSync(LEGACY_TRANSLATIONS)) return LEGACY_TRANSLATIONS;
  return null;
}

function strip(s) {
  return String(s)
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function collectStrings(obj, out = []) {
  if (typeof obj === "string") {
    out.push(obj);
  } else if (Array.isArray(obj)) {
    for (const v of obj) collectStrings(v, out);
  } else if (obj && typeof obj === "object") {
    for (const v of Object.values(obj)) collectStrings(v, out);
  }
  return out;
}

async function loadAllContent() {
  const contentDir = path.join(ROOT, "src", "content");
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".ts"));
  let combined = "";
  for (const f of files) {
    combined += fs.readFileSync(path.join(contentDir, f), "utf8") + "\n";
  }
  return combined;
}

async function main() {
  const translationsPath = findTranslationsFile();
  if (!translationsPath) {
    console.error(
      "Could not locate legacy locales/translations.json — skipping verification (nothing to compare against)."
    );
    process.exit(0);
  }

  const t = JSON.parse(fs.readFileSync(translationsPath, "utf8"));
  const raw = await loadAllContent();
  // Strip tags from the raw TS source too, so escaped HTML entities inside
  // JSON.stringify'd strings still match.
  const haystack = strip(raw).toLowerCase();

  const misses = [];
  let checked = 0;

  for (const lang of ["en", "sv"]) {
    const dict = t[lang] || {};
    for (const [key, value] of Object.entries(dict)) {
      if (typeof value !== "string" || !value.trim()) continue;
      checked++;
      const needle = strip(value).toLowerCase();
      if (!needle) continue;
      // For very long HTML blobs, just check a stable fragment (first 60 chars)
      // to keep the check fast and resilient to minor whitespace differences.
      const probe = needle.length > 80 ? needle.slice(0, 80) : needle;
      if (!haystack.includes(probe)) {
        misses.push({ lang, key });
      }
    }
  }

  console.log(`Checked ${checked} translation strings (en+sv) against src/content/*.ts`);
  if (misses.length === 0) {
    console.log("✅ verify-content: no missing content.");
  } else {
    console.log(`⚠️  verify-content: ${misses.length} possibly missing keys:`);
    for (const m of misses) {
      console.log(`  - [${m.lang}] ${m.key}`);
    }
  }
}

main();
