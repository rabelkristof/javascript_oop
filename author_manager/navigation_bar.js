import { ViewElement } from "./view_element.js";
import { createRadioButton } from "./gomszab.min.js";

export class NavigationBar extends ViewElement {
  /**
   * @type {ViewElement[]}
   */
  #viewElementList;

  constructor() {
    super("navbar");
    this.#viewElementList = [];
    this.div.addEventListener("change", (e) => {
      const radioButtonValue = e.target.value;
      this.activate(radioButtonValue);
    });
  }

  /**
   * @param {ViewElement} element
   * @param {string} label
   */
  addViewElement(element, label) {
    this.#viewElementList.push(element);
    const radioButton = createRadioButton({
      id: element.id,
      name: this.id,
      label,
    });
    this.div.appendChild(radioButton);
  }

  /**
   * @override
   * @param {string} id
   */
  activate(id) {
    for (const obj of this.#viewElementList) {
      obj.activate(id);
    }
    this.div.querySelector(`#${id}`).checked = true;
  }
}
