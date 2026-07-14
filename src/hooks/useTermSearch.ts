import { useMemo } from "react";
import Fuse from "fuse.js";
import { terms } from "../data";
import type { Term } from "../types";

const fuse = new Fuse(terms, {
  keys: [
    { name: "ko", weight: 0.35 },
    { name: "en", weight: 0.25 },
    { name: "abbr", weight: 0.2 },
    { name: "keywords", weight: 0.2 },
  ],
  threshold: 0.3,
  ignoreLocation: true,
});

export function useTermSearch(query: string): Term[] {
  return useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];
    return fuse.search(trimmed).map((result) => result.item);
  }, [query]);
}
