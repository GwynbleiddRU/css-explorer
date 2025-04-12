
export interface PropertyValue {
  value: string;
  description: string;
}

export interface PropertyDetails {
  id: string;
  name: string;
  description: string;
  syntax: string;
  values: PropertyValue[];
  browsers: string[];
  example: {
    html: string;
    css: string;
  };
}
