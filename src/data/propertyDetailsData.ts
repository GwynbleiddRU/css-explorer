
import { PropertyDetails } from "@/types/propertyValues";

// Sample property details for font-weight
export const fontWeightDetails: PropertyDetails = {
  id: "font-weight",
  name: "font-weight",
  description: "Устанавливает насыщенность или \"жирность\" начертания шрифта.",
  syntax: "font-weight: normal | bold | bolder | lighter | число | initial | inherit;",
  values: [
    { value: "normal", description: "Значение по умолчанию. Обычное начертание." },
    { value: "bold", description: "Жирное начертание." },
    { value: "bolder", description: "Более жирное начертание, чем у родительского элемента." },
    { value: "lighter", description: "Менее жирное начертание, чем у родительского элемента." },
    { value: "100", description: "Устанавливает определенную насыщенность шрифта - от полужирного до жирного начертания. 400 - то же, что normal, 700 - то же, что bold." },
    { value: "200", description: "Устанавливает определенную насыщенность шрифта - от полужирного до жирного начертания." },
    { value: "300", description: "Устанавливает определенную насыщенность шрифта - от полужирного до жирного начертания." },
    { value: "400", description: "Устанавливает определенную насыщенность шрифта - то же, что normal." },
    { value: "500", description: "Устанавливает определенную насыщенность шрифта - от полужирного до жирного начертания." },
    { value: "600", description: "Устанавливает определенную насыщенность шрифта - от полужирного до жирного начертания." },
    { value: "700", description: "Устанавливает определенную насыщенность шрифта - то же, что bold." },
    { value: "800", description: "Устанавливает определенную насыщенность шрифта - от полужирного до жирного начертания." },
    { value: "900", description: "Устанавливает определенную насыщенность шрифта - от полужирного до жирного начертания." },
    { value: "inherit", description: "Значение наследуется от родительского элемента." },
    { value: "initial", description: "Устанавливает значение по умолчанию." },
  ],
  browsers: ["chrome", "edge", "firefox", "safari", "opera"],
  example: {
    html: "<p class=\"normal\">Обычный текст</p>\n<p class=\"thick\">Жирный текст</p>\n<p class=\"thicker\">Очень жирный текст</p>",
    css: "p.normal {\n  font-weight: normal;\n}\n\np.thick {\n  font-weight: bold;\n}\n\np.thicker {\n  font-weight: 900;\n}"
  }
};

// Add more property details as needed
export const propertyDetailsList: Record<string, PropertyDetails> = {
  "font-weight": fontWeightDetails,
};

// Function to get property details by ID
export const getPropertyDetailsById = (id: string): PropertyDetails | undefined => {
  return propertyDetailsList[id];
};
