import { Author, AuthorManager } from "./author_manager.js";
import { createInputAndErrorDiv } from "./gomszab.min.js";
import { ViewElement } from "./view_element.js";

export class FormView extends ViewElement {
  /**
   * @type {AuthorManager}
   */
  #manager;

  /**
   * @type {FormField[]}
   */
  #formFieldList;

  /**
   * @type {HTMLFormElement}
   */
  #form;

  /**
   * @param {string} id
   * @param {import("./index.js").FormFieldType[]} formFieldList
   * @param {AuthorManager} manager
   */
  constructor(id, formFieldList, manager) {
    super(id);
    this.#manager = manager;
    this.#form = document.createElement("form");
    this.#formFieldList = [];
    for (const field of formFieldList) {
      this.#formFieldList.push(
        new FormField(field.id, field.label, field.name, this.#form),
      );
    }

    const button = document.createElement("button");
    button.innerText = "Küldés";
    this.#form.appendChild(button);
    const resultDiv = document.createElement("div");
    this.div.appendChild(resultDiv);
    this.div.appendChild(this.#form);

    this.#form.addEventListener("submit", (e) => {
      e.preventDefault();

      this.#manager.addElement(this.#createElement());
    });

    this.#manager.addElementResultCallback = (result) => {
      resultDiv.innerText = result;
      setTimeout(() => {
        resultDiv.innerText = "";
      }, 1500);
    };
  }

  /**
   * @returns {import("./index.js").AuthorType}
   */
  #createElement() {
    /**
     * @type {import("./index.js").AuthorType}
     */
    let result = {};
    for (const field of this.#formFieldList) {
      if (field.validate()) {
        result[field.name] = field.value;
      }
    }

    return result;
  }
}

class FormField {
  /**
   * @type {HTMLInputElement}
   */
  #inputElement;

  /**
   * @type {HTMLDivElement}
   */
  #errorDiv;

  /**
   * @type {string}
   */
  #name;

  get name() {
    return this.#name;
  }

  get value() {
    return this.#inputElement.value ? this.#inputElement.value : undefined;
  }

  /**
   * @param {string} id
   * @param {string} label
   * @param {string} name
   * @param {HTMLElement} parent
   */
  constructor(id, label, name, parent) {
    const { input, errorDiv } = createInputAndErrorDiv({
      id,
      label,
      name,
      parent,
    });

    this.#name = name;
    this.#inputElement = input;
    this.#errorDiv = errorDiv;
  }

  /**
   * @returns {boolean}
   */
  validate() {
    if (!this.#inputElement.value) {
      this.#errorDiv.innerText = "Mező kitöltése kötelező";
      return false;
    } else {
      this.#errorDiv.innerText = "";
      return true;
    }
  }
}
