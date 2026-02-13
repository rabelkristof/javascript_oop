/**
 * @import {} from "./functions.js"
 */
import { Manager } from "./manager.js";

/**
 * @callback TableCallback
 * @param {HTMLTableSectionElement} tbody
 * @param {ColspanType | RowspanType} element
 * @returns {void}
 */

class Table {
  /**
   * @type {HTMLTableSectionElement}
   */
  #tbody;
  /**
   * @type {Manager}
   */
  #manager;

  /**
   *
   * @param {HeaderArrayType} headerArray
   * @param {Manager} manager
   */
  constructor(headerArray, manager) {
    this.#manager = manager;

    const table = document.createElement("table");
    document.body.appendChild(table);

    const thead = document.createElement("thead");
    table.appendChild(thead);

    const tr = document.createElement("tr");
    thead.appendChild(tr);

    for (const header of headerArray) {
      const th = document.createElement("th");
      th.innerText = header.name;

      if (header.colspan) {
        th.colSpan = header.colspan;
      }

      tr.appendChild(th);
    }

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    this.#tbody = tbody;
  }

  /**
   *
   * @param {TableCallback} callback
   */
  setAppendRow(callback) {
    this.#manager.addCallback = (element) => {
      callback(this.#tbody, element);
    };
  }
}

export { Table };
