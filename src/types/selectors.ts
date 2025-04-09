
export interface SelectorExample {
  html: string;
  css: string;
}

export interface CssSelector {
  id: string;
  name: string;
  parameters: string;
  example: SelectorExample;
  description: string;
  platforms: string[];
  category: string;
}

export interface SelectorCategory {
  id: string;
  name: string;
  selectors: CssSelector[];
}
