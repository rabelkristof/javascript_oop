/**
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
 */

/**
 * @callback ValamiFunction
 * @param {HTMLTableSectionElement} tbody
 */

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [
  { name: "Szerző" },
  { name: "Mű" },
  { name: "Fogalmak" },
];
/** @type {HeaderType[]}   */
const colspanHeaderArr = [
  { name: "Szerző" },
  { name: "Mű" },
  { name: "Fogalmak", colSpan: 2 },
];

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
  {
    author: "Appolliniare",
    title1: "A megsebzett galamb és a szökőkút",
    concepts1: "képvers",
    title2: "Búcsú",
    concepts2: "avantgárd",
  },
  {
    author: "Thomas Mann",
    title1: "Mario és a varázsló",
    concepts1: "kisregény",
  },
  {
    author: "Franz Kafka",
    title1: "A per",
    concepts1: "képvers",
    title2: "Az átvlátozás",
    concepts2: "kisregény",
  },
];

/** @type {ColspanRowType[]} */
const colspanBodyArr = [
  {
    author: "Appolliniare",
    title: "A megsebzett galamb és a szökőkút",
    concepts: "Képvers",
    concepts2: "Emlékezés",
  },
  {
    author: "Appolliniare",
    title: "Búcsú",
    concepts: "Avantgárd",
  },
  {
    author: "Thomas Mann",
    title: "Mario és a varázsló",
    concepts: "Kisregény",
  },
  {
    author: "Franz Kafka",
    title: "A per",
    concepts: "regény",
  },
  {
    author: "Franz Kafka",
    title: "Az átváltozás",
    concepts: "kisregény",
    concepts2: "groteszk",
  },
];

// renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr);
// renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr);

class Table {
  /**
   * @type {HTMLTableSectionElement}
   */
  #tbody;

  get tbody() {
    return this.#tbody;
  }

  /**
   * @param {HeaderType[]} tableHeaderArray
   */
  constructor(tableHeaderArray) {
    this.#tbody = makeTableBodyWithHeader(tableHeaderArray);
  }

  /**
   * @param {ValamiFunction} param
   */
  valami(param) {
    param(this.#tbody);
  }
}

class ColspanTable extends Table {
  /**
   * @param {HeaderType[]} tableHeaderArray
   */
  constructor(tableHeaderArray) {
    super(tableHeaderArray);
  }

  /**
   * @param {ColspanRowType[]} rowArray
   */
  render(rowArray) {
    renderColspanBody(this.tbody, rowArray);
  }
}

class RowspanTable extends Table {
  /**
   * @param {HeaderType[]} tableHeaderArray
   */
  constructor(tableHeaderArray) {
    super(tableHeaderArray);
  }

  /**
   * @param {RowspanRowType[]} rowArray
   */
  render(rowArray) {
    renderRowspanBody(this.tbody, rowArray);
  }
}

const colSpanTable = new ColspanTable(colspanHeaderArr);
colSpanTable.render(colspanBodyArr);

const rowSpanTable = new RowspanTable(rowspanHeaderArr);
rowSpanTable.render(rowspanBodyArr);

const button = document.createElement("button");
document.body.appendChild(button);
button.innerText = "Rowspan hozzáadás";
button.addEventListener("click", onButtonClick.bind(rowSpanTable));

/**
 * @this {RowspanTable} Ez az a példány, amin meghívjuk a metódust.
 */
function onButtonClick() {
  /**
   * @type {RowspanRowType}
   */
  const obj = {
    author: "Franz Kafka",
    title1: "A per",
    concepts1: "képvers",
    title2: "Az átvlátozás",
    concepts2: "kisregény",
  };

  this.valami(function (body) {
    const tr = document.createElement("tr");
    body.appendChild(tr);
    const author = document.createElement("td");
    tr.appendChild(author);
    author.innerText = obj.author;
    const title1 = document.createElement("td");
    tr.appendChild(title1);
    title1.innerText = obj.title1;
    const concepts1 = document.createElement("td");
    tr.appendChild(concepts1);
    concepts1.innerText = obj.concepts1;

    if (obj.title2 && obj.concepts2) {
      const tr2 = document.createElement("tr");
      body.appendChild(tr2);
      author.rowSpan = 2;
      const title2 = document.createElement("td");
      tr2.appendChild(title2);
      title2.innerText = obj.title2;
      const concepts2 = document.createElement("td");
      tr2.appendChild(concepts2);
      concepts2.innerText = obj.concepts2;
    }
  });
}

/**
 * @this {ColspanTable}
 */
function onButtonClickColSpan() {
  /**
   * @type {ColspanRowType}
   */
  const obj = {
    author: "Franz Kafka",
    title: "Az átváltozás",
    concepts: "kisregény",
    concepts2: "groteszk",
  };

  this.valami(function (tbody) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    const author = document.createElement("td");
    tr.appendChild(author);
    author.innerText = obj.author;
    const title = document.createElement("td");
    tr.appendChild(title);
    title.innerText = obj.title;
    const concepts = document.createElement("td");
    tr.appendChild(concepts);
    concepts.innerText = obj.concepts;

    if (obj.concepts2) {
      const concepts2 = document.createElement("td");
      tr.appendChild(concepts2);
      concepts2.innerText = obj.concepts2;
    } else {
      concepts.colSpan = 2;
    }
  });
}

const buttonColSpan = document.createElement("button");
document.body.appendChild(buttonColSpan);
buttonColSpan.innerText = "Colspan hozzáadás";
buttonColSpan.addEventListener(
  "click",
  onButtonClickColSpan.bind(colSpanTable),
);
