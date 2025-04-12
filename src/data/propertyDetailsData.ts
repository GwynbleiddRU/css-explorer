
import { PropertyDetails } from "@/types/propertyValues";

// Font-weight property details
export const fontWeightDetails: PropertyDetails = {
  id: "font-weight",
  name: "font-weight",
  description: "Устанавливает насыщенность или \"жирность\" начертания шрифта.",
  syntax: "font-weight: normal | bold | bolder | lighter | число | initial | inherit;",
  browsers: ["chrome", "edge", "firefox", "safari", "opera"],
  example: {
    html: "<p class=\"normal\">Обычный текст</p>\n<p class=\"thick\">Жирный текст</p>\n<p class=\"thicker\">Очень жирный текст</p>",
    css: "p.normal {\n  font-weight: normal;\n}\n\np.thick {\n  font-weight: bold;\n}\n\np.thicker {\n  font-weight: 900;\n}"
  }
};

// Display property details
export const displayDetails: PropertyDetails = {
  id: "display",
  name: "display",
  description: "Определяет, как элемент должен быть показан в документе.",
  syntax: "display: value;",
  browsers: ["chrome", "edge", "firefox", "safari", "opera"],
  example: {
    html: "<div class=\"block-example\">Это блочный элемент</div>\n<span class=\"inline-example\">Это строчный элемент</span>\n<span class=\"inline-block-example\">Это строчно-блочный элемент</span>",
    css: ".block-example {\n  display: block;\n  background-color: lightblue;\n  padding: 10px;\n}\n\n.inline-example {\n  display: inline;\n  background-color: lightgreen;\n  padding: 10px;\n}\n\n.inline-block-example {\n  display: inline-block;\n  background-color: lightyellow;\n  padding: 10px;\n  margin: 10px;\n}"
  }
};

// Position property details
export const positionDetails: PropertyDetails = {
  id: "position",
  name: "position",
  description: "Указывает метод позиционирования элемента.",
  syntax: "position: value;",
  browsers: ["chrome", "edge", "firefox", "safari", "opera"],
  example: {
    html: "<div class=\"relative-container\">\n  <div class=\"absolute-box\">Абсолютное позиционирование</div>\n  Относительный контейнер\n</div>",
    css: ".relative-container {\n  position: relative;\n  height: 100px;\n  width: 100%;\n  background-color: #f0f0f0;\n  padding: 10px;\n  margin-bottom: 50px;\n}\n\n.absolute-box {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background-color: #ff9999;\n  padding: 10px;\n}"
  }
};

// Justify-content property details
export const justifyContentDetails: PropertyDetails = {
  id: "justify-content",
  name: "justify-content",
  description: "Определяет выравнивание элементов вдоль главной оси flex-контейнера.",
  syntax: "justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | initial | inherit;",
  browsers: ["chrome", "edge", "firefox", "safari", "opera"],
  example: {
    html: "<div class=\"flex-container space-between\">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>\n\n<div class=\"flex-container center\">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>",
    css: ".flex-container {\n  display: flex;\n  background-color: #f1f1f1;\n  margin-bottom: 20px;\n  height: 80px;\n}\n\n.flex-container > div {\n  background-color: #4CAF50;\n  color: white;\n  width: 50px;\n  margin: 5px;\n  text-align: center;\n  line-height: 50px;\n  font-size: 20px;\n}\n\n.space-between {\n  justify-content: space-between;\n}\n\n.center {\n  justify-content: center;\n}"
  }
};

// Flex-direction property details
export const flexDirectionDetails: PropertyDetails = {
  id: "flex-direction",
  name: "flex-direction",
  description: "Определяет направление flex-элементов внутри flex-контейнера.",
  syntax: "flex-direction: row | row-reverse | column | column-reverse | initial | inherit;",
  browsers: ["chrome", "edge", "firefox", "safari", "opera"],
  example: {
    html: "<div class=\"flex-container row\">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>\n\n<div class=\"flex-container column\">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>",
    css: ".flex-container {\n  display: flex;\n  background-color: #f1f1f1;\n  margin-bottom: 20px;\n}\n\n.flex-container > div {\n  background-color: #4CAF50;\n  color: white;\n  width: 50px;\n  margin: 5px;\n  text-align: center;\n  line-height: 50px;\n  font-size: 20px;\n}\n\n.row {\n  flex-direction: row;\n}\n\n.column {\n  flex-direction: column;\n  height: 200px;\n}"
  }
};

// Align-items property details
export const alignItemsDetails: PropertyDetails = {
  id: "align-items",
  name: "align-items",
  description: "Определяет выравнивание flex-элементов по поперечной оси flex-контейнера.",
  syntax: "align-items: stretch | center | flex-start | flex-end | baseline | initial | inherit;",
  browsers: ["chrome", "edge", "firefox", "safari", "opera"],
  example: {
    html: "<div class=\"flex-container stretch\">\n  <div>1</div>\n  <div style=\"font-size:30px\">2</div>\n  <div>3</div>\n</div>\n\n<div class=\"flex-container center\">\n  <div>1</div>\n  <div style=\"font-size:30px\">2</div>\n  <div>3</div>\n</div>",
    css: ".flex-container {\n  display: flex;\n  background-color: #f1f1f1;\n  margin-bottom: 20px;\n  height: 100px;\n}\n\n.flex-container > div {\n  background-color: #4CAF50;\n  color: white;\n  width: 50px;\n  margin: 5px;\n  text-align: center;\n}\n\n.stretch {\n  align-items: stretch;\n}\n\n.center {\n  align-items: center;\n}"
  }
};

// Create a record of all property details
export const propertyDetailsList: Record<string, PropertyDetails> = {
  "font-weight": fontWeightDetails,
  "display": displayDetails,
  "position": positionDetails,
  "justify-content": justifyContentDetails,
  "flex-direction": flexDirectionDetails,
  "align-items": alignItemsDetails
};

// Function to get property details by ID
export const getPropertyDetailsById = (id: string): PropertyDetails | undefined => {
  return propertyDetailsList[id];
};
