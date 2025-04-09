
import { SelectorCategory } from "../types/selectors";

export const selectorCategories: SelectorCategory[] = [
  {
    id: "basic",
    name: "Basic Selectors",
    selectors: [
      {
        id: "universal",
        name: "Universal Selector",
        parameters: "* (asterisk)",
        example: {
          html: `<div>Text</div>
<p>Paragraph</p>
<span>Span</span>`,
          css: `* {
  color: blue;
  padding: 5px;
  border: 1px dashed #cccccc;
}`
        },
        description: "Selects all elements on the page. Use with caution as it can impact performance when applied to large documents.",
        platforms: ["All browsers"]
      },
      {
        id: "type",
        name: "Type Selector",
        parameters: "element",
        example: {
          html: `<div>This is a div</div>
<p>This is a paragraph</p>
<div>Another div</div>`,
          css: `p {
  color: red;
  font-weight: bold;
}`
        },
        description: "Selects all elements that match the given node name.",
        platforms: ["All browsers"]
      },
      {
        id: "class",
        name: "Class Selector",
        parameters: ".classname",
        example: {
          html: `<div class="highlight">Highlighted div</div>
<p>Regular paragraph</p>
<p class="highlight">Highlighted paragraph</p>`,
          css: `.highlight {
  background-color: yellow;
  padding: 5px;
  border-radius: 3px;
}`
        },
        description: "Selects all elements with the given class attribute.",
        platforms: ["All browsers"]
      },
      {
        id: "id",
        name: "ID Selector",
        parameters: "#idname",
        example: {
          html: `<div id="unique">Element with unique ID</div>
<div>Regular div element</div>`,
          css: `#unique {
  background-color: #e0f7fa;
  padding: 10px;
  border-left: 4px solid #00bcd4;
}`
        },
        description: "Selects an element with the given ID. Should be unique within the document.",
        platforms: ["All browsers"]
      },
    ]
  },
  {
    id: "combinators",
    name: "Combinators",
    selectors: [
      {
        id: "descendant",
        name: "Descendant Combinator",
        parameters: "A B",
        example: {
          html: `<div class="container">
  <p>Paragraph inside div</p>
  <span>
    <p>Paragraph inside span inside div</p>
  </span>
</div>
<p>Paragraph outside div</p>`,
          css: `.container p {
  background-color: #f0f0f0;
  padding: 5px;
  border-left: 2px solid blue;
}`
        },
        description: "Selects all B elements that are descendants of an A element (not just direct children).",
        platforms: ["All browsers"]
      },
      {
        id: "child",
        name: "Child Combinator",
        parameters: "A > B",
        example: {
          html: `<div class="parent">
  <p>Direct child paragraph</p>
  <span>
    <p>Nested paragraph</p>
  </span>
</div>`,
          css: `.parent > p {
  background-color: #e6f2ff;
  border-left: 3px solid #3399ff;
  padding: 5px;
}`
        },
        description: "Selects all B elements that are direct children of an A element.",
        platforms: ["All browsers"]
      },
      {
        id: "adjacent-sibling",
        name: "Adjacent Sibling Combinator",
        parameters: "A + B",
        example: {
          html: `<h2>Heading</h2>
<p>Paragraph right after heading</p>
<p>Another paragraph</p>`,
          css: `h2 + p {
  font-weight: bold;
  color: #6200ea;
}`
        },
        description: "Selects element B when it immediately follows element A and both share the same parent.",
        platforms: ["All browsers"]
      },
      {
        id: "general-sibling",
        name: "General Sibling Combinator",
        parameters: "A ~ B",
        example: {
          html: `<h2>Heading</h2>
<p>First paragraph</p>
<div>A div</div>
<p>Second paragraph</p>`,
          css: `h2 ~ p {
  font-style: italic;
  color: #0277bd;
}`
        },
        description: "Selects all B elements that follow an A element and share the same parent.",
        platforms: ["All browsers"]
      }
    ]
  },
  {
    id: "pseudo-classes",
    name: "Pseudo-Classes",
    selectors: [
      {
        id: "hover",
        name: ":hover",
        parameters: "element:hover",
        example: {
          html: `<button class="hover-button">Hover over me</button>`,
          css: `.hover-button {
  padding: 10px 15px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.hover-button:hover {
  background-color: #2196f3;
  color: white;
}`
        },
        description: "Selects an element when the user hovers over it with a pointing device.",
        platforms: ["All browsers"]
      },
      {
        id: "active",
        name: ":active",
        parameters: "element:active",
        example: {
          html: `<button class="active-button">Click and hold me</button>`,
          css: `.active-button {
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
}

.active-button:active {
  background-color: #388e3c;
  transform: scale(0.98);
}`
        },
        description: "Selects an element when it is being activated by the user (e.g., clicked).",
        platforms: ["All browsers"]
      },
      {
        id: "focus",
        name: ":focus",
        parameters: "element:focus",
        example: {
          html: `<input class="focus-input" type="text" placeholder="Click to focus">`,
          css: `.focus-input {
  padding: 8px;
  border: 2px solid #ddd;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
}

.focus-input:focus {
  border-color: #2196f3;
  box-shadow: 0 0 5px rgba(33, 150, 243, 0.5);
}`
        },
        description: "Selects an element when it has focus (e.g., form input when selected).",
        platforms: ["All browsers"]
      },
      {
        id: "nth-child",
        name: ":nth-child()",
        parameters: "element:nth-child(pattern)",
        example: {
          html: `<ul class="striped-list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>`,
          css: `.striped-list li:nth-child(odd) {
  background-color: #f5f5f5;
}

.striped-list li {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}`
        },
        description: "Selects elements based on their position among siblings according to a pattern (e.g., odd, even, 3n, etc).",
        platforms: ["All modern browsers"]
      }
    ]
  },
  {
    id: "pseudo-elements",
    name: "Pseudo-Elements",
    selectors: [
      {
        id: "before",
        name: "::before",
        parameters: "element::before",
        example: {
          html: `<p class="quote">This is a quote</p>`,
          css: `.quote {
  padding-left: 20px;
  font-style: italic;
}

.quote::before {
  content: '"';
  font-size: 24px;
  color: #999;
  margin-right: 5px;
}`
        },
        description: "Creates a pseudo-element that is the first child of the selected element, often used with the content property.",
        platforms: ["All modern browsers"]
      },
      {
        id: "after",
        name: "::after",
        parameters: "element::after",
        example: {
          html: `<a class="external-link" href="#">External link</a>`,
          css: `.external-link {
  color: #2196f3;
  text-decoration: none;
}

.external-link::after {
  content: ' →';
  color: #999;
}`
        },
        description: "Creates a pseudo-element that is the last child of the selected element, often used with the content property.",
        platforms: ["All modern browsers"]
      },
      {
        id: "first-letter",
        name: "::first-letter",
        parameters: "element::first-letter",
        example: {
          html: `<p class="drop-cap">This paragraph has a drop cap effect on its first letter.</p>`,
          css: `.drop-cap::first-letter {
  font-size: 300%;
  font-weight: bold;
  float: left;
  line-height: 0.8;
  margin-right: 8px;
  color: #3f51b5;
}`
        },
        description: "Selects the first letter of the specified element.",
        platforms: ["All modern browsers"]
      },
      {
        id: "first-line",
        name: "::first-line",
        parameters: "element::first-line",
        example: {
          html: `<p class="article-intro">This is the first line of an article. As you can see, the first line is styled differently to draw the reader's attention. This text should wrap to show the effect.</p>`,
          css: `.article-intro {
  font-size: 16px;
  line-height: 1.5;
  max-width: 300px;
}

.article-intro::first-line {
  font-weight: bold;
  color: #d32f2f;
}`
        },
        description: "Selects the first line of the specified element.",
        platforms: ["All modern browsers"]
      }
    ]
  },
  {
    id: "attribute-selectors",
    name: "Attribute Selectors",
    selectors: [
      {
        id: "attr-exists",
        name: "Attribute Presence",
        parameters: "[attribute]",
        example: {
          html: `<input type="text" placeholder="Regular input">
<input type="text" required placeholder="Required input">`,
          css: `input[required] {
  border: 2px solid #ff9800;
  background-color: #fff8e1;
}`
        },
        description: "Selects elements with the specified attribute, regardless of its value.",
        platforms: ["All modern browsers"]
      },
      {
        id: "attr-equals",
        name: "Attribute Equals",
        parameters: "[attribute=value]",
        example: {
          html: `<input type="text" placeholder="Text input">
<input type="email" placeholder="Email input">`,
          css: `input[type="email"] {
  border: 2px solid #4caf50;
  background-color: #e8f5e9;
}`
        },
        description: "Selects elements where the attribute value exactly matches the specified value.",
        platforms: ["All modern browsers"]
      },
      {
        id: "attr-contains",
        name: "Attribute Contains",
        parameters: "[attribute*=value]",
        example: {
          html: `<div class="main-header">Main Header</div>
<div class="sub-header">Sub Header</div>
<div class="content-header">Content Header</div>`,
          css: `div[class*="head"] {
  font-weight: bold;
  padding: 5px;
  border-bottom: 2px solid #3f51b5;
}`
        },
        description: "Selects elements where the attribute value contains the specified substring.",
        platforms: ["All modern browsers"]
      },
      {
        id: "attr-begins",
        name: "Attribute Begins With",
        parameters: "[attribute^=value]",
        example: {
          html: `<div class="btn-primary">Primary Button</div>
<div class="btn-secondary">Secondary Button</div>
<div class="primary-text">Primary Text</div>`,
          css: `div[class^="btn"] {
  padding: 8px 16px;
  border-radius: 4px;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
}

.btn-primary {
  background-color: #2196f3;
  color: white;
}

.btn-secondary {
  background-color: #f5f5f5;
  color: #333;
}`
        },
        description: "Selects elements where the attribute value begins with the specified substring.",
        platforms: ["All modern browsers"]
      }
    ]
  }
];
