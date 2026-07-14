export interface Source {
  label: string;
  url?: string;
}

export interface Term {
  id: string;
  ko: string;
  en: string;
  abbr?: string;
  keywords: string[];
  categoryId: string;
  subcategoryId: string;
  definition: string;
  relatedTermIds: string[];
  sources: Source[];
}

export interface Subcategory {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}
