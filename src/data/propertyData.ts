
import { PropertyCategory } from "@/types/properties";

export const propertyCategories: PropertyCategory[] = [
  {
    id: "layout",
    name: "Layout",
    properties: [
      {
        id: "display",
        name: "display",
        syntax: "display: none|block|inline|inline-block|flex|grid|...",
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
        syntax: "position: static|relative|absolute|fixed|sticky",
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
        syntax: "float: none|left|right|initial|inherit",
        example: {
          html: "<div class=\"container\"><div class=\"floated\">Floated element</div><p>Text flows around the floated element.</p></div>",
          css: ".container { border: 1px solid #ccc; overflow: auto; padding: 10px; } .floated { float: left; width: 100px; height: 50px; margin-right: 10px; background: #e0ffe0; padding: 5px; }"
        },
        description: "Specifies how an element should float.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "layout"
      },
      {
        id: "clear",
        name: "clear",
        syntax: "clear: none|left|right|both|inherit",
        example: {
          html: "<div style=\"float: left; width: 100px; height: 50px; background: #e0e0ff;\">Floated div</div><div class=\"cleared\">This div is cleared</div>",
          css: ".cleared { clear: both; background: #ffe0e0; padding: 5px; }"
        },
        description: "Specifies which sides of an element where other floating elements are not allowed.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "layout"
      },
      {
        id: "z-index",
        name: "z-index",
        syntax: "z-index: auto|number|inherit",
        example: {
          html: "<div class=\"container\"><div class=\"box box1\">Z-index: 1</div><div class=\"box box2\">Z-index: 2</div></div>",
          css: ".container { position: relative; height: 100px; } .box { position: absolute; width: 100px; height: 100px; padding: 5px; } .box1 { background: rgba(255,0,0,0.7); left: 20px; top: 20px; z-index: 1; } .box2 { background: rgba(0,0,255,0.7); left: 50px; top: 50px; z-index: 2; }"
        },
        description: "Specifies the stack order of an element (which element should be placed in front of, or behind, the others).",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "layout"
      },
      {
        id: "top",
        name: "top",
        syntax: "top: auto|length|%|inherit",
        example: {
          html: "<div class=\"container\"><div class=\"positioned\">Top: 20px</div></div>",
          css: ".container { position: relative; height: 100px; border: 1px solid #ccc; } .positioned { position: absolute; top: 20px; background: #e0e0ff; padding: 5px; }"
        },
        description: "Specifies the top position of a positioned element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "layout"
      },
      {
        id: "right",
        name: "right",
        syntax: "right: auto|length|%|inherit",
        example: {
          html: "<div class=\"container\"><div class=\"positioned\">Right: 20px</div></div>",
          css: ".container { position: relative; height: 100px; border: 1px solid #ccc; } .positioned { position: absolute; right: 20px; background: #e0e0ff; padding: 5px; }"
        },
        description: "Specifies the right position of a positioned element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "layout"
      },
      {
        id: "bottom",
        name: "bottom",
        syntax: "bottom: auto|length|%|inherit",
        example: {
          html: "<div class=\"container\"><div class=\"positioned\">Bottom: 20px</div></div>",
          css: ".container { position: relative; height: 100px; border: 1px solid #ccc; } .positioned { position: absolute; bottom: 20px; background: #e0e0ff; padding: 5px; }"
        },
        description: "Specifies the bottom position of a positioned element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "layout"
      },
      {
        id: "left",
        name: "left",
        syntax: "left: auto|length|%|inherit",
        example: {
          html: "<div class=\"container\"><div class=\"positioned\">Left: 20px</div></div>",
          css: ".container { position: relative; height: 100px; border: 1px solid #ccc; } .positioned { position: absolute; left: 20px; background: #e0e0ff; padding: 5px; }"
        },
        description: "Specifies the left position of a positioned element.",
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
        syntax: "width: auto|value|initial|inherit",
        example: {
          html: "<div class=\"box\">Fixed width box</div>",
          css: ".box { width: 200px; background: #f0f0f0; padding: 10px; }"
        },
        description: "Sets the width of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "height",
        name: "height",
        syntax: "height: auto|value|initial|inherit",
        example: {
          html: "<div class=\"box\">Fixed height box</div>",
          css: ".box { height: 100px; background: #f0f0f0; padding: 10px; }"
        },
        description: "Sets the height of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "min-width",
        name: "min-width",
        syntax: "min-width: length|%|initial|inherit",
        example: {
          html: "<div class=\"box\">Box with minimum width</div>",
          css: ".box { min-width: 200px; background: #f0f0f0; padding: 10px; }"
        },
        description: "Sets the minimum width of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "max-width",
        name: "max-width",
        syntax: "max-width: none|length|%|initial|inherit",
        example: {
          html: "<div class=\"box\">Box with maximum width</div>",
          css: ".box { max-width: 300px; background: #f0f0f0; padding: 10px; }"
        },
        description: "Sets the maximum width of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "min-height",
        name: "min-height",
        syntax: "min-height: length|%|initial|inherit",
        example: {
          html: "<div class=\"box\">Box with minimum height</div>",
          css: ".box { min-height: 100px; background: #f0f0f0; padding: 10px; }"
        },
        description: "Sets the minimum height of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "max-height",
        name: "max-height",
        syntax: "max-height: none|length|%|initial|inherit",
        example: {
          html: "<div class=\"box\">Box with maximum height</div>",
          css: ".box { max-height: 150px; overflow: auto; background: #f0f0f0; padding: 10px; }"
        },
        description: "Sets the maximum height of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "margin",
        name: "margin",
        syntax: "margin: length|auto|%|inherit",
        example: {
          html: "<div class=\"outer\"><div class=\"box\">Box with margin</div></div>",
          css: ".outer { background: #f8f8f8; padding: 5px; } .box { margin: 20px; background: #e0e0ff; padding: 10px; }"
        },
        description: "Sets the margin area on all four sides of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "margin-top",
        name: "margin-top",
        syntax: "margin-top: length|auto|%|inherit",
        example: {
          html: "<div class=\"outer\"><div class=\"box\">Box with top margin</div></div>",
          css: ".outer { background: #f8f8f8; padding: 5px; } .box { margin-top: 20px; background: #e0e0ff; padding: 10px; }"
        },
        description: "Sets the top margin of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "margin-right",
        name: "margin-right",
        syntax: "margin-right: length|auto|%|inherit",
        example: {
          html: "<div class=\"outer\"><div class=\"box\">Box with right margin</div></div>",
          css: ".outer { background: #f8f8f8; padding: 5px; } .box { margin-right: 20px; background: #e0e0ff; padding: 10px; }"
        },
        description: "Sets the right margin of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "margin-bottom",
        name: "margin-bottom",
        syntax: "margin-bottom: length|auto|%|inherit",
        example: {
          html: "<div class=\"outer\"><div class=\"box\">Box with bottom margin</div></div>",
          css: ".outer { background: #f8f8f8; padding: 5px; } .box { margin-bottom: 20px; background: #e0e0ff; padding: 10px; }"
        },
        description: "Sets the bottom margin of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "margin-left",
        name: "margin-left",
        syntax: "margin-left: length|auto|%|inherit",
        example: {
          html: "<div class=\"outer\"><div class=\"box\">Box with left margin</div></div>",
          css: ".outer { background: #f8f8f8; padding: 5px; } .box { margin-left: 20px; background: #e0e0ff; padding: 10px; }"
        },
        description: "Sets the left margin of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "padding",
        name: "padding",
        syntax: "padding: length|%|inherit",
        example: {
          html: "<div class=\"box\">Box with padding</div>",
          css: ".box { padding: 20px; background: #e0ffe0; border: 1px solid #ccc; }"
        },
        description: "Sets the padding area on all four sides of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "padding-top",
        name: "padding-top",
        syntax: "padding-top: length|%|inherit",
        example: {
          html: "<div class=\"box\">Box with top padding</div>",
          css: ".box { padding-top: 20px; background: #e0ffe0; border: 1px solid #ccc; }"
        },
        description: "Sets the top padding of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "padding-right",
        name: "padding-right",
        syntax: "padding-right: length|%|inherit",
        example: {
          html: "<div class=\"box\">Box with right padding</div>",
          css: ".box { padding-right: 20px; background: #e0ffe0; border: 1px solid #ccc; }"
        },
        description: "Sets the right padding of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "padding-bottom",
        name: "padding-bottom",
        syntax: "padding-bottom: length|%|inherit",
        example: {
          html: "<div class=\"box\">Box with bottom padding</div>",
          css: ".box { padding-bottom: 20px; background: #e0ffe0; border: 1px solid #ccc; }"
        },
        description: "Sets the bottom padding of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "padding-left",
        name: "padding-left",
        syntax: "padding-left: length|%|inherit",
        example: {
          html: "<div class=\"box\">Box with left padding</div>",
          css: ".box { padding-left: 20px; background: #e0ffe0; border: 1px solid #ccc; }"
        },
        description: "Sets the left padding of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "box-sizing",
        name: "box-sizing",
        syntax: "box-sizing: content-box|border-box|initial|inherit",
        example: {
          html: "<div class=\"box content-box\">Content-box</div><div class=\"box border-box\">Border-box</div>",
          css: ".box { width: 150px; height: 80px; padding: 20px; border: 5px solid #888; margin: 10px; } .content-box { background: #ffecb3; box-sizing: content-box; } .border-box { background: #b3e5fc; box-sizing: border-box; }"
        },
        description: "Defines how the width and height of an element are calculated: should they include padding and borders, or not.",
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
        syntax: "font-family: family-name|generic-family|initial|inherit",
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
        syntax: "font-size: medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit",
        example: {
          html: "<p class=\"small\">Small text</p><p class=\"large\">Large text</p>",
          css: ".small { font-size: 12px; } .large { font-size: 24px; }"
        },
        description: "Specifies the size of the font.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "font-weight",
        name: "font-weight",
        syntax: "font-weight: normal|bold|bolder|lighter|number|initial|inherit",
        example: {
          html: "<p class=\"normal\">Normal weight</p><p class=\"bold\">Bold weight</p><p class=\"custom\">Custom weight (600)</p>",
          css: ".normal { font-weight: normal; } .bold { font-weight: bold; } .custom { font-weight: 600; }"
        },
        description: "Specifies the weight of a font.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "font-style",
        name: "font-style",
        syntax: "font-style: normal|italic|oblique|initial|inherit",
        example: {
          html: "<p class=\"normal\">Normal style</p><p class=\"italic\">Italic style</p>",
          css: ".normal { font-style: normal; } .italic { font-style: italic; }"
        },
        description: "Specifies the font style for text.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "font-variant",
        name: "font-variant",
        syntax: "font-variant: normal|small-caps|initial|inherit",
        example: {
          html: "<p class=\"normal\">Normal text</p><p class=\"small-caps\">Small caps text</p>",
          css: ".normal { font-variant: normal; } .small-caps { font-variant: small-caps; }"
        },
        description: "Specifies whether or not a text should be displayed in a small-caps font.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "color",
        name: "color",
        syntax: "color: color|initial|inherit",
        example: {
          html: "<p class=\"red\">Red text</p><p class=\"blue\">Blue text</p>",
          css: ".red { color: #ff0000; } .blue { color: #0000ff; }"
        },
        description: "Sets the color of text.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "line-height",
        name: "line-height",
        syntax: "line-height: normal|number|length|%|initial|inherit",
        example: {
          html: "<p class=\"normal\">This paragraph has normal line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p class=\"large\">This paragraph has increased line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
          css: ".normal { line-height: normal; } .large { line-height: 2; }"
        },
        description: "Sets the line height.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "text-align",
        name: "text-align",
        syntax: "text-align: left|right|center|justify|initial|inherit",
        example: {
          html: "<p class=\"left\">Left aligned text</p><p class=\"center\">Center aligned text</p><p class=\"right\">Right aligned text</p>",
          css: ".left { text-align: left; } .center { text-align: center; } .right { text-align: right; }"
        },
        description: "Specifies the horizontal alignment of text in an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "text-transform",
        name: "text-transform",
        syntax: "text-transform: none|capitalize|uppercase|lowercase|initial|inherit",
        example: {
          html: "<p class=\"uppercase\">Uppercase text</p><p class=\"lowercase\">Lowercase Text</p><p class=\"capitalize\">capitalized text</p>",
          css: ".uppercase { text-transform: uppercase; } .lowercase { text-transform: lowercase; } .capitalize { text-transform: capitalize; }"
        },
        description: "Controls the capitalization of text.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "text-decoration",
        name: "text-decoration",
        syntax: "text-decoration: text-decoration-line text-decoration-color text-decoration-style|initial|inherit",
        example: {
          html: "<p class=\"underline\">Underlined text</p><p class=\"line-through\">Line-through text</p><p class=\"overline\">Overlined text</p>",
          css: ".underline { text-decoration: underline; } .line-through { text-decoration: line-through; } .overline { text-decoration: overline; }"
        },
        description: "Specifies the decoration added to text.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "letter-spacing",
        name: "letter-spacing",
        syntax: "letter-spacing: normal|length|initial|inherit",
        example: {
          html: "<p class=\"normal\">Normal letter spacing</p><p class=\"spaced\">Increased letter spacing</p>",
          css: ".normal { letter-spacing: normal; } .spaced { letter-spacing: 3px; }"
        },
        description: "Increases or decreases the space between characters in a text.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "word-spacing",
        name: "word-spacing",
        syntax: "word-spacing: normal|length|initial|inherit",
        example: {
          html: "<p class=\"normal\">Normal word spacing</p><p class=\"spaced\">Increased word spacing</p>",
          css: ".normal { word-spacing: normal; } .spaced { word-spacing: 10px; }"
        },
        description: "Increases or decreases the white space between words.",
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
        id: "background",
        name: "background",
        syntax: "background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit",
        example: {
          html: "<div class=\"box\">Element with background shorthand</div>",
          css: ".box { background: #e0e0ff url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 512 512%22%3E%3Cpath fill=%22%23aaa%22 d=%22M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54c-3.31 0-6-2.69-6-6V118c0-3.31 2.69-6 6-6h404c3.31 0 6 2.69 6 6v276c0 3.31-2.69 6-6 6z%22/%3E%3C/svg%3E') no-repeat center center; padding: 30px; height: 100px; }"
        },
        description: "A shorthand property for setting all background properties in one declaration.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "background"
      },
      {
        id: "background-color",
        name: "background-color",
        syntax: "background-color: color|transparent|initial|inherit",
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
        syntax: "background-image: url|none|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with background image</div>",
          css: ".box { background-image: linear-gradient(to right, #f0f0f0, #e0e0ff); height: 100px; padding: 20px; }"
        },
        description: "Sets one or more background images for an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "background"
      },
      {
        id: "background-repeat",
        name: "background-repeat",
        syntax: "background-repeat: repeat|repeat-x|repeat-y|no-repeat|initial|inherit",
        example: {
          html: "<div class=\"box\">Background repeat demo</div>",
          css: ".box { background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 stroke=%22%23c6e5ff%22 stroke-width=%224%22 fill=%22%23e1f1ff%22 /%3E%3C/svg%3E'); background-repeat: repeat-x; padding: 20px; height: 100px; }"
        },
        description: "Sets how a background image will be repeated.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "background"
      },
      {
        id: "background-position",
        name: "background-position",
        syntax: "background-position: value",
        example: {
          html: "<div class=\"box\">Background position demo</div>",
          css: ".box { background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 stroke=%22%23c6e5ff%22 stroke-width=%224%22 fill=%22%23e1f1ff%22 /%3E%3C/svg%3E'); background-repeat: no-repeat; background-position: center; height: 100px; border: 1px solid #ccc; }"
        },
        description: "Sets the starting position of a background image.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "background"
      },
      {
        id: "background-size",
        name: "background-size",
        syntax: "background-size: auto|length|cover|contain|initial|inherit",
        example: {
          html: "<div class=\"box\">Background size: cover</div>",
          css: ".box { background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 stroke=%22%23c6e5ff%22 stroke-width=%224%22 fill=%22%23e1f1ff%22 /%3E%3C/svg%3E'); background-repeat: no-repeat; background-size: cover; height: 100px; padding: 20px; }"
        },
        description: "Specifies the size of the background images.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "background"
      },
      {
        id: "background-attachment",
        name: "background-attachment",
        syntax: "background-attachment: scroll|fixed|local|initial|inherit",
        example: {
          html: "<div class=\"box\">\n  <p>Scroll down to see the fixed background...</p>\n  <div style=\"height: 100px;\"></div>\n  <p>The background stays in place!</p>\n</div>",
          css: ".box { background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 stroke=%22%23c6e5ff%22 stroke-width=%224%22 fill=%22%23e1f1ff%22 /%3E%3C/svg%3E'); background-repeat: repeat; background-attachment: fixed; padding: 20px; height: 200px; overflow: auto; }"
        },
        description: "Sets whether a background image scrolls with the rest of the page, or is fixed.",
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
        syntax: "border: border-width border-style border-color|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with border</div>",
          css: ".box { border: 2px solid #3366ff; padding: 20px; }"
        },
        description: "A shorthand property for border-width, border-style and border-color.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-width",
        name: "border-width",
        syntax: "border-width: thin|medium|thick|length|initial|inherit",
        example: {
          html: "<div class=\"box\">Border with custom width</div>",
          css: ".box { border-style: solid; border-width: 5px; border-color: #3366ff; padding: 20px; }"
        },
        description: "Sets the width of an element's four borders.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-style",
        name: "border-style",
        syntax: "border-style: none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit",
        example: {
          html: "<div class=\"boxes\">\n  <div class=\"box solid\">Solid</div>\n  <div class=\"box dashed\">Dashed</div>\n  <div class=\"box dotted\">Dotted</div>\n</div>",
          css: ".boxes { display: flex; gap: 10px; } .box { border-width: 3px; padding: 10px; } .solid { border-style: solid; } .dashed { border-style: dashed; } .dotted { border-style: dotted; }"
        },
        description: "Sets the style of an element's four borders.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-color",
        name: "border-color",
        syntax: "border-color: color|transparent|initial|inherit",
        example: {
          html: "<div class=\"box\">Border with custom color</div>",
          css: ".box { border-style: solid; border-width: 3px; border-color: #ff5252; padding: 20px; }"
        },
        description: "Sets the color of an element's four borders.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-radius",
        name: "border-radius",
        syntax: "border-radius: length|% [length|%]|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with rounded corners</div>",
          css: ".box { border-radius: 10px; border: 1px solid #ccc; padding: 20px; }"
        },
        description: "Defines the radius of the element's corners.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      }
    ]
  },
  {
    id: "flexbox",
    name: "Flexbox",
    properties: [
      {
        id: "display-flex",
        name: "display: flex",
        syntax: "display: flex|inline-flex",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n</div>",
          css: ".container { display: flex; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; margin: 5px; }"
        },
        description: "Specifies the type of box used for an HTML element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "flexbox"
      },
      {
        id: "flex-direction",
        name: "flex-direction",
        syntax: "flex-direction: row|row-reverse|column|column-reverse|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n</div>",
          css: ".container { display: flex; flex-direction: column; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; margin: 5px; }"
        },
        description: "Specifies the direction of the flexible items inside a flex container.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "flexbox"
      },
      {
        id: "flex-wrap",
        name: "flex-wrap",
        syntax: "flex-wrap: nowrap|wrap|wrap-reverse|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n  <div class=\"item\">4</div>\n  <div class=\"item\">5</div>\n  <div class=\"item\">6</div>\n</div>",
          css: ".container { display: flex; flex-wrap: wrap; width: 200px; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; margin: 5px; width: 50px; }"
        },
        description: "Specifies whether the flexible items should wrap or not.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "flexbox"
      },
      {
        id: "flex-flow",
        name: "flex-flow",
        syntax: "flex-flow: flex-direction flex-wrap|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n  <div class=\"item\">4</div>\n  <div class=\"item\">5</div>\n  <div class=\"item\">6</div>\n</div>",
          css: ".container { display: flex; flex-flow: row wrap; width: 200px; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; margin: 5px; width: 50px; }"
        },
        description: "A shorthand property for flex-direction and flex-wrap.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "flexbox"
      },
      {
        id: "justify-content",
        name: "justify-content",
        syntax: "justify-content: flex-start|flex-end|center|space-between|space-around|space-evenly|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n</div>",
          css: ".container { display: flex; justify-content: space-between; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; }"
        },
        description: "Aligns the flexible container's items when the items do not use all available space on the main-axis.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "flexbox"
      },
      {
        id: "align-items",
        name: "align-items",
        syntax: "align-items: stretch|center|flex-start|flex-end|baseline|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item item1\">1</div>\n  <div class=\"item item2\">2</div>\n  <div class=\"item item3\">3</div>\n</div>",
          css: ".container { display: flex; align-items: center; background-color: #f0f0f0; padding: 10px; height: 100px; } .item { background-color: #3f51b5; color: white; padding: 10px; margin: 5px; } .item1 { height: 20px; } .item2 { height: 40px; } .item3 { height: 60px; }"
        },
        description: "Aligns the flexible container's items when the items do not use all available space on the cross-axis.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "flexbox"
      },
      {
        id: "align-content",
        name: "align-content",
        syntax: "align-content: stretch|center|flex-start|flex-end|space-between|space-around|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n  <div class=\"item\">4</div>\n  <div class=\"item\">5</div>\n  <div class=\"item\">6</div>\n</div>",
          css: ".container { display: flex; flex-wrap: wrap; align-content: space-between; background-color: #f0f0f0; padding: 10px; height: 200px; width: 200px; } .item { background-color: #3f51b5; color: white; padding: 10px; margin: 5px; width: 40%; }"
        },
        description: "Aligns a flex container's lines within the flex container when there is extra space on the cross-axis.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "flexbox"
      },
      {
        id: "flex",
        name: "flex",
        syntax: "flex: flex-grow flex-shrink flex-basis|auto|initial|none|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item item1\">1 (flex: 1)</div>\n  <div class=\"item item2\">2 (flex: 2)</div>\n  <div class=\"item item3\">3 (flex: 1)</div>\n</div>",
          css: ".container { display: flex; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; margin: 5px; } .item1 { flex: 1; } .item2 { flex: 2; } .item3 { flex: 1; }"
        },
        description: "A shorthand property for the flex-grow, flex-shrink, and the flex-basis properties.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "flexbox"
      },
      {
        id: "flex-grow",
        name: "flex-grow",
        syntax: "flex-grow: number|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item item1\">1 (grow: 1)</div>\n  <div class=\"item item2\">2 (grow: 2)</div>\n  <div class=\"item item3\">3 (grow: 1)</div>\n</div>",
          css: ".container { display: flex; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; margin: 5px; } .item1 { flex-grow: 1; } .item2 { flex-grow: 2; } .item3 { flex-grow: 1; }"
        },
        description: "Specifies how much a flex item will grow relative to the rest of the flex items.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "flexbox"
      },
      {
        id: "flex-shrink",
        name: "flex-shrink",
        syntax: "flex-shrink: number|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item item1\">1 (shrink: 1)</div>\n  <div class=\"item item2\">2 (shrink: 0)</div>\n  <div class=\"item item3\">3 (shrink: 1)</div>\n</div>",
          css: ".container { display: flex; width: 300px; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; margin: 5px; width: 150px; } .item1 { flex-shrink: 1; } .item2 { flex-shrink: 0; } .item3 { flex-shrink: 1; }"
        },
        description: "Specifies how much a flex item will shrink relative to the rest of the flex items.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "flexbox"
      },
      {
        id: "flex-basis",
        name: "flex-basis",
        syntax: "flex-basis: number|auto|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item item1\">1 (basis: 100px)</div>\n  <div class=\"item item2\">2 (basis: 200px)</div>\n  <div class=\"item item3\">3 (basis: auto)</div>\n</div>",
          css: ".container { display: flex; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; margin: 5px; } .item1 { flex-basis: 100px; } .item2 { flex-basis: 200px; } .item3 { flex-basis: auto; }"
        },
        description: "Specifies the initial length of a flex item.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "flexbox"
      },
      {
        id: "align-self",
        name: "align-self",
        syntax: "align-self: auto|stretch|center|flex-start|flex-end|baseline|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item align-center\">2 (center)</div>\n  <div class=\"item\">3</div>\n</div>",
          css: ".container { display: flex; height: 100px; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; margin: 5px; } .align-center { align-self: center; }"
        },
        description: "Specifies the alignment for a specific flex item inside a flex container.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "flexbox"
      },
      {
        id: "order",
        name: "order",
        syntax: "order: number|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item order3\">1 (order: 3)</div>\n  <div class=\"item order1\">2 (order: 1)</div>\n  <div class=\"item order2\">3 (order: 2)</div>\n</div>",
          css: ".container { display: flex; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; margin: 5px; } .order1 { order: 1; } .order2 { order: 2; } .order3 { order: 3; }"
        },
        description: "Specifies the order of a flex item relative to the rest of the flex items inside the same container.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "flexbox"
      }
    ]
  },
  {
    id: "grid",
    name: "Grid",
    properties: [
      {
        id: "display-grid",
        name: "display: grid",
        syntax: "display: grid|inline-grid",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n  <div class=\"item\">4</div>\n</div>",
          css: ".container { display: grid; grid-template-columns: 100px 100px; grid-template-rows: 50px 50px; gap: 10px; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; display: flex; justify-content: center; align-items: center; }"
        },
        description: "Specifies the type of box used for an HTML element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "grid"
      },
      {
        id: "grid-template-columns",
        name: "grid-template-columns",
        syntax: "grid-template-columns: none|auto|max-content|min-content|length|%|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n</div>",
          css: ".container { display: grid; grid-template-columns: 100px auto 100px; gap: 10px; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; height: 50px; }"
        },
        description: "Specifies the size of the columns, and how many columns in a grid layout.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "grid"
      },
      {
        id: "grid-template-rows",
        name: "grid-template-rows",
        syntax: "grid-template-rows: none|auto|max-content|min-content|length|%|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n</div>",
          css: ".container { display: grid; grid-template-rows: 50px 100px 50px; gap: 10px; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; }"
        },
        description: "Specifies the size of the rows, and how many rows in a grid layout.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "grid"
      },
      {
        id: "grid-template-areas",
        name: "grid-template-areas",
        syntax: "grid-template-areas: none|item names|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"header\">Header</div>\n  <div class=\"menu\">Menu</div>\n  <div class=\"content\">Content</div>\n  <div class=\"footer\">Footer</div>\n</div>",
          css: ".container { display: grid; grid-template-columns: 100px auto; grid-template-rows: auto auto auto; grid-template-areas: 'header header' 'menu content' 'footer footer'; gap: 10px; background-color: #f0f0f0; padding: 10px; } .header { grid-area: header; background-color: #ff5252; color: white; padding: 10px; } .menu { grid-area: menu; background-color: #7c4dff; color: white; padding: 10px; } .content { grid-area: content; background-color: #40c4ff; color: white; padding: 10px; } .footer { grid-area: footer; background-color: #69f0ae; color: white; padding: 10px; }"
        },
        description: "Specifies how to display columns and rows, using named grid items.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "grid"
      },
      {
        id: "grid-template",
        name: "grid-template",
        syntax: "grid-template: none|grid-template-rows / grid-template-columns|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n  <div class=\"item\">4</div>\n</div>",
          css: ".container { display: grid; grid-template: 100px 100px / 100px 100px; gap: 10px; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; }"
        },
        description: "A shorthand property for the grid-template-rows, grid-template-columns and grid-template-areas properties.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "grid"
      },
      {
        id: "grid-column-gap",
        name: "column-gap",
        syntax: "column-gap: length|%|normal|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n  <div class=\"item\">4</div>\n</div>",
          css: ".container { display: grid; grid-template-columns: auto auto; grid-template-rows: auto auto; column-gap: 20px; row-gap: 10px; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; height: 50px; }"
        },
        description: "Specifies the gap between the columns in a grid layout.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "grid"
      },
      {
        id: "grid-row-gap",
        name: "row-gap",
        syntax: "row-gap: length|%|normal|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n  <div class=\"item\">4</div>\n</div>",
          css: ".container { display: grid; grid-template-columns: auto auto; grid-template-rows: auto auto; column-gap: 10px; row-gap: 20px; background-color: #f0f0f0; padding: 10px; } .item { background-color: #3f51b5; color: white; padding: 10px; }"
        },
        description: "Specifies the gap between the rows in a grid layout.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "grid"
      }
    ]
  },
  {
    id: "transitions",
    name: "Transitions & Animations",
    properties: [
      {
        id: "transition",
        name: "transition",
        syntax: "transition: property duration timing-function delay|initial|inherit",
        example: {
          html: "<button class=\"btn\">Hover Me</button>",
          css: ".btn { background-color: #3f51b5; color: white; padding: 10px 20px; border: none; border-radius: 4px; transition: background-color 0.3s ease; } .btn:hover { background-color: #5c6bc0; }"
        },
        description: "A shorthand property for setting the four transition properties into a single property.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transitions"
      },
      {
        id: "transition-property",
        name: "transition-property",
        syntax: "transition-property: none|all|property|initial|inherit",
        example: {
          html: "<button class=\"btn\">Hover Me</button>",
          css: ".btn { background-color: #3f51b5; color: white; padding: 10px 20px; border: none; border-radius: 4px; transition-property: background-color; transition-duration: 0.3s; } .btn:hover { background-color: #5c6bc0; }"
        },
        description: "Specifies the name of the CSS property the transition effect is for.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transitions"
      },
      {
        id: "transition-duration",
        name: "transition-duration",
        syntax: "transition-duration: time|initial|inherit",
        example: {
          html: "<button class=\"btn fast\">Fast</button> <button class=\"btn slow\">Slow</button>",
          css: ".btn { background-color: #3f51b5; color: white; padding: 10px 20px; border: none; border-radius: 4px; transition-property: background-color; } .fast { transition-duration: 0.2s; } .slow { transition-duration: 1s; } .btn:hover { background-color: #5c6bc0; }"
        },
        description: "Specifies how many seconds or milliseconds a transition effect takes to complete.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transitions"
      },
      {
        id: "transition-timing-function",
        name: "transition-timing-function",
        syntax: "transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|steps()|cubic-bezier()|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"box linear\">linear</div>\n  <div class=\"box ease\">ease</div>\n  <div class=\"box ease-in\">ease-in</div>\n  <div class=\"box ease-out\">ease-out</div>\n</div>",
          css: ".container { display: flex; flex-wrap: wrap; gap: 10px; } .box { width: 100px; height: 50px; background-color: #3f51b5; color: white; display: flex; justify-content: center; align-items: center; transition-property: transform; transition-duration: 1s; } .linear { transition-timing-function: linear; } .ease { transition-timing-function: ease; } .ease-in { transition-timing-function: ease-in; } .ease-out { transition-timing-function: ease-out; } .box:hover { transform: translateX(50px); }"
        },
        description: "Specifies the speed curve of the transition effect.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transitions"
      },
      {
        id: "animation",
        name: "animation",
        syntax: "animation: name duration timing-function delay iteration-count direction fill-mode play-state",
        example: {
          html: "<div class=\"box\"></div>",
          css: "@keyframes slide { 0% { transform: translateX(0); } 100% { transform: translateX(200px); } } .box { width: 50px; height: 50px; background-color: #3f51b5; animation: slide 2s ease-in-out infinite alternate; }"
        },
        description: "A shorthand property for all the animation properties, except the animation-play-state property.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transitions"
      },
      {
        id: "animation-name",
        name: "animation-name",
        syntax: "animation-name: keyframename|none|initial|inherit",
        example: {
          html: "<div class=\"box\"></div>",
          css: "@keyframes slide { 0% { transform: translateX(0); } 100% { transform: translateX(200px); } } .box { width: 50px; height: 50px; background-color: #3f51b5; animation-name: slide; animation-duration: 2s; animation-iteration-count: infinite; animation-direction: alternate; }"
        },
        description: "Specifies a name for the @keyframes animation.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transitions"
      },
      {
        id: "animation-duration",
        name: "animation-duration",
        syntax: "animation-duration: time|initial|inherit",
        example: {
          html: "<div class=\"box\"></div>",
          css: "@keyframes slide { 0% { transform: translateX(0); } 100% { transform: translateX(200px); } } .box { width: 50px; height: 50px; background-color: #3f51b5; animation-name: slide; animation-duration: 2s; animation-iteration-count: infinite; animation-direction: alternate; }"
        },
        description: "Specifies how many seconds or milliseconds an animation takes to complete one cycle.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transitions"
      },
      {
        id: "keyframes",
        name: "@keyframes",
        syntax: "@keyframes animationname { keyframes-selector { css-styles; } }",
        example: {
          html: "<div class=\"box\"></div>",
          css: "@keyframes colorchange { 0% { background-color: #3f51b5; } 50% { background-color: #ff5252; } 100% { background-color: #69f0ae; } } .box { width: 100px; height: 100px; animation: colorchange 3s infinite; }"
        },
        description: "Specifies the animation code for a CSS animation.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transitions"
      }
    ]
  }
];

