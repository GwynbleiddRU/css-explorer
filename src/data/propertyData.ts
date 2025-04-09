
import { PropertyCategory } from "@/types/properties";

export const propertyCategories: PropertyCategory[] = [
  {
    id: "layout",
    name: "Layout",
    properties: [
      {
        id: "display",
        name: "display",
        syntax: "display: value;",
        example: {
          html: "<div class=\"box\">This is a flex container</div>",
          css: ".box { display: flex; justify-content: center; border: 1px solid #ccc; padding: 20px; }"
        },
        description: "Specifies how an element is displayed on the page.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "layout"
      },
      {
        id: "position",
        name: "position",
        syntax: "position: static|relative|absolute|fixed|sticky;",
        example: {
          html: "<div class=\"container\"><div class=\"positioned\">Positioned element</div></div>",
          css: ".container { position: relative; height: 100px; border: 1px solid #ccc; } .positioned { position: absolute; top: 30px; left: 30px; background: #e0e0ff; padding: 5px; }"
        },
        description: "Specifies the positioning method for an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "layout"
      },
      {
        id: "float",
        name: "float",
        syntax: "float: none|left|right|initial|inherit;",
        example: {
          html: "<div class=\"container\"><div class=\"floated\">Floated element</div><p>Text flows around the floated element.</p></div>",
          css: ".container { border: 1px solid #ccc; overflow: auto; padding: 10px; } .floated { float: left; width: 100px; height: 50px; margin-right: 10px; background: #e0ffe0; padding: 5px; }"
        },
        description: "Specifies how an element should float.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "layout"
      }
    ]
  },
  {
    id: "box-model",
    name: "Box Model",
    properties: [
      {
        id: "width",
        name: "width",
        syntax: "width: auto|value|initial|inherit;",
        example: {
          html: "<div class=\"box\">Fixed width box</div>",
          css: ".box { width: 200px; background: #f0f0f0; padding: 10px; }"
        },
        description: "Sets the width of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "margin",
        name: "margin",
        syntax: "margin: value|auto|initial|inherit;",
        example: {
          html: "<div class=\"outer\"><div class=\"box\">Box with margin</div></div>",
          css: ".outer { background: #f8f8f8; padding: 5px; } .box { margin: 20px; background: #e0e0ff; padding: 10px; }"
        },
        description: "Sets the margin area on all four sides of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "padding",
        name: "padding",
        syntax: "padding: value|initial|inherit;",
        example: {
          html: "<div class=\"box\">Box with padding</div>",
          css: ".box { padding: 20px; background: #e0ffe0; border: 1px solid #ccc; }"
        },
        description: "Sets the padding area on all four sides of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      }
    ]
  },
  {
    id: "typography",
    name: "Typography",
    properties: [
      {
        id: "font-family",
        name: "font-family",
        syntax: "font-family: family-name|generic-family|initial|inherit;",
        example: {
          html: "<p class=\"serif\">Serif font</p><p class=\"sans-serif\">Sans-serif font</p>",
          css: ".serif { font-family: 'Times New Roman', Times, serif; } .sans-serif { font-family: Arial, Helvetica, sans-serif; }"
        },
        description: "Specifies the font family for text.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "font-size",
        name: "font-size",
        syntax: "font-size: medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit;",
        example: {
          html: "<p class=\"small\">Small text</p><p class=\"large\">Large text</p>",
          css: ".small { font-size: 12px; } .large { font-size: 24px; }"
        },
        description: "Specifies the size of the font.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "color",
        name: "color",
        syntax: "color: color|initial|inherit;",
        example: {
          html: "<p class=\"red\">Red text</p><p class=\"blue\">Blue text</p>",
          css: ".red { color: #ff0000; } .blue { color: #0000ff; }"
        },
        description: "Sets the color of text.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      }
    ]
  },
  {
    id: "background",
    name: "Background",
    properties: [
      {
        id: "background-color",
        name: "background-color",
        syntax: "background-color: color|transparent|initial|inherit;",
        example: {
          html: "<div class=\"box\">Element with background color</div>",
          css: ".box { background-color: #e0e0ff; padding: 20px; }"
        },
        description: "Sets the background color of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "background"
      },
      {
        id: "background-image",
        name: "background-image",
        syntax: "background-image: url|none|initial|inherit;",
        example: {
          html: "<div class=\"box\">Element with background image</div>",
          css: ".box { background-image: linear-gradient(to right, #f0f0f0, #e0e0ff); height: 100px; padding: 20px; }"
        },
        description: "Sets one or more background images for an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "background"
      }
    ]
  },
  {
    id: "border",
    name: "Border",
    properties: [
      {
        id: "border",
        name: "border",
        syntax: "border: border-width border-style border-color|initial|inherit;",
        example: {
          html: "<div class=\"box\">Element with border</div>",
          css: ".box { border: 2px solid #3366ff; padding: 20px; }"
        },
        description: "A shorthand property for border-width, border-style and border-color.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-radius",
        name: "border-radius",
        syntax: "border-radius: length|% [length|%]|initial|inherit;",
        example: {
          html: "<div class=\"box\">Element with rounded corners</div>",
          css: ".box { border-radius: 10px; border: 1px solid #ccc; padding: 20px; }"
        },
        description: "Defines the radius of the element's corners.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      }
    ]
  }
];
