/**
 * @import {ColspanType, RowspanType} from "./functions.js"
 */
/**
 * @callback AddCallback
 * @param {ColspanType | RowspanType} data
 * @returns {void}
 */

class Manager {
  /**
   * @type {ColspanType[] | RowspanType[]}
   */
  #dataArray;
  /**
   * @type {AddCallback}
   */
  #addCallback;

  constructor() {
    this.#dataArray = [];
  }

  /**
   * @param {AddCallback} value
   */
  set addCallback(value) {
    this.#addCallback = value;
  }

  /**
   * @param {ColspanType | RowspanType} element
   * @returns {void}
   */
  addElement(element) {
    this.#dataArray.push(element);

    if (this.#addCallback) {
      this.#addCallback(element);
    }
  }
}

export { Manager };
