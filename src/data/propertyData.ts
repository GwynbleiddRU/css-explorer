
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
      },
      {
        id: "overflow",
        name: "overflow",
        syntax: "overflow: visible|hidden|scroll|auto|initial|inherit",
        example: {
          html: "<div class=\"overflow-container\">\n  <p>This content is too big for its container, so we can see how overflow works. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n</div>",
          css: ".overflow-container { width: 150px; height: 100px; border: 1px solid #000; overflow: scroll; }"
        },
        description: "Specifies what happens if content overflows an element's box.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "overflow-x",
        name: "overflow-x",
        syntax: "overflow-x: visible|hidden|scroll|auto|initial|inherit",
        example: {
          html: "<div class=\"overflow-x-demo\">\n  <div class=\"long-content\">This is a very long text content that will overflow horizontally and demonstrate the overflow-x property.</div>\n</div>",
          css: ".overflow-x-demo { width: 150px; border: 1px solid #000; overflow-x: scroll; }\n.long-content { white-space: nowrap; }"
        },
        description: "Specifies whether to clip the content, add a scroll bar, or display overflow content when it overflows at the left and right edges.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "box-model"
      },
      {
        id: "overflow-y",
        name: "overflow-y",
        syntax: "overflow-y: visible|hidden|scroll|auto|initial|inherit",
        example: {
          html: "<div class=\"overflow-y-demo\">\n  <p>This is a tall content that will overflow vertically and demonstrate the overflow-y property.</p>\n  <p>More content to make it overflow.</p>\n  <p>Even more content.</p>\n</div>",
          css: ".overflow-y-demo { height: 100px; width: 200px; border: 1px solid #000; overflow-y: scroll; }"
        },
        description: "Specifies whether to clip the content, add a scroll bar, or display overflow content when it overflows at the top and bottom edges.",
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
        id: "@font-face",
        name: "@font-face",
        syntax: "@font-face { font-family: name; src: url('filename.woff2') format('woff2'); }",
        example: {
          html: "<h1>Custom Font Heading</h1><p>Regular text with custom font</p>",
          css: "@font-face {\n  font-family: 'CustomFont';\n  src: url('custom-font.woff2') format('woff2');\n}\n\nh1, p {\n  font-family: 'CustomFont', sans-serif;\n}"
        },
        description: "Specifies a custom font to be used for text display, allowing web developers to use fonts that aren't installed on the user's computer.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
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
      },
      {
        id: "direction",
        name: "direction",
        syntax: "direction: ltr|rtl|initial|inherit",
        example: {
          html: "<div class=\"rtl-text\">This text will flow from right to left.</div>",
          css: ".rtl-text { direction: rtl; }"
        },
        description: "Specifies the text direction/writing direction within a block-level element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "font",
        name: "font",
        syntax: "font: font-style font-variant font-weight font-size/line-height font-family|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit",
        example: {
          html: "<p class=\"font-example\">This text has multiple font properties set at once.</p>",
          css: ".font-example { font: italic bold 16px/1.5 Arial, sans-serif; }"
        },
        description: "A shorthand property for setting all the font properties in one declaration.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "font-size-adjust",
        name: "font-size-adjust",
        syntax: "font-size-adjust: none|number|initial|inherit",
        example: {
          html: "<p class=\"adjusted\">This text has an adjusted font size to maintain readability.</p>",
          css: ".adjusted { font-family: Arial, sans-serif; font-size-adjust: 0.5; }"
        },
        description: "Preserves the readability of text when font fallback occurs by adjusting the font-size based on the height of lowercase letters.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "font-stretch",
        name: "font-stretch",
        syntax: "font-stretch: ultra-condensed|extra-condensed|condensed|semi-condensed|normal|semi-expanded|expanded|extra-expanded|ultra-expanded|initial|inherit",
        example: {
          html: "<p class=\"normal-text\">Normal text</p>\n<p class=\"expanded-text\">Expanded text</p>\n<p class=\"condensed-text\">Condensed text</p>",
          css: ".normal-text { font-stretch: normal; }\n.expanded-text { font-stretch: expanded; }\n.condensed-text { font-stretch: condensed; }"
        },
        description: "Selects a normal, condensed, or expanded face from a font family.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "hanging-punctuation",
        name: "hanging-punctuation",
        syntax: "hanging-punctuation: none|first|last|force-end|allow-end|initial|inherit",
        example: {
          html: "<p class=\"hanging-example\">\"This paragraph has hanging punctuation, which means the quotation mark hangs outside the text block.\"</p>",
          css: ".hanging-example { width: 300px; padding: 10px; background: #f0f0f0; hanging-punctuation: first; }"
        },
        description: "Specifies whether a punctuation mark may be placed outside the line box at the start or end of a full line of text.",
        browsers: ["Safari"],
        category: "typography"
      },
      {
        id: "hyphens",
        name: "hyphens",
        syntax: "hyphens: none|manual|auto|initial|inherit",
        example: {
          html: "<p class=\"hyphenated\">This is a demonstration of hyphenation in a long paragraph with a very supercalifragilisticexpialidocious word that might need to be hyphenated when it reaches the end of a line.</p>",
          css: ".hyphenated { width: 200px; border: 1px solid #ccc; padding: 10px; hyphens: auto; text-align: justify; }"
        },
        description: "Controls whether hyphenation is used when text wraps across multiple lines.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "list-style",
        name: "list-style",
        syntax: "list-style: list-style-type list-style-position list-style-image|initial|inherit",
        example: {
          html: "<ul class=\"custom-list\">\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ul>",
          css: ".custom-list { list-style: square inside; }"
        },
        description: "A shorthand property for setting list-style-type, list-style-position, and list-style-image.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "list-style-image",
        name: "list-style-image",
        syntax: "list-style-image: none|url()|initial|inherit",
        example: {
          html: "<ul class=\"image-bullets\">\n  <li>Item with custom bullet</li>\n  <li>Another item with custom bullet</li>\n</ul>",
          css: ".image-bullets { list-style-image: url('https://picsum.photos/id/237/20/20'); }"
        },
        description: "Specifies an image as the list item marker.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "list-style-position",
        name: "list-style-position",
        syntax: "list-style-position: inside|outside|initial|inherit",
        example: {
          html: "<ul class=\"outside-list\">\n  <li>This list has items with markers outside the content flow</li>\n</ul>\n<ul class=\"inside-list\">\n  <li>This list has items with markers inside the content flow</li>\n</ul>",
          css: ".outside-list { list-style-position: outside; background: #eee; padding: 10px 40px; }\n.inside-list { list-style-position: inside; background: #ddd; padding: 10px; }"
        },
        description: "Specifies the position of the list-item markers (bullet points).",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "list-style-type",
        name: "list-style-type",
        syntax: "list-style-type: disc|circle|square|decimal|lower-roman|upper-roman|lower-alpha|upper-alpha|none|initial|inherit",
        example: {
          html: "<ul class=\"disc-list\">\n  <li>Disc bullet (default)</li>\n</ul>\n<ul class=\"circle-list\">\n  <li>Circle bullet</li>\n</ul>\n<ul class=\"square-list\">\n  <li>Square bullet</li>\n</ul>\n<ol class=\"roman-list\">\n  <li>Upper Roman numeral</li>\n</ol>",
          css: ".disc-list { list-style-type: disc; }\n.circle-list { list-style-type: circle; }\n.square-list { list-style-type: square; }\n.roman-list { list-style-type: upper-roman; }"
        },
        description: "Specifies the type of list-item marker.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "overflow-wrap",
        name: "overflow-wrap",
        syntax: "overflow-wrap: normal|break-word|anywhere|initial|inherit",
        example: {
          html: "<div class=\"normal-wrap\">This contains a verylongwordthatwillnotbreakinnormalcircumstances.</div>\n<div class=\"break-word\">This contains a verylongwordthatwillbreakwhenoverflowing.</div>",
          css: ".normal-wrap, .break-word { width: 150px; margin: 10px; padding: 10px; border: 1px solid #ccc; }\n.normal-wrap { overflow-wrap: normal; }\n.break-word { overflow-wrap: break-word; }"
        },
        description: "Specifies whether the browser should insert line breaks within unbreakable words to prevent text from overflowing its container.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "quotes",
        name: "quotes",
        syntax: "quotes: none|[string string]+|initial|inherit",
        example: {
          html: "<div class=\"custom-quotes\">\n  <q>This text uses custom quotation marks</q>\n</div>",
          css: ".custom-quotes { quotes: '«' '»' '‹' '›'; }\n.custom-quotes q { display: block; }"
        },
        description: "Sets the type of quotation marks for embedded quotations.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "tab-size",
        name: "tab-size",
        syntax: "tab-size: number|length|initial|inherit",
        example: {
          html: "<pre class=\"custom-tabs\">This\tis\ta\ttext\twith\ttabs</pre>",
          css: ".custom-tabs { tab-size: 8; background: #f5f5f5; padding: 10px; }"
        },
        description: "Specifies the width of a tab character.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "text-align-last",
        name: "text-align-last",
        syntax: "text-align-last: auto|left|right|center|justify|start|end|initial|inherit",
        example: {
          html: "<p class=\"justify-last\">This paragraph has justified text with the last line aligned to the right. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
          css: ".justify-last { text-align: justify; text-align-last: right; width: 300px; }"
        },
        description: "Specifies how the last line of a block or a line right before a forced line break is aligned.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "text-decoration-color",
        name: "text-decoration-color",
        syntax: "text-decoration-color: color|initial|inherit",
        example: {
          html: "<p class=\"colored-underline\">This text has a custom underline color</p>",
          css: ".colored-underline { text-decoration-line: underline; text-decoration-color: red; }"
        },
        description: "Specifies the color of the text-decoration (underlines, overlines, etc.).",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "text-decoration-line",
        name: "text-decoration-line",
        syntax: "text-decoration-line: none|underline|overline|line-through|initial|inherit",
        example: {
          html: "<p class=\"no-decoration\">No decoration</p>\n<p class=\"underline\">Underlined text</p>\n<p class=\"overline\">Overlined text</p>\n<p class=\"line-through\">Line-through text</p>\n<p class=\"combined\">Combined decorations</p>",
          css: ".no-decoration { text-decoration-line: none; }\n.underline { text-decoration-line: underline; }\n.overline { text-decoration-line: overline; }\n.line-through { text-decoration-line: line-through; }\n.combined { text-decoration-line: underline overline; }"
        },
        description: "Specifies the type of line in a text-decoration (underline, overline, etc.).",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "text-decoration-style",
        name: "text-decoration-style",
        syntax: "text-decoration-style: solid|double|dotted|dashed|wavy|initial|inherit",
        example: {
          html: "<p class=\"solid\">Solid underline</p>\n<p class=\"dotted\">Dotted underline</p>\n<p class=\"dashed\">Dashed underline</p>\n<p class=\"wavy\">Wavy underline</p>\n<p class=\"double\">Double underline</p>",
          css: "p { text-decoration-line: underline; }\n.solid { text-decoration-style: solid; }\n.dotted { text-decoration-style: dotted; }\n.dashed { text-decoration-style: dashed; }\n.wavy { text-decoration-style: wavy; }\n.double { text-decoration-style: double; }"
        },
        description: "Specifies the style of the line in a text decoration (solid, wavy, etc.).",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "text-indent",
        name: "text-indent",
        syntax: "text-indent: length|%|initial|inherit",
        example: {
          html: "<p class=\"indented\">This paragraph has its first line indented, which is common in print typography to mark the beginning of a new paragraph.</p>",
          css: ".indented { text-indent: 30px; width: 300px; }"
        },
        description: "Specifies the indentation of the first line in a text block.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "text-justify",
        name: "text-justify",
        syntax: "text-justify: auto|inter-word|inter-character|none|initial|inherit",
        example: {
          html: "<p class=\"justify-word\">This paragraph has text justified with focus on spacing between words. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n<p class=\"justify-char\">This paragraph has text justified with focus on spacing between characters. Lorem ipsum dolor sit amet, consectetur.</p>",
          css: ".justify-word, .justify-char { width: 300px; text-align: justify; }\n.justify-word { text-justify: inter-word; }\n.justify-char { text-justify: inter-character; }"
        },
        description: "Specifies the justification method to use when text-align is set to 'justify'.",
        browsers: ["Edge", "Firefox"],
        category: "typography"
      },
      {
        id: "text-overflow",
        name: "text-overflow",
        syntax: "text-overflow: clip|ellipsis|string|initial|inherit",
        example: {
          html: "<div class=\"overflow-ellipsis\">This text is too long to fit in the box and will be truncated with an ellipsis.</div>\n<div class=\"overflow-clip\">This text is too long to fit in the box and will be clipped without any special indicator.</div>",
          css: ".overflow-ellipsis, .overflow-clip { width: 200px; white-space: nowrap; overflow: hidden; border: 1px solid #ccc; padding: 5px; margin: 10px 0; }\n.overflow-ellipsis { text-overflow: ellipsis; }\n.overflow-clip { text-overflow: clip; }"
        },
        description: "Specifies what should happen when text overflows the containing element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "text-shadow",
        name: "text-shadow",
        syntax: "text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit",
        example: {
          html: "<h2 class=\"shadow-demo\">Text with shadow</h2>\n<p class=\"multiple-shadows\">Multiple text shadows</p>",
          css: ".shadow-demo { text-shadow: 2px 2px 4px #666; }\n.multiple-shadows { text-shadow: 1px 1px 2px red, 0 0 5px blue, -1px -1px 0 green; font-size: 20px; }"
        },
        description: "Adds shadow to text.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "transition-delay",
        name: "transition-delay",
        syntax: "transition-delay: time|initial|inherit",
        example: {
          html: "<div class=\"instant\">No delay</div>\n<div class=\"delayed\">1 second delay</div>",
          css: ".instant, .delayed { width: 100px; height: 50px; background: purple; color: white; margin: 10px; transition-property: width; transition-duration: 1s; }\n.instant { transition-delay: 0s; }\n.delayed { transition-delay: 1s; }\n.instant:hover, .delayed:hover { width: 300px; }"
        },
        description: "Specifies when the transition effect will start.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transitions"
      },
      {
        id: "unicode-bidi",
        name: "unicode-bidi",
        syntax: "unicode-bidi: normal|embed|isolate|bidi-override|isolate-override|plaintext|initial|inherit",
        example: {
          html: "<div class=\"bidi-normal\">This is English text followed by Arabic: مرحبا بالعالم</div>\n<div class=\"bidi-override\">This text will display characters in reverse order</div>",
          css: ".bidi-normal { unicode-bidi: normal; direction: ltr; }\n.bidi-override { unicode-bidi: bidi-override; direction: rtl; }"
        },
        description: "Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "vertical-align",
        name: "vertical-align",
        syntax: "vertical-align: baseline|length|%|sub|super|top|text-top|middle|bottom|text-bottom|initial|inherit",
        example: {
          html: "<div class=\"align-examples\">\n  <span class=\"baseline\">baseline</span>\n  <span class=\"sub\">sub</span>\n  <span class=\"super\">super</span>\n  <span class=\"top\">top</span>\n  <span class=\"middle\">middle</span>\n  <span class=\"bottom\">bottom</span>\n  <span class=\"text-top\">text-top</span>\n  <span class=\"text-bottom\">text-bottom</span>\n  <span class=\"px-value\">+10px</span>\n</div>",
          css: ".align-examples { line-height: 3; background: #f0f0f0; padding: 10px; }\n.align-examples span { display: inline-block; background: #ddd; margin: 0 5px; }\n.baseline { vertical-align: baseline; }\n.sub { vertical-align: sub; }\n.super { vertical-align: super; }\n.top { vertical-align: top; }\n.middle { vertical-align: middle; }\n.bottom { vertical-align: bottom; }\n.text-top { vertical-align: text-top; }\n.text-bottom { vertical-align: text-bottom; }\n.px-value { vertical-align: 10px; }"
        },
        description: "Sets the vertical alignment of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "white-space",
        name: "white-space",
        syntax: "white-space: normal|nowrap|pre|pre-line|pre-wrap|initial|inherit",
        example: {
          html: "<div class=\"normal\">White-space normal: This    text   has    extra   spaces   and\n   line breaks.</div>\n<div class=\"nowrap\">White-space nowrap: This text will not wrap to a new line until a break tag is used.</div>\n<div class=\"pre\">White-space pre: This    text   preserves   spaces   and\n   line breaks.</div>\n<div class=\"pre-line\">White-space pre-line: This    text   collapses   spaces   but\n   preserves line breaks.</div>\n<div class=\"pre-wrap\">White-space pre-wrap: This    text   preserves   spaces   and\n   wraps to the next line when needed.</div>",
          css: "div { width: 200px; border: 1px solid #ddd; margin: 10px; padding: 5px; }\n.normal { white-space: normal; }\n.nowrap { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.pre { white-space: pre; }\n.pre-line { white-space: pre-line; }\n.pre-wrap { white-space: pre-wrap; }"
        },
        description: "Specifies how white-space inside an element is handled.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "word-break",
        name: "word-break",
        syntax: "word-break: normal|break-all|keep-all|break-word|initial|inherit",
        example: {
          html: "<div class=\"normal-break\">Word break normal: pneumonoultramicroscopicsilicovolcanoconiosis</div>\n<div class=\"break-all\">Word break break-all: pneumonoultramicroscopicsilicovolcanoconiosis</div>\n<div class=\"keep-all\">Word break keep-all: 这是一些中文文本，测试保持单词断行。</div>",
          css: "div { width: 150px; margin: 10px; padding: 10px; border: 1px solid #ccc; }\n.normal-break { word-break: normal; }\n.break-all { word-break: break-all; }\n.keep-all { word-break: keep-all; }"
        },
        description: "Specifies how words should break when reaching the end of a line.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "typography"
      },
      {
        id: "word-wrap",
        name: "word-wrap",
        syntax: "word-wrap: normal|break-word|initial|inherit",
        example: {
          html: "<div class=\"normal-wrap\">Word wrap normal: pneumonoultramicroscopicsilicovolcanoconiosis</div>\n<div class=\"break-word\">Word wrap break-word: pneumonoultramicroscopicsilicovolcanoconiosis</div>",
          css: "div { width: 150px; margin: 10px; padding: 10px; border: 1px solid #ccc; }\n.normal-wrap { word-wrap: normal; }\n.break-word { word-wrap: break-word; }"
        },
        description: "Allows long words to be able to be broken and wrap onto the next line. This is an alias of the overflow-wrap property.",
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
          css: ".box { background: #e0e0ff url('https://picsum.photos/id/237/200/200') no-repeat center center; padding: 30px; height: 100px; }"
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
          css: ".box { background-image: url('https://picsum.photos/id/237/200/200'); background-repeat: repeat-x; padding: 20px; height: 100px; }"
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
          css: ".box { background-image: url('https://picsum.photos/id/237/200/200'); background-repeat: no-repeat; background-position: center; height: 100px; border: 1px solid #ccc; }"
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
          css: ".box { background-image: url('https://picsum.photos/id/237/200/200'); background-repeat: no-repeat; background-size: cover; height: 100px; padding: 20px; }"
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
          css: ".box { background-image: url('https://picsum.photos/id/237/200/200'); background-repeat: repeat; background-attachment: fixed; padding: 20px; height: 200px; overflow: auto; }"
        },
        description: "Sets whether a background image scrolls with the rest of the page, or is fixed.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "background"
      },
      {
        id: "background-blend-mode",
        name: "background-blend-mode",
        syntax: "background-blend-mode: normal|multiply|screen|overlay|darken|lighten|color-dodge|saturation|color|luminosity",
        example: {
          html: "<div class=\"box normal\">Normal</div><div class=\"box multiply\">Multiply</div><div class=\"box overlay\">Overlay</div>",
          css: ".box {\n  width: 200px;\n  height: 100px;\n  margin: 10px;\n  color: white;\n  text-align: center;\n  padding-top: 40px;\n  font-weight: bold;\n  background-image: url('https://picsum.photos/id/237/200/300'), linear-gradient(blue, purple);\n}\n\n.normal {\n  background-blend-mode: normal; /* Default blending */\n}\n\n.multiply {\n  background-blend-mode: multiply; /* Multiplies colors */\n}\n\n.overlay {\n  background-blend-mode: overlay; /* Overlays colors */\n}"
        },
        description: "Defines how an element's background images should blend with each other and the background color.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "background"
      },
      {
        id: "background-clip",
        name: "background-clip",
        syntax: "background-clip: border-box|padding-box|content-box|text|initial|inherit",
        example: {
          html: "<div class=\"box border-box\">border-box</div><div class=\"box padding-box\">padding-box</div><div class=\"box content-box\">content-box</div><div class=\"box text\">text</div>",
          css: ".box {\n  width: 200px;\n  height: 100px;\n  margin: 10px;\n  border: 10px dashed black;\n  padding: 20px;\n  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.border-box {\n  background-clip: border-box; /* Default - extends to outer edge of border */\n}\n\n.padding-box {\n  background-clip: padding-box; /* Clips to inside edge of border */\n}\n\n.content-box {\n  background-clip: content-box; /* Clips to inside edge of padding */\n}\n\n.text {\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent; /* Makes text show the background */\n}"
        },
        description: "Specifies the painting area of the background, determining if it extends beneath the border, padding, or just the content.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "background"
      },
      {
        id: "background-origin",
        name: "background-origin",
        syntax: "background-origin: border-box|padding-box|content-box|initial|inherit",
        example: {
          html: "<div class=\"box border-box\">border-box</div><div class=\"box padding-box\">padding-box</div><div class=\"box content-box\">content-box</div>",
          css: ".box {\n  width: 200px;\n  height: 100px;\n  margin: 10px;\n  border: 10px dashed black;\n  padding: 20px;\n  background-image: url('https://picsum.photos/id/237/200/300');\n  background-repeat: no-repeat;\n  font-size: 18px;\n  text-align: center;\n}\n\n.border-box {\n  background-origin: border-box; /* Background starts from outer edge of border */\n}\n\n.padding-box {\n  background-origin: padding-box; /* Default - starts from inner edge of border */\n}\n\n.content-box {\n  background-origin: content-box; /* Starts from inner edge of padding */\n}"
        },
        description: "Specifies where the background image is positioned, relative to the border, padding, or content box.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "background"
      },
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
      },
      {
        id: "border-bottom",
        name: "border-bottom",
        syntax: "border-bottom: border-width border-style border-color|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with bottom border</div>",
          css: ".box {\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-bottom: 3px solid #3498db; /* Shorthand for width, style, color */\n}"
        },
        description: "Shorthand property that sets the border-bottom-width, border-bottom-style, and border-bottom-color in one declaration.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-bottom-color",
        name: "border-bottom-color",
        syntax: "border-bottom-color: color|transparent|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with colored bottom border</div>",
          css: ".box {\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-bottom-width: 5px;\n  border-bottom-style: solid;\n  border-bottom-color: #e74c3c; /* Sets only the bottom border color */\n}"
        },
        description: "Sets the color of the bottom border of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-bottom-left-radius",
        name: "border-bottom-left-radius",
        syntax: "border-bottom-left-radius: length|% [length|%]|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with rounded bottom-left corner</div>",
          css: ".box {\n  width: 200px;\n  height: 100px;\n  background-color: #3498db;\n  border-bottom-left-radius: 30px; /* Rounds only the bottom-left corner */\n  color: white;\n  padding: 20px;\n}"
        },
        description: "Defines the radius of the bottom-left corner of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-bottom-right-radius",
        name: "border-bottom-right-radius",
        syntax: "border-bottom-right-radius: length|% [length|%]|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with rounded bottom-right corner</div>",
          css: ".box {\n  width: 200px;\n  height: 100px;\n  background-color: #3498db;\n  border-bottom-right-radius: 30px; /* Rounds only the bottom-right corner */\n  color: white;\n  padding: 20px;\n}"
        },
        description: "Defines the radius of the bottom-right corner of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-bottom-style",
        name: "border-bottom-style",
        syntax: "border-bottom-style: none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit",
        example: {
          html: "<div class=\"solid\">Solid</div><div class=\"dashed\">Dashed</div><div class=\"dotted\">Dotted</div><div class=\"double\">Double</div>",
          css: "div {\n  width: 200px;\n  height: 50px;\n  margin: 10px;\n  padding: 10px;\n  background-color: #f5f5f5;\n  border-bottom-width: 5px;\n}\n\n.solid {\n  border-bottom-style: solid; /* Solid line */\n}\n\n.dashed {\n  border-bottom-style: dashed; /* Dashed line */\n}\n\n.dotted {\n  border-bottom-style: dotted; /* Dotted line */\n}\n\n.double {\n  border-bottom-style: double; /* Double line */\n}"
        },
        description: "Sets the style of the bottom border of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-bottom-width",
        name: "border-bottom-width",
        syntax: "border-bottom-width: medium|thin|thick|length|initial|inherit",
        example: {
          html: "<div class=\"thin\">Thin</div><div class=\"medium\">Medium</div><div class=\"thick\">Thick</div><div class=\"custom\">Custom (10px)</div>",
          css: "div {\n  width: 200px;\n  height: 50px;\n  margin: 10px;\n  padding: 10px;\n  background-color: #f5f5f5;\n  border-bottom-style: solid;\n}\n\n.thin {\n  border-bottom-width: thin; /* Browser-defined thin */\n}\n\n.medium {\n  border-bottom-width: medium; /* Browser-defined medium (default) */\n}\n\n.thick {\n  border-bottom-width: thick; /* Browser-defined thick */\n}\n\n.custom {\n  border-bottom-width: 10px; /* Custom width */\n}"
        },
        description: "Sets the width of the bottom border of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-image",
        name: "border-image",
        syntax: "border-image: source slice width outset repeat|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with border image</div>",
          css: ".box {\n  width: 200px;\n  height: 100px;\n  border-width: 20px;\n  border-style: solid;\n  /* Shorthand for all border-image properties */\n  border-image: url('https://picsum.photos/id/237/200/300') 30 / 20px round;\n  padding: 20px;\n  background-color: #f5f5f5;\n  text-align: center;\n}"
        },
        description: "Shorthand property that specifies how an image should be used as the border of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-image-outset",
        name: "border-image-outset",
        syntax: "border-image-outset: length|number|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with border image outset</div>",
          css: ".box {\n  width: 200px;\n  height: 100px;\n  border-width: 20px;\n  border-style: solid;\n  border-image-source: url('https://picsum.photos/id/237/200/300');\n  border-image-slice: 30;\n  border-image-repeat: round;\n  border-image-outset: 10px; /* Border image extends 10px beyond border box */\n  padding: 20px;\n  background-color: #f5f5f5;\n  text-align: center;\n}"
        },
        description: "Specifies how far the border image extends beyond the border box.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-image-repeat",
        name: "border-image-repeat",
        syntax: "border-image-repeat: stretch|repeat|round|space|initial|inherit",
        example: {
          html: "<div class=\"stretch\">Stretch</div><div class=\"repeat\">Repeat</div><div class=\"round\">Round</div>",
          css: "div {\n  width: 200px;\n  height: 100px;\n  margin: 20px;\n  border-width: 20px;\n  border-style: solid;\n  border-image-source: url('https://picsum.photos/id/237/200/300');\n  border-image-slice: 30;\n  padding: 10px;\n  text-align: center;\n}\n\n.stretch {\n  border-image-repeat: stretch; /* Default - stretches the image */\n}\n\n.repeat {\n  border-image-repeat: repeat; /* Tiles the image */\n}\n\n.round {\n  border-image-repeat: round; /* Tiles the image, scaling to fit whole number */\n}"
        },
        description: "Specifies how the border image should be scaled, repeated, or rounded to fit the size of the border.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-image-slice",
        name: "border-image-slice",
        syntax: "border-image-slice: number|%|fill|initial|inherit",
        example: {
          html: "<div class=\"slice-low\">Slice: 10</div><div class=\"slice-high\">Slice: 30</div><div class=\"slice-fill\">With Fill</div>",
          css: "div {\n  width: 200px;\n  height: 100px;\n  margin: 20px;\n  border-width: 20px;\n  border-style: solid;\n  border-image-source: url('https://picsum.photos/id/237/200/300');\n  border-image-repeat: round;\n  padding: 10px;\n  text-align: center;\n}\n\n.slice-low {\n  border-image-slice: 10; /* Divides image into 9 regions with small corners */\n}\n\n.slice-high {\n  border-image-slice: 30; /* Divides image into 9 regions with large corners */\n}\n\n.slice-fill {\n  border-image-slice: 30 fill; /* Also fills the middle with the center part of image */\n}"
        },
        description: "Specifies how to slice the border image, dividing it into nine regions (four corners, four edges, and middle).",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-image-source",
        name: "border-image-source",
        syntax: "border-image-source: none|url()|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with image border</div>",
          css: ".box {\n  width: 200px;\n  height: 100px;\n  border-width: 20px;\n  border-style: solid;\n  border-image-source: url('https://picsum.photos/id/237/200/300'); /* Specifies image for border */\n  border-image-slice: 30;\n  border-image-repeat: round;\n  padding: 20px;\n  background-color: #f5f5f5;\n  text-align: center;\n}"
        },
        description: "Specifies the source image to be used for the border instead of the standard border style.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-image-width",
        name: "border-image-width",
        syntax: "border-image-width: number|%|auto|initial|inherit",
        example: {
          html: "<div class=\"auto\">Auto</div><div class=\"custom\">Custom (35px)</div><div class=\"percentage\">50%</div>",
          css: "div {\n  width: 200px;\n  height: 100px;\n  margin: 20px;\n  border-width: 20px;\n  border-style: solid;\n  border-image-source: url('https://picsum.photos/id/237/200/300');\n  border-image-slice: 30;\n  border-image-repeat: round;\n  padding: 10px;\n  text-align: center;\n}\n\n.auto {\n  border-image-width: auto; /* Use border-width values */\n}\n\n.custom {\n  border-image-width: 35px; /* Specific width */\n}\n\n.percentage {\n  border-image-width: 50%; /* Percentage of border box */\n}"
        },
        description: "Specifies the width of the border image, which may differ from the width of the element's border.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-left",
        name: "border-left",
        syntax: "border-left: border-width border-style border-color|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with left border</div>",
          css: ".box {\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-left: 5px solid #3498db; /* Shorthand for width, style, color */\n}"
        },
        description: "Shorthand property that sets the border-left-width, border-left-style, and border-left-color in one declaration.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-left-color",
        name: "border-left-color",
        syntax: "border-left-color: color|transparent|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with colored left border</div>",
          css: ".box {\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-left-width: 5px;\n  border-left-style: solid;\n  border-left-color: #e74c3c; /* Sets only the left border color */\n}"
        },
        description: "Sets the color of the left border of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-left-style",
        name: "border-left-style",
        syntax: "border-left-style: none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit",
        example: {
          html: "<div class=\"solid\">Solid</div><div class=\"dashed\">Dashed</div><div class=\"dotted\">Dotted</div><div class=\"double\">Double</div>",
          css: "div {\n  width: 200px;\n  height: 50px;\n  margin: 10px;\n  padding: 10px;\n  background-color: #f5f5f5;\n  border-left-width: 5px;\n}\n\n.solid {\n  border-left-style: solid; /* Solid line */\n}\n\n.dashed {\n  border-left-style: dashed; /* Dashed line */\n}\n\n.dotted {\n  border-left-style: dotted; /* Dotted line */\n}\n\n.double {\n  border-left-style: double; /* Double line */\n}"
        },
        description: "Sets the style of the left border of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-left-width",
        name: "border-left-width",
        syntax: "border-left-width: medium|thin|thick|length|initial|inherit",
        example: {
          html: "<div class=\"thin\">Thin</div><div class=\"medium\">Medium</div><div class=\"thick\">Thick</div><div class=\"custom\">Custom (10px)</div>",
          css: "div {\n  width: 200px;\n  height: 50px;\n  margin: 10px;\n  padding: 10px;\n  background-color: #f5f5f5;\n  border-left-style: solid;\n}\n\n.thin {\n  border-left-width: thin; /* Browser-defined thin */\n}\n\n.medium {\n  border-left-width: medium; /* Browser-defined medium (default) */\n}\n\n.thick {\n  border-left-width: thick; /* Browser-defined thick */\n}\n\n.custom {\n  border-left-width: 10px; /* Custom width */\n}"
        },
        description: "Sets the width of the left border of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-right",
        name: "border-right",
        syntax: "border-right: border-width border-style border-color|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with right border</div>",
          css: ".box {\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-right: 5px solid #3498db; /* Shorthand for width, style, color */\n}"
        },
        description: "Shorthand property that sets the border-right-width, border-right-style, and border-right-color in one declaration.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-right-color",
        name: "border-right-color",
        syntax: "border-right-color: color|transparent|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with colored right border</div>",
          css: ".box {\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-right-width: 5px;\n  border-right-style: solid;\n  border-right-color: #e74c3c; /* Sets only the right border color */\n}"
        },
        description: "Sets the color of the right border of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-right-style",
        name: "border-right-style",
        syntax: "border-right-style: none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit",
        example: {
          html: "<div class=\"solid\">Solid</div><div class=\"dashed\">Dashed</div><div class=\"dotted\">Dotted</div><div class=\"double\">Double</div>",
          css: "div {\n  width: 200px;\n  height: 50px;\n  margin: 10px;\n  padding: 10px;\n  background-color: #f5f5f5;\n  border-right-width: 5px;\n}\n\n.solid {\n  border-right-style: solid; /* Solid line */\n}\n\n.dashed {\n  border-right-style: dashed; /* Dashed line */\n}\n\n.dotted {\n  border-right-style: dotted; /* Dotted line */\n}\n\n.double {\n  border-right-style: double; /* Double line */\n}"
        },
        description: "Sets the style of the right border of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-right-width",
        name: "border-right-width",
        syntax: "border-right-width: medium|thin|thick|length|initial|inherit",
        example: {
          html: "<div class=\"thin\">Thin</div><div class=\"medium\">Medium</div><div class=\"thick\">Thick</div><div class=\"custom\">Custom (10px)</div>",
          css: "div {\n  width: 200px;\n  height: 50px;\n  margin: 10px;\n  padding: 10px;\n  background-color: #f5f5f5;\n  border-right-style: solid;\n}\n\n.thin {\n  border-right-width: thin; /* Browser-defined thin */\n}\n\n.medium {\n  border-right-width: medium; /* Browser-defined medium (default) */\n}\n\n.thick {\n  border-right-width: thick; /* Browser-defined thick */\n}\n\n.custom {\n  border-right-width: 10px; /* Custom width */\n}"
        },
        description: "Sets the width of the right border of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-top",
        name: "border-top",
        syntax: "border-top: border-width border-style border-color|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with top border</div>",
          css: ".box {\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-top: 5px solid #3498db; /* Shorthand for width, style, color */\n}"
        },
        description: "Shorthand property that sets the border-top-width, border-top-style, and border-top-color in one declaration.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-top-color",
        name: "border-top-color",
        syntax: "border-top-color: color|transparent|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with colored top border</div>",
          css: ".box {\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-top-width: 5px;\n  border-top-style: solid;\n  border-top-color: #e74c3c; /* Sets only the top border color */\n}"
        },
        description: "Sets the color of the top border of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-top-left-radius",
        name: "border-top-left-radius",
        syntax: "border-top-left-radius: length|% [length|%]|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with rounded top-left corner</div>",
          css: ".box {\n  width: 200px;\n  height: 100px;\n  background-color: #3498db;\n  border-top-left-radius: 30px; /* Rounds only the top-left corner */\n  color: white;\n  padding: 20px;\n}"
        },
        description: "Defines the radius of the top-left corner of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-top-right-radius",
        name: "border-top-right-radius",
        syntax: "border-top-right-radius: length|% [length|%]|initial|inherit",
        example: {
          html: "<div class=\"box\">Element with rounded top-right corner</div>",
          css: ".box {\n  width: 200px;\n  height: 100px;\n  background-color: #3498db;\n  border-top-right-radius: 30px; /* Rounds only the top-right corner */\n  color: white;\n  padding: 20px;\n}"
        },
        description: "Defines the radius of the top-right corner of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-top-style",
        name: "border-top-style",
        syntax: "border-top-style: none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit",
        example: {
          html: "<div class=\"solid\">Solid</div><div class=\"dashed\">Dashed</div><div class=\"dotted\">Dotted</div><div class=\"double\">Double</div>",
          css: "div {\n  width: 200px;\n  height: 50px;\n  margin: 10px;\n  padding: 10px;\n  background-color: #f5f5f5;\n  border-top-width: 5px;\n}\n\n.solid {\n  border-top-style: solid; /* Solid line */\n}\n\n.dashed {\n  border-top-style: dashed; /* Dashed line */\n}\n\n.dotted {\n  border-top-style: dotted; /* Dotted line */\n}\n\n.double {\n  border-top-style: double; /* Double line */\n}"
        },
        description: "Sets the style of the top border of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "border-top-width",
        name: "border-top-width",
        syntax: "border-top-width: medium|thin|thick|length|initial|inherit",
        example: {
          html: "<div class=\"thin\">Thin</div><div class=\"medium\">Medium</div><div class=\"thick\">Thick</div><div class=\"custom\">Custom (10px)</div>",
          css: "div {\n  width: 200px;\n  height: 50px;\n  margin: 10px;\n  padding: 10px;\n  background-color: #f5f5f5;\n  border-top-style: solid;\n}\n\n.thin {\n  border-top-width: thin; /* Browser-defined thin */\n}\n\n.medium {\n  border-top-width: medium; /* Browser-defined medium (default) */\n}\n\n.thick {\n  border-top-width: thick; /* Browser-defined thick */\n}\n\n.custom {\n  border-top-width: 10px; /* Custom width */\n}"
        },
        description: "Sets the width of the top border of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "outline",
        name: "outline",
        syntax: "outline: outline-width outline-style outline-color|initial|inherit",
        example: {
          html: "<div class=\"outlined\">Element with a dotted red outline</div>",
          css: ".outlined { padding: 10px; margin: 20px; outline: 2px dotted red; }"
        },
        description: "A shorthand property for setting outline-width, outline-style, and outline-color in one declaration. An outline is a line that is drawn around elements, outside the borders, to make the element stand out.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "outline-color",
        name: "outline-color",
        syntax: "outline-color: color|invert|initial|inherit",
        example: {
          html: "<input class=\"custom-outline\" type=\"text\" placeholder=\"Click me to see the outline color\">",
          css: ".custom-outline { padding: 5px; outline-width: 2px; outline-style: solid; outline-color: #ff6b6b; }"
        },
        description: "Sets the color of an outline.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "outline-offset",
        name: "outline-offset",
        syntax: "outline-offset: length|initial|inherit",
        example: {
          html: "<div class=\"offset-outline\">Element with offset outline</div>",
          css: ".offset-outline { padding: 10px; margin: 20px; outline: 2px dashed blue; outline-offset: 5px; background: #f0f0f0; }"
        },
        description: "Adds space between an outline and the edge or border of an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "outline-style",
        name: "outline-style",
        syntax: "outline-style: none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit",
        example: {
          html: "<div class=\"solid-outline\">Solid outline</div>\n<div class=\"dashed-outline\">Dashed outline</div>\n<div class=\"dotted-outline\">Dotted outline</div>",
          css: ".solid-outline, .dashed-outline, .dotted-outline { margin: 10px; padding: 10px; outline-width: 2px; outline-color: blue; }\n.solid-outline { outline-style: solid; }\n.dashed-outline { outline-style: dashed; }\n.dotted-outline { outline-style: dotted; }"
        },
        description: "Sets the style of an outline.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      },
      {
        id: "outline-width",
        name: "outline-width",
        syntax: "outline-width: medium|thin|thick|length|initial|inherit",
        example: {
          html: "<div class=\"thin-outline\">Thin outline</div>\n<div class=\"medium-outline\">Medium outline</div>\n<div class=\"thick-outline\">Thick outline</div>",
          css: ".thin-outline, .medium-outline, .thick-outline { margin: 10px; padding: 10px; outline-style: solid; outline-color: green; }\n.thin-outline { outline-width: thin; }\n.medium-outline { outline-width: medium; }\n.thick-outline { outline-width: thick; }"
        },
        description: "Sets the width of an outline.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "border"
      }
    ]
  },
  {
    id: "tables",
    name: "Tables",
    properties: [
      {
        id: "caption-side",
        name: "caption-side",
        syntax: "caption-side: top|bottom|initial|inherit",
        example: {
          html: "<table class=\"top-caption\"><caption>Top Caption</caption><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table><table class=\"bottom-caption\"><caption>Bottom Caption</caption><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>",
          css: "table {\n  width: 200px;\n  margin: 20px;\n  border-collapse: collapse;\n  border: 2px solid #3498db;\n}\n\ncaption {\n  font-weight: bold;\n  padding: 10px;\n  background-color: #f5f5f5;\n}\n\ntd {\n  padding: 10px;\n  text-align: center;\n  border: 1px solid #3498db;\n}\n\n.top-caption caption {\n  caption-side: top; /* Default - caption appears above table */\n}\n\n.bottom-caption caption {\n  caption-side: bottom; /* Caption appears below table */\n}"
        },
        description: "Specifies the placement of a table caption.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
      },
      {
        id: "column-count",
        name: "column-count",
        syntax: "column-count: number|auto|initial|inherit",
        example: {
          html: "<div class=\"one-column\">Single column text.</div><div class=\"three-columns\">This text will flow across three columns. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula libero eget leo efficitur, vel tempor odio feugiat. Vivamus auctor metus vitae lacus tincidunt, vel convallis odio condimentum.</div>",
          css: "div {\n  width: 300px;\n  margin: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.one-column {\n  column-count: 1; /* Default - single column */\n}\n\n.three-columns {\n  column-count: 3; /* Divides content into three columns */\n}"
        },
        description: "Specifies the number of columns an element should be divided into.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
      },
      {
        id: "column-fill",
        name: "column-fill",
        syntax: "column-fill: balance|auto|initial|inherit",
        example: {
          html: "<div class=\"balanced\">Balanced columns: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula libero eget leo efficitur, vel tempor odio feugiat. Vivamus auctor metus vitae lacus tincidunt.</div><div class=\"auto-fill\">Auto-filled columns: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula libero eget leo efficitur, vel tempor odio feugiat. Vivamus auctor metus vitae lacus tincidunt.</div>",
          css: "div {\n  width: 300px;\n  height: 150px;\n  margin: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  column-count: 3;\n}\n\n.balanced {\n  column-fill: balance; /* Content is balanced across columns */\n}\n\n.auto-fill {\n  column-fill: auto; /* Columns filled sequentially */\n}"
        },
        description: "Specifies how content is filled in columns, whether balanced or filled sequentially.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
      },
      {
        id: "column-gap",
        name: "column-gap",
        syntax: "column-gap: length|normal|initial|inherit",
        example: {
          html: "<div class=\"small-gap\">Small gap between columns. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula libero eget leo efficitur, vel tempor odio feugiat.</div><div class=\"large-gap\">Large gap between columns. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula libero eget leo efficitur, vel tempor odio feugiat.</div>",
          css: "div {\n  width: 350px;\n  margin: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  column-count: 3;\n}\n\n.small-gap {\n  column-gap: 10px; /* Small space between columns */\n}\n\n.large-gap {\n  column-gap: 30px; /* Large space between columns */\n}"
        },
        description: "Specifies the gap between the columns in a tables layout.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
      },
      {
        id: "column-rule",
        name: "column-rule",
        syntax: "column-rule: column-rule-width column-rule-style column-rule-color|initial|inherit",
        example: {
          html: "<div class=\"column-rule-example\">This text demonstrates the column-rule property that adds a line between columns. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula libero eget leo efficitur, vel tempor odio feugiat.</div>",
          css: ".column-rule-example {\n  width: 400px;\n  margin: 20px;\n  padding: 10px;\n  column-count: 3;\n  column-rule: 2px dashed #3498db; /* Shorthand for width, style, color */\n}"
        },
        description: "Shorthand property that sets column-rule-width, column-rule-style, and column-rule-color in one declaration.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
      },
      {
        id: "column-rule-color",
        name: "column-rule-color",
        syntax: "column-rule-color: color|initial|inherit",
        example: {
          html: "<div class=\"column-rule-color-example\">This text shows a column rule with a specific color. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula libero eget leo efficitur, vel tempor odio feugiat.</div>",
          css: ".column-rule-color-example {\n  width: 400px;\n  margin: 20px;\n  padding: 10px;\n  column-count: 3;\n  column-rule-width: 2px;\n  column-rule-style: solid;\n  column-rule-color: #e74c3c; /* Sets the color of the column rule */\n}"
        },
        description: "Specifies the color of the rule between columns.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
      },
      {
        id: "column-rule-style",
        name: "column-rule-style",
        syntax: "column-rule-style: none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit",
        example: {
          html: "<div class=\"solid\">Solid column rule</div><div class=\"dashed\">Dashed column rule</div><div class=\"dotted\">Dotted column rule</div>",
          css: "div {\n  width: 400px;\n  margin: 20px;\n  padding: 10px;\n  column-count: 3;\n  column-rule-width: 2px;\n  column-rule-color: #3498db;\n}\n\n.solid {\n  column-rule-style: solid; /* Solid line between columns */\n}\n\n.dashed {\n  column-rule-style: dashed; /* Dashed line between columns */\n}\n\n.dotted {\n  column-rule-style: dotted; /* Dotted line between columns */\n}"
        },
        description: "Specifies the style of the rule between columns.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
      },
      {
        id: "column-rule-width",
        name: "column-rule-width",
        syntax: "column-rule-width: medium|thin|thick|length|initial|inherit",
        example: {
          html: "<div class=\"thin-rule\">Thin column rule</div><div class=\"medium-rule\">Medium column rule</div><div class=\"thick-rule\">Thick column rule</div>",
          css: "div {\n  width: 400px;\n  margin: 20px;\n  padding: 10px;\n  column-count: 3;\n  column-rule-style: solid;\n  column-rule-color: #3498db;\n}\n\n.thin-rule {\n  column-rule-width: thin; /* Thin line between columns */\n}\n\n.medium-rule {\n  column-rule-width: medium; /* Medium line between columns */\n}\n\n.thick-rule {\n  column-rule-width: thick; /* Thick line between columns */\n}"
        },
        description: "Specifies the width of the rule between columns.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
      },
      {
        id: "column-span",
        name: "column-span",
        syntax: "column-span: none|all|initial|inherit",
        example: {
          html: "<div class=\"columns\"><h2 class=\"span-all\">This heading spans all columns</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula libero eget leo efficitur, vel tempor odio feugiat. Vivamus auctor metus vitae lacus tincidunt, vel convallis odio condimentum.</div>",
          css: ".columns {\n  width: 400px;\n  margin: 20px;\n  padding: 10px;\n  column-count: 3;\n  column-gap: 20px;\n  border: 1px solid #ccc;\n}\n\n.span-all {\n  column-span: all; /* Makes the heading span across all columns */\n  background-color: #f5f5f5;\n  padding: 10px;\n  text-align: center;\n}"
        },
        description: "Specifies how many columns an element should span across in a tables layout.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
      },
      {
        id: "column-width",
        name: "column-width",
        syntax: "column-width: auto|length|initial|inherit",
        example: {
          html: "<div class=\"auto-width\">Auto column width. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula libero eget leo efficitur, vel tempor odio feugiat.</div><div class=\"fixed-width\">Fixed column width of 100px. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula libero eget leo efficitur, vel tempor odio feugiat.</div>",
          css: "div {\n  width: 400px;\n  margin: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.auto-width {\n  column-count: 3;\n  column-width: auto; /* Default - column width determined by count */\n}\n\n.fixed-width {\n  column-width: 100px; /* Creates columns with minimum width of 100px */\n}"
        },
        description: "Specifies the optimal width of columns in a tables layout.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
      },
      {
        id: "columns",
        name: "columns",
        syntax: "columns: column-width column-count|auto|initial|inherit",
        example: {
          html: "<div class=\"columns-example\">This demonstrates the columns shorthand property. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula libero eget leo efficitur, vel tempor odio feugiat. Vivamus auctor metus vitae lacus tincidunt.</div>",
          css: ".columns-example {\n  width: 400px;\n  margin: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  columns: 100px 3; /* Shorthand for column-width and column-count */\n}"
        },
        description: "Shorthand property that sets column-width and column-count in one declaration.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
      },
      {
        id: "empty-cells",
        name: "empty-cells",
        syntax: "empty-cells: show|hide|initial|inherit",
        example: {
          html: "<table class=\"empty-cells-demo\">\n  <tr>\n    <td>Cell 1</td>\n    <td></td>\n  </tr>\n  <tr>\n    <td></td>\n    <td>Cell 4</td>\n  </tr>\n</table>",
          css: ".empty-cells-demo { border-collapse: separate; border: 1px solid #333; }\n.empty-cells-demo td { border: 1px solid #999; padding: 10px; }\n.empty-cells-demo { empty-cells: hide; }"
        },
        description: "Specifies whether or not to display borders and background on empty cells in a table.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
      },
      {
        id: "table-layout",
        name: "table-layout",
        syntax: "table-layout: auto|fixed|initial|inherit",
        example: {
          html: "<table class=\"auto-layout\">\n  <tr>\n    <td>Short cell</td>\n    <td>Cell with more content that might influence the column width</td>\n  </tr>\n</table>\n<table class=\"fixed-layout\">\n  <tr>\n    <td>Short cell</td>\n    <td>Cell with more content that will not influence the column width</td>\n  </tr>\n</table>",
          css: "table { width: 300px; border-collapse: collapse; margin: 10px 0; }\ntd { border: 1px solid #333; padding: 5px; }\n.auto-layout { table-layout: auto; }\n.fixed-layout { table-layout: fixed; }"
        },
        description: "Defines the algorithm used to lay out table cells, rows, and columns.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
      },
      {
        id: "border-collapse",
        name: "border-collapse",
        syntax: "border-collapse: separate|collapse|initial|inherit",
        example: {
          html: "<table class=\"separate\"><caption>Border Separate</caption><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table><table class=\"collapse\"><caption>Border Collapse</caption><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>",
          css: "table {\n  width: 200px;\n  margin: 20px;\n}\n\ntable, th, td {\n  border: 2px solid #3498db;\n}\n\ntd {\n  padding: 10px;\n  text-align: center;\n}\n\ncaption {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n\n.separate {\n  border-collapse: separate; /* Default - borders are separated */\n  border-spacing: 5px;\n}\n\n.collapse {\n  border-collapse: collapse; /* Borders are shared between cells */\n}"
        },
        description: "Specifies whether table borders should be collapsed into a single border or separated.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
      },
      {
        id: "border-spacing",
        name: "border-spacing",
        syntax: "border-spacing: length length|initial|inherit",
        example: {
          html: "<table class=\"small-spacing\"><caption>Small Spacing</caption><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table><table class=\"large-spacing\"><caption>Large Spacing</caption><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>",
          css: "table {\n  width: 200px;\n  margin: 20px;\n  border-collapse: separate;\n}\n\ntable, th, td {\n  border: 2px solid #3498db;\n}\n\ntd {\n  padding: 10px;\n  text-align: center;\n}\n\ncaption {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n\n.small-spacing {\n  border-spacing: 2px; /* Small space between cells */\n}\n\n.large-spacing {\n  border-spacing: 10px; /* Large space between cells */\n}"
        },
        description: "Specifies the distance between the borders of adjacent table cells, only works when border-collapse is separate.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "tables"
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
    id: "transforms",
    name: "Transforms",
    properties: [
      {
        id: "backface-visibility",
        name: "backface-visibility",
        syntax: "backface-visibility: visible|hidden|initial|inherit",
        example: {
          html: "<div class=\"card-container\"><div class=\"card\"><div class=\"front\">Front</div><div class=\"back\">Back</div></div></div>",
          css: ".card-container {\n  width: 200px;\n  height: 300px;\n  perspective: 1000px;\n}\n\n.card {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 1s;\n}\n\n.card:hover {\n  transform: rotateY(180deg);\n}\n\n.front, .back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden; /* Hides element when not facing the user */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n\n.front {\n  background-color: #3498db;\n  color: white;\n}\n\n.back {\n  background-color: #e74c3c;\n  color: white;\n  transform: rotateY(180deg);\n}"
        },
        description: "Defines whether the back face of an element should be visible when facing the user, commonly used in card flip animations.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transforms"
      },
      {
        id: "perspective",
        name: "perspective",
        syntax: "perspective: none|length|initial|inherit",
        example: {
          html: "<div class=\"perspective-container\">\n  <div class=\"box\">3D Transformed Box</div>\n</div>",
          css: ".perspective-container { perspective: 500px; }\n.box { width: 100px; height: 100px; background: blue; transform: rotateY(45deg); }"
        },
        description: "Specifies the perspective from which 3D-positioned elements are viewed, giving an element a 3D space by affecting the distance between the Z plane and the user.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transforms"
      },
      {
        id: "perspective-origin",
        name: "perspective-origin",
        syntax: "perspective-origin: x-position y-position|initial|inherit",
        example: {
          html: "<div class=\"container\">\n  <div class=\"cube\">3D Cube with shifted perspective</div>\n</div>",
          css: ".container { perspective: 400px; perspective-origin: left center; width: 200px; height: 200px; }\n.cube { width: 100px; height: 100px; background: red; transform: rotateY(45deg); }"
        },
        description: "Defines the position at which the viewer is looking at the 3D positioned element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transforms"
      },
      {
        id: "transform",
        name: "transform",
        syntax: "transform: none|transform-functions|initial|inherit",
        example: {
          html: "<div class=\"original\">Original</div>\n<div class=\"rotated\">Rotated</div>\n<div class=\"scaled\">Scaled</div>\n<div class=\"skewed\">Skewed</div>\n<div class=\"translated\">Translated</div>\n<div class=\"multiple\">Multiple transforms</div>",
          css: ".original, .rotated, .scaled, .skewed, .translated, .multiple { width: 100px; height: 50px; background: #3498db; color: white; display: flex; align-items: center; justify-content: center; margin: 20px; }\n.rotated { transform: rotate(45deg); }\n.scaled { transform: scale(1.5); }\n.skewed { transform: skew(15deg, 15deg); }\n.translated { transform: translateX(30px); }\n.multiple { transform: rotate(25deg) scale(0.8) translateX(20px); }"
        },
        description: "Applies a 2D or 3D transformation to an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transforms"
      },
      {
        id: "transform-origin",
        name: "transform-origin",
        syntax: "transform-origin: x-axis y-axis z-axis|initial|inherit",
        example: {
          html: "<div class=\"demo-container\">\n  <div class=\"center-origin\">Default origin</div>\n  <div class=\"corner-origin\">Top-left origin</div>\n</div>",
          css: ".demo-container { display: flex; gap: 20px; }\n.center-origin, .corner-origin { width: 100px; height: 100px; background: orange; transition: transform 1s; }\n.center-origin:hover { transform: rotate(45deg); transform-origin: center; /* Default */ }\n.corner-origin:hover { transform: rotate(45deg); transform-origin: top left; }"
        },
        description: "Specifies the position of the origin for an element's transformations.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transforms"
      },
      {
        id: "transform-style",
        name: "transform-style",
        syntax: "transform-style: flat|preserve-3d|initial|inherit",
        example: {
          html: "<div class=\"scene\">\n  <div class=\"cube preserve-3d\">\n    <div class=\"face front\">Front</div>\n    <div class=\"face back\">Back</div>\n  </div>\n</div>",
          css: ".scene { width: 100px; height: 100px; perspective: 400px; margin: 50px; }\n.cube { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; transform: rotateY(45deg); }\n.face { width: 100%; height: 100%; position: absolute; display: flex; align-items: center; justify-content: center; background: rgba(0, 123, 255, 0.7); }\n.front { transform: translateZ(50px); }\n.back { transform: translateZ(-50px); }"
        },
        description: "Specifies how nested elements are rendered in 3D space.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "transforms"
      },
    ]
  },
  {
    id: "visual-effects",
    name: "Visual effects",
    properties: [
      {
        id: "clip",
        name: "clip",
        syntax: "clip: auto|rect(top, right, bottom, left)|initial|inherit",
        example: {
          html: "<div class=\"container\"><img src=\"https://picsum.photos/id/237/200/300\" class=\"clipped\" alt=\"Clipped image\"></div>",
          css: ".container {\n  position: relative;\n  height: 200px;\n  width: 200px;\n  border: 2px dashed #3498db;\n}\n\n.clipped {\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  clip: rect(50px, 150px, 150px, 50px); /* Clips image (top, right, bottom, left) */\n}"
        },
        description: "Defines which part of an absolutely positioned element is visible. Note: Deprecated in favor of clip-path.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "visual-effects"
      },
      {
        id: "filter",
        name: "filter",
        syntax: "filter: none|blur()|brightness()|contrast()|drop-shadow()|grayscale()|hue-rotate()|invert()|opacity()|saturate()|sepia()",
        example: {
          html: "<img class=\"filtered-image\" src=\"https://picsum.photos/id/237/200/300\" alt=\"A filtered image\">",
          css: ".filtered-image { filter: grayscale(80%) brightness(120%); }"
        },
        description: "Applies graphical effects like blur or color shifting to an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "visual-effects"
      },
      {
        id: "opacity",
        name: "opacity",
        syntax: "opacity: number|initial|inherit",
        example: {
          html: "<div class=\"opaque\">100% opacity (default)</div>\n<div class=\"semi-transparent\">50% opacity</div>\n<div class=\"transparent\">20% opacity</div>",
          css: ".opaque, .semi-transparent, .transparent { padding: 10px; background: blue; color: white; margin: 5px; }\n.opaque { opacity: 1; }\n.semi-transparent { opacity: 0.5; }\n.transparent { opacity: 0.2; }"
        },
        description: "Sets the opacity level for an element (transparency).",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "visual-effects"
      },
      {
        id: "visibility",
        name: "visibility",
        syntax: "visibility: visible|hidden|collapse|initial|inherit",
        example: {
          html: "<div class=\"visible\">This element is visible (default)</div>\n<div class=\"hidden\">This element is hidden but still takes up space</div>\n<div class=\"after-hidden\">This element comes after the hidden one</div>",
          css: ".visible, .hidden, .after-hidden { padding: 10px; margin: 5px; background: #e0e0e0; }\n.hidden { visibility: hidden; }\n.after-hidden { background: #b5e0b5; }"
        },
        description: "Specifies whether or not an element is visible. Hidden elements still take up space in the layout.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "visual-effects"
      },
    ]
  },
  {
    id: "animations",
    name: "Animations",
    properties: [
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
        category: "animations"
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
        category: "animations"
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
        category: "animations"
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
        category: "animations"
      },
      {
        id: "animation-delay",
        name: "animation-delay",
        syntax: "animation-delay: time|initial|inherit",
        example: {
          html: "<div class=\"box\">Hover me</div>",
          css: ".box {\n  width: 100px;\n  height: 100px;\n  background-color: #3498db;\n  transition: transform 0.3s;\n}\n\n.box:hover {\n  animation: pulse 1s infinite;\n  animation-delay: 0.5s; /* Animation starts after 0.5 seconds */\n}\n\n@keyframes pulse {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.1); }\n  100% { transform: scale(1); }\n}"
        },
        description: "Specifies a delay before an animation starts, allowing elements to wait before beginning their animation sequence.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "animations"
      },
      {
        id: "animation-direction",
        name: "animation-direction",
        syntax: "animation-direction: normal|reverse|alternate|alternate-reverse|initial|inherit",
        example: {
          html: "<div class=\"box normal\">Normal</div><div class=\"box reverse\">Reverse</div><div class=\"box alternate\">Alternate</div>",
          css: ".box {\n  width: 100px;\n  height: 50px;\n  background-color: #3498db;\n  margin: 10px;\n  color: white;\n  text-align: center;\n  padding-top: 10px;\n}\n\n.normal {\n  animation: slide 2s infinite;\n  animation-direction: normal; /* Default - forwards each cycle */\n}\n\n.reverse {\n  animation: slide 2s infinite;\n  animation-direction: reverse; /* Backwards each cycle */\n}\n\n.alternate {\n  animation: slide 2s infinite;\n  animation-direction: alternate; /* Forwards then backwards */\n}\n\n@keyframes slide {\n  0% { transform: translateX(0px); }\n  100% { transform: translateX(100px); }\n}"
        },
        description: "Defines whether an animation should play forwards, backwards, or alternate back and forth between directions.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "animations"
      },
      {
        id: "animation-fill-mode",
        name: "animation-fill-mode",
        syntax: "animation-fill-mode: none|forwards|backwards|both|initial|inherit",
        example: {
          html: "<div class=\"box none\">None</div><div class=\"box forwards\">Forwards</div><div class=\"box backwards\">Backwards</div>",
          css: ".box {\n  width: 100px;\n  height: 50px;\n  background-color: #3498db;\n  margin: 10px;\n  color: white;\n  text-align: center;\n  padding-top: 10px;\n  position: relative;\n}\n\n.none {\n  animation: move 2s 1s;\n  animation-fill-mode: none; /* Default - returns to original state */\n}\n\n.forwards {\n  animation: move 2s 1s;\n  animation-fill-mode: forwards; /* Keeps final keyframe state */\n}\n\n.backwards {\n  animation: move 2s 1s;\n  animation-fill-mode: backwards; /* Applies first keyframe during delay */\n}\n\n@keyframes move {\n  0% { left: 0px; background-color: red; }\n  100% { left: 100px; background-color: green; }\n}"
        },
        description: "Specifies how an element should be styled before and after the animation, controlling whether properties retain their animated values after completion.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "animations"
      },
      {
        id: "animation-iteration-count",
        name: "animation-iteration-count",
        syntax: "animation-iteration-count: number|infinite|initial|inherit",
        example: {
          html: "<div class=\"box once\">Once</div><div class=\"box thrice\">Three times</div><div class=\"box infinite\">Infinite</div>",
          css: ".box {\n  width: 100px;\n  height: 50px;\n  background-color: #3498db;\n  margin: 10px;\n  color: white;\n  text-align: center;\n  padding-top: 10px;\n}\n\n.once {\n  animation: flash 0.5s;\n  animation-iteration-count: 1; /* Default - plays once */\n}\n\n.thrice {\n  animation: flash 0.5s;\n  animation-iteration-count: 3; /* Plays three times */\n}\n\n.infinite {\n  animation: flash 0.5s;\n  animation-iteration-count: infinite; /* Never stops */\n}\n\n@keyframes flash {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.5; }\n}"
        },
        description: "Specifies the number of times an animation should be played, allowing for single or multiple repetitions, or continuous looping.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "animations"
      },
      {
        id: "animation-play-state",
        name: "animation-play-state",
        syntax: "animation-play-state: running|paused|initial|inherit",
        example: {
          html: "<div class=\"box\">Hover to pause</div>",
          css: ".box {\n  width: 100px;\n  height: 100px;\n  background-color: #3498db;\n  color: white;\n  text-align: center;\n  padding-top: 40px;\n  box-sizing: border-box;\n  animation: rotate 3s linear infinite;\n  animation-play-state: running; /* Default - animation plays */\n}\n\n.box:hover {\n  animation-play-state: paused; /* Animation pauses when hovered */\n}\n\n@keyframes rotate {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}"
        },
        description: "Controls whether an animation is running or paused, allowing developers to pause animations on demand.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "animations"
      }
    ]
  },
  {
    id: "transitions",
    name: "Transitions",
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
      }
    ]
  },
  {
    id: "paged-media",
    name: "Paged media",
    properties: [
      {
        id: "orphans",
        name: "orphans",
        syntax: "orphans: number|initial|inherit",
        example: {
          html: "<div class=\"page-break-demo\">\n  <p>This paragraph demonstrates the orphans property when printing. It specifies the minimum number of lines that must be left at the bottom of a page.</p>\n</div>",
          css: "@media print {\n  .page-break-demo {\n    orphans: 3;\n  }\n}"
        },
        description: "Sets the minimum number of lines that must be left at the bottom of a page when a page break occurs within an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "paged-media"
      },
      {
        id: "page-break-after",
        name: "page-break-after",
        syntax: "page-break-after: auto|always|avoid|left|right|initial|inherit",
        example: {
          html: "<div class=\"section1\">Section 1 content</div>\n<div class=\"section2\">Section 2 will start on a new page when printed</div>",
          css: "@media print {\n  .section1 { page-break-after: always; }\n}"
        },
        description: "Sets whether a page break should occur after a specified element. Mostly used for printing.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "paged-media"
      },
      {
        id: "page-break-before",
        name: "page-break-before",
        syntax: "page-break-before: auto|always|avoid|left|right|initial|inherit",
        example: {
          html: "<div class=\"section1\">Section 1 content</div>\n<div class=\"new-page-section\">This section will start on a new page when printed</div>",
          css: "@media print {\n  .new-page-section { page-break-before: always; }\n}"
        },
        description: "Sets whether a page break should occur before a specified element. Mostly used for printing.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "paged-media"
      },
      {
        id: "page-break-inside",
        name: "page-break-inside",
        syntax: "page-break-inside: auto|avoid|initial|inherit",
        example: {
          html: "<div class=\"avoid-break\">\n  <h2>Important Section</h2>\n  <p>This content should not be split across different pages when printed.</p>\n</div>",
          css: "@media print {\n  .avoid-break { page-break-inside: avoid; }\n}"
        },
        description: "Sets whether a page break is allowed inside a specified element. Mostly used for printing.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "paged-media"
      },
      {
        id: "widows",
        name: "widows",
        syntax: "widows: number|initial|inherit",
        example: {
          html: "<div class=\"print-widows\">\n  <p>This paragraph demonstrates the widows property when printing. It specifies the minimum number of lines that must be left at the top of a page.</p>\n</div>",
          css: "@media print {\n  .print-widows {\n    widows: 3;\n  }\n}"
        },
        description: "Sets the minimum number of lines that must be left at the top of a page when a page break occurs within an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "paged-media"
      }
    ]
  },
  {
    id: "generated-content",
    name: "Generated content",
    properties: [
      {
        id: "content",
        name: "content",
        syntax: "content: normal|none|counter|attr|string|open-quote|close-quote|no-open-quote|no-close-quote|url|initial|inherit",
        example: {
          html: "<div class=\"custom-content\">Hover over me</div><ul class=\"numbered\"><li>Item one</li><li>Item two</li><li>Item three</li></ul>",
          css: ".custom-content::after {\n  content: \" ★\"; /* Adds a star after the text */\n}\n\n.custom-content:hover::after {\n  content: \" ☆\"; /* Changes to an outline star on hover */\n}\n\n.numbered li {\n  position: relative;\n  padding-left: 25px;\n  list-style-type: none;\n}\n\n.numbered li::before {\n  content: counter(list-item) \".\"; /* Adds numbering */\n  position: absolute;\n  left: 0;\n  font-weight: bold;\n  color: #3498db;\n}"
        },
        description: "Used with ::before and ::after pseudo-elements to insert generated content.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "generated-content"
      },
      {
        id: "counter-increment",
        name: "counter-increment",
        syntax: "counter-increment: none|id number|initial|inherit",
        example: {
          html: "<h1>Chapter 1</h1><h2>Section 1.1</h2><h2>Section 1.2</h2><h1>Chapter 2</h1><h2>Section 2.1</h2>",
          css: "h1 {\n  counter-reset: section; /* Resets the section counter */\n}\n\nh1::before {\n  counter-increment: chapter; /* Increments the chapter counter */\n  content: \"Chapter \" counter(chapter) \": \";\n}\n\nh2::before {\n  counter-increment: section; /* Increments the section counter */\n  content: counter(chapter) \".\" counter(section) \" \";\n}"
        },
        description: "Increases or decreases the value of CSS counters, which can be used for automatic numbering.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "generated-content"
      },
      {
        id: "counter-reset",
        name: "counter-reset",
        syntax: "counter-reset: none|name number|initial|inherit",
        example: {
          html: "<ol class=\"custom-counter\"><li>First item</li><li>Second item</li><ol class=\"custom-counter\"><li>Nested first item</li><li>Nested second item</li></ol><li>Third item</li></ol>",
          css: ".custom-counter {\n  counter-reset: item; /* Creates and resets the 'item' counter */\n  list-style-type: none;\n  padding-left: 20px;\n}\n\n.custom-counter li {\n  position: relative;\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\n.custom-counter li::before {\n  counter-increment: item; /* Increments the counter */\n  content: counter(item, decimal-leading-zero) \".\"; /* Format: 01., 02. */\n  position: absolute;\n  left: 0;\n  color: #3498db;\n  font-weight: bold;\n}"
        },
        description: "Creates or resets CSS counters to specific values, useful for creating custom numbering schemes.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "generated-content"
      }
    ]
  },
  {
    id: "user-interface",
    name: "User interface",
    properties: [
      {
        id: "cursor",
        name: "cursor",
        syntax: "cursor: auto|default|pointer|help|wait|progress|text|move|copy|not-allowed|grab|zoom-in|...",
        example: {
          html: "<div class=\"cursor-demo\">Hover over me to see the pointer cursor</div>",
          css: ".cursor-demo { padding: 20px; background: #e0e0e0; cursor: pointer; }"
        },
        description: "Specifies the type of cursor to be displayed when pointing over an element.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "user-interface"
      },
      {
        id: "resize",
        name: "resize",
        syntax: "resize: none|both|horizontal|vertical|initial|inherit",
        example: {
          html: "<textarea class=\"resizable\">This textarea can be resized vertically only.</textarea>",
          css: ".resizable { width: 200px; height: 100px; padding: 10px; resize: vertical; overflow: auto; }"
        },
        description: "Defines if (and how) an element is resizable by the user.",
        browsers: ["Chrome", "Edge", "Firefox", "Safari", "Opera"],
        category: "user-interface"
      }
    ]
  }
];

