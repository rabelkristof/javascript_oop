import { ViewElement } from "./view_element.js";
import { createTableCell, createTableHeader } from "./gomszab.min.js";
import { AuthorManager } from "./author_manager.js";

export class TableView extends ViewElement {
  /**
   * @type {AuthorManager}
   */
  #manager;
  /**
   * @type {HTMLTableSectionElement}
   */
  #tbody;
  /**
   *
   * @param {string} id
   * @param {string[]} headerArr
   * @param {AuthorManager} manager
   */
  constructor(id, headerArr, manager) {
    super(id);
    this.#manager = manager;
    this.#tbody = document.createElement("tbody");
    const table = document.createElement("table");
    this.div.appendChild(table);
    const thead = createTableHeader(headerArr);
    table.appendChild(thead);
    table.appendChild(this.#tbody);
    this.#manager.TableCallback = (authorList) => {
      if (authorList.length == 0) {
        const tr = document.createElement("tr");
        this.#tbody.appendChild(tr);
        const cell = createTableCell(tr, "nincs megjelenítendő sor");
        cell.colSpan = 3;
      }
      for (const author of authorList) {
        const tr = document.createElement("tr");
        this.#tbody.appendChild(tr);

        createTableCell(tr, author.name);
        createTableCell(tr, author.work);
        createTableCell(tr, author.concept);
      }
    };

    this.ActivateCallback = () => {
      this.#tbody.innerHTML = "";
      this.#manager.getAllElement();
    };
  }
}
