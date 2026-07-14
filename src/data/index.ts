import categoriesJson from "./categories.json";
import termsJson from "./terms.json";
import type { Category, Term } from "../types";

export const categories = categoriesJson as Category[];
export const terms = termsJson as Term[];

export function getCategory(categoryId: string): Category | undefined {
  return categories.find((c) => c.id === categoryId);
}

export function getSubcategory(categoryId: string, subcategoryId: string) {
  return getCategory(categoryId)?.subcategories.find(
    (s) => s.id === subcategoryId,
  );
}

export function getTerm(termId: string): Term | undefined {
  return terms.find((t) => t.id === termId);
}

export function getTermsByCategory(categoryId: string, subcategoryId?: string) {
  return terms.filter(
    (t) =>
      t.categoryId === categoryId &&
      (subcategoryId ? t.subcategoryId === subcategoryId : true),
  );
}
