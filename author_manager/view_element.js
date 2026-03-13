/**
 * @callback ActivateCallback
 * @returns {void}
 */
import { show, hide } from "./gomszab.min.js";

export class ViewElement {
  /**
   * @type {HTMLDivElement}
   */
  #div;
  /**
   * @type {string}
   */
  #id;
  /**
   * @type {ActivateCallback}
   */
  #activateCallback;

  /**
   * @returns {string}
   */
  get id() {
    return this.#id;
  }

  /**
   * @type {HTMLDivElement}
   */
  get div() {
    return this.#div;
  }

  /**
   * @param {ActivateCallback} callback
   */
  set ActivateCallback(callback) {
    this.#activateCallback = callback;
  }

  /**
   *
   * @param {string} id
   */
  constructor(id) {
    this.#id = id;
    this.#div = document.createElement("div");
    this.#div.id = id;
  }

  /**
   *
   * @param {HTMLElement} parent
   */
  appendTo(parent) {
    parent.appendChild(this.#div);
  }

  /**
   * @param {string} id
   */
  activate(id) {
    if (this.#id == id) {
      show(this.#div);
      if (this.#activateCallback) this.#activateCallback();
    } else {
      hide(this.#div);
    }
  }
}
