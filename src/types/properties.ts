
export interface PropertyExample {
  html: string;
  css: string;
}

export interface CssProperty {
  id: string;
  name: string;
  syntax: string;
  example: PropertyExample;
  description: string;
  browsers: string[];
  category: string;
}

export interface PropertyCategory {
  id: string;
  name: string;
  properties: CssProperty[];
}
