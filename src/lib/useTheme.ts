"use client";

import { useCallback, useEffect, useState } from "react";
import { getCurrentTheme, setStoredTheme, type Theme } from "./theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = getCurrentTheme() === "dark" ? "light" : "dark";
    setStoredTheme(next);
    setTheme(next);
  }, []);

  return { theme, toggle };
}
