import { SelectManager } from "./selectmanager.js";

class PlayArea {
  /**
   * @type {HTMLDivElement}
   */
  #div;

  /**
   * @type {SelectManager}
   */
  #manager;

  constructor(manager) {
    this.#manager = manager;
  }

  /**
   * @param {HTMLElement} parent
   */
  replaceContent(parent) {
    parent.innerHTML = "";
    parent.appendChild(this.#div);
  }

  get manager() {
    return this.#manager;
  }

  get div() {
    return this.#div;
  }
}

export { PlayArea };
