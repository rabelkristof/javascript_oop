/**
 * @import {ColspanType, RowspanType} from "./functions.js"
 */

/**
 * @callback AddCallback
 * @param {HTMLTableSectionElement} tbody
 * @param {ColspanType | RowspanType} elem
 * @returns
 */

class Manager {
  /**
   * @type {ColspanType[] | RowspanType[]}
   */
  #data;

  /**
   * @type {AddCallback}
   */
  #callback;

  set addCallback(value) {
    this.#callback = value;
  }

  /**
   * @returns {Manager}
   */
  constructor() {
    this.#data = [];
  }

  /**
   * @param {HTMLTableSectionElement} tbody
   * @param {ColspanType | RowspanType} elem
   * @returns {void}
   */
  addElement(elem) {
    this.#data.push(elem);

    if (this.#callback) {
      this.#callback(elem);
    }
  }
}

export { Manager };
