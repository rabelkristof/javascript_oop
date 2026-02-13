/**
 * @import "./functions.js"
 */

import { Manager } from "./manager.js";

class FormController {
  /**
   * @type {Manager}
   */
  #manager;

  /**
   * @type {FormField[]}
   */
  #formFieldElemList;

  /**
   * @param {FormFieldType[]} formFieldList
   * @param {Manager} manager
   */
  constructor(formFieldList, manager) {
    this.#manager = manager;
    const form = document.createElement("form");
    document.body.appendChild(form);
    // Itt lesznek a beviteli mezők renderelései
    this.#formFieldElemList = [];
    for (const formField of formFieldList) {
      const { id, name, label, required } = formField;
      const formFieldElem = new FormField(
        id,
        name,
        label,
        required,
        // TODO: add type
        form,
      );

      this.#formFieldElemList.push(formFieldElem);
    }

    const button = document.createElement("button");
    button.innerText = "Küldés";
    form.appendChild(button);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const elem = this.#createElement();

      if (elem) {
        this.#manager.addElement(elem);
        form.reset();
      }
    });
  }

  /**
   * @returns {ColspanType | RowspanType | null}
   */
  #createElement() {
    const resultElem = {};
    let valid = true;
    for (const field of this.#formFieldElemList) {
      if (field.validate()) {
        resultElem[field.name] = field.value;
      } else {
        valid = false;
      }
    }

    if (valid) {
      return resultElem;
    } else {
      return null;
    }
  }
}

class FormField {
  /**
   * @type {HTMLInputElement}
   */
  #input;

  /**
   * @type {string}
   */
  #name;

  /**
   * @type {boolean}
   */
  #required;

  /**
   * @type {HTMLDivElement}
   */
  #errorDiv;

  get value() {
    return this.#input.value ? this.#input.value : undefined;
  }

  get name() {
    return this.#name;
  }

  /**
   * @param {string} id
   * @param {string} name
   * @param {string} labelContent
   * @param {boolean} required
   * @param {HTMLElement} parent
   */
  constructor(id, name, labelContent, required, parent) {
    const div = document.createElement("div");
    parent.appendChild(div);

    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = labelContent;
    div.appendChild(label);

    div.appendChild(document.createElement("br"));

    const input = document.createElement("input");
    input.id = id;
    input.name = name;
    div.appendChild(input);

    this.#input = input;
    this.#name = name;

    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    div.appendChild(errorDiv);

    this.#required = required;
    this.#errorDiv = errorDiv;
  }

  /**
   * @returns {boolean}
   */
  validate() {
    let result = true;
    if (this.#required && !this.value) {
      result = false;
      this.#errorDiv.innerText = "Kötelező";
    } else {
      this.#errorDiv.innerText = "";
    }

    return result;
  }
}

export { FormController };
