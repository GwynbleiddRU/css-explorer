
export interface PropertyValue {
  value: string;
  description: string;
}

export interface PropertyExample {
  html: string;
  css: string;
}

export interface PropertyDetails {
  id: string;
  name: string;
  description: string;
  syntax: string;
  browsers: string[];
  example: PropertyExample;
}
