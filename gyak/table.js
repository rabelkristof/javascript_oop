/**
 * @import {HeaderCallback, ColspanType, RowspanType} from "./functions.js"
 */
import { createTable } from "./functions.js";
import { Manager } from "./manager.js";

class Table {
  /**
   * @type {HTMLTableRowElement}
   */
  #tbody;

  /**
   * @type {Manager}
   */
  #manager;

  /**
   * @param {Manager} manager
   * @param {HTMLElement} parent
   * @param {HeaderCallback} headerCallback
   */
  constructor(manager, parent, headerCallback) {
    this.#manager = manager;
    this.#tbody = createTable(parent, headerCallback);
  }

  /**
   * @param {(tbody: HTMLTableSectionElement, element: ColspanType) => void
   * | (tbody: HTMLTableSectionElement, element: RowspanType) => void} elem
   */
  addElementCallback(callback) {
    this.#manager.addCallback = (elem) => {
      callback(this.#tbody, elem);
    };
  }
}

export { Table };
