
import { PropertyDetails } from "@/types/propertyValues";

// Font-weight property details
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

// Display property details
export const displayDetails: PropertyDetails = {
  id: "display",
  name: "display",
  description: "Определяет, как элемент должен быть показан в документе.",
  syntax: "display: value;",
  values: [
    { value: "inline", description: "Элемент отображается как строчный. Любые свойства высоты и ширины не будут применяться." },
    { value: "block", description: "Элемент отображается как блочный. Занимает всю доступную ширину, начинается с новой строки." },
    { value: "contents", description: "Элемент сам не создает никаких боксов, но его дочерние элементы отображаются как обычно." },
    { value: "flex", description: "Элемент ведет себя как блочный и использует flex-разметку для своего содержимого." },
    { value: "grid", description: "Элемент ведет себя как блочный и использует grid-разметку для своего содержимого." },
    { value: "inline-block", description: "Элемент формирует блочный контейнер, который обтекается текстом, как встроенный элемент." },
    { value: "inline-flex", description: "Элемент ведет себя как строчный и использует flex-разметку для своего содержимого." },
    { value: "inline-grid", description: "Элемент ведет себя как строчный и использует grid-разметку для своего содержимого." },
    { value: "inline-table", description: "Элемент ведет себя как строчная таблица." },
    { value: "list-item", description: "Элемент ведет себя как элемент списка." },
    { value: "run-in", description: "Элемент отображается как блочный или встроенный, в зависимости от контекста." },
    { value: "table", description: "Элемент ведет себя как таблица." },
    { value: "table-caption", description: "Элемент ведет себя как заголовок таблицы." },
    { value: "table-column-group", description: "Элемент ведет себя как группа колонок таблицы." },
    { value: "table-header-group", description: "Элемент ведет себя как группа строк заголовка таблицы." },
    { value: "table-footer-group", description: "Элемент ведет себя как группа строк нижнего колонтитула таблицы." },
    { value: "table-row-group", description: "Элемент ведет себя как группа строк таблицы." },
    { value: "table-cell", description: "Элемент ведет себя как ячейка таблицы." },
    { value: "table-column", description: "Элемент ведет себя как колонка таблицы." },
    { value: "table-row", description: "Элемент ведет себя как строка таблицы." },
    { value: "none", description: "Элемент не отображается и не занимает место на странице." },
    { value: "initial", description: "Устанавливает значение свойства в значение по умолчанию." },
    { value: "inherit", description: "Наследует значение от родительского элемента." }
  ],
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
  values: [
    { value: "static", description: "Значение по умолчанию. Элементы отображаются в порядке следования в документе." },
    { value: "relative", description: "Элемент позиционируется относительно его нормального положения." },
    { value: "absolute", description: "Элемент позиционируется относительно его ближайшего предка с position, отличным от static." },
    { value: "fixed", description: "Элемент позиционируется относительно окна браузера и не двигается при прокрутке." },
    { value: "sticky", description: "Элемент позиционируется на основе положения прокрутки пользователя (гибрид relative и fixed)." },
    { value: "initial", description: "Устанавливает значение свойства в значение по умолчанию." },
    { value: "inherit", description: "Наследует значение от родительского элемента." }
  ],
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
  values: [
    { value: "center", description: "Флекс-элементы выравниваются по центру флекс-контейнера." },
    { value: "flex-start", description: "Значение по умолчанию. Флекс-элементы позиционируются от начала флекс-контейнера." },
    { value: "flex-end", description: "Флекс-элементы позиционируются от конца флекс-контейнера." },
    { value: "space-between", description: "Флекс-элементы выравниваются по главной оси, свободное место между ними распределяется следующим образом: первый блок располагается в начале флекс-контейнера, последний блок – в конце, все остальные блоки равномерно распределены в оставшемся пространстве, а свободное пространство равномерно распределяется между элементами." },
    { value: "space-around", description: "Флекс-элементы выравниваются по главной оси, а свободное место делится поровну, добавляя отступы справа и слева." },
    { value: "space-evenly", description: "Флекс-элементы выравниваются так, что расстояние между любыми двумя соседними элементами, а также между элементом и краем контейнера, всегда одинаковое." },
    { value: "inherit", description: "Значение наследуется от родительского элемента." },
    { value: "initial", description: "Устанавливает значение по умолчанию." }
  ],
  browsers: ["chrome", "edge", "firefox", "safari", "opera"],
  example: {
    html: "<div class=\"flex-container space-between\">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>\n\n<div class=\"flex-container center\">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>",
    css: ".flex-container {\n  display: flex;\n  background-color: #f1f1f1;\n  margin-bottom: 20px;\n  height: 80px;\n}\n\n.flex-container > div {\n  background-color: #4CAF50;\n  color: white;\n  width: 50px;\n  margin: 5px;\n  text-align: center;\n  line-height: 50px;\n  font-size: 20px;\n}\n\n.space-between {\n  justify-content: space-between;\n}\n\n.center {\n  justify-content: center;\n}"
  }
};

// Add flex-direction property details
export const flexDirectionDetails: PropertyDetails = {
  id: "flex-direction",
  name: "flex-direction",
  description: "Определяет направление flex-элементов внутри flex-контейнера.",
  syntax: "flex-direction: row | row-reverse | column | column-reverse | initial | inherit;",
  values: [
    { value: "row", description: "Значение по умолчанию. Flex-элементы располагаются горизонтально, слева направо." },
    { value: "row-reverse", description: "Flex-элементы располагаются горизонтально, справа налево." },
    { value: "column", description: "Flex-элементы располагаются вертикально, сверху вниз." },
    { value: "column-reverse", description: "Flex-элементы располагаются вертикально, снизу вверх." },
    { value: "initial", description: "Устанавливает значение свойства в значение по умолчанию." },
    { value: "inherit", description: "Наследует значение от родительского элемента." }
  ],
  browsers: ["chrome", "edge", "firefox", "safari", "opera"],
  example: {
    html: "<div class=\"flex-container row\">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>\n\n<div class=\"flex-container column\">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>",
    css: ".flex-container {\n  display: flex;\n  background-color: #f1f1f1;\n  margin-bottom: 20px;\n}\n\n.flex-container > div {\n  background-color: #4CAF50;\n  color: white;\n  width: 50px;\n  margin: 5px;\n  text-align: center;\n  line-height: 50px;\n  font-size: 20px;\n}\n\n.row {\n  flex-direction: row;\n}\n\n.column {\n  flex-direction: column;\n  height: 200px;\n}"
  }
};

// Add align-items property details
export const alignItemsDetails: PropertyDetails = {
  id: "align-items",
  name: "align-items",
  description: "Определяет выравнивание flex-элементов по поперечной оси flex-контейнера.",
  syntax: "align-items: stretch | center | flex-start | flex-end | baseline | initial | inherit;",
  values: [
    { value: "stretch", description: "Значение по умолчанию. Элементы растягиваются, чтобы заполнить контейнер." },
    { value: "center", description: "Элементы располагаются по центру поперечной оси." },
    { value: "flex-start", description: "Элементы располагаются в начале поперечной оси." },
    { value: "flex-end", description: "Элементы располагаются в конце поперечной оси." },
    { value: "baseline", description: "Элементы располагаются по базовой линии текста." },
    { value: "initial", description: "Устанавливает значение свойства в значение по умолчанию." },
    { value: "inherit", description: "Наследует значение от родительского элемента." }
  ],
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
