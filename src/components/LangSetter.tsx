"use client";

import { useEffect } from "react";

export default function LangSetter({ lang }: { lang: "en" | "sv" }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
