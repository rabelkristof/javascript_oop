/**
 * @import {ColspanType, RowspanType, FormFieldType, CreateFieldsCallback, SubmitEventListener} from "./functions.js"
 */
import { createForm, createInputField } from "./functions.js";
import { Manager } from "./manager.js";

class FormController {
  /**
   * @type {HTMLFormElement}
   */
  #form;

  /**
   * @type {FormField[]}
   */
  #formFields;

  /**
   * @type {Manager}
   */
  #manager;

  /**
   * @param {Manager} manager
   * @param {FormFieldType[]} formFields
   * @param {HTMLElement} parent
   */
  constructor(manager, formFields, parent) {
    this.#manager = manager;
    this.#formFields = [];
    this.#form = createForm(
      (form) => {
        for (const field of formFields) {
          this.#formFields.push(new FormField(field, form));
        }
      },
      (e) => {
        e.preventDefault();

        if (this.#validateFields()) {
          this.#manager.addElement(this.#createElement());
          this.#form.reset();
        }
      },
    );

    parent.appendChild(this.#form);
  }

  /**
   * @returns {boolean}
   */
  #validateFields() {
    let valid = true;
    for (const field of this.#formFields) {
      if (!field.validate()) {
        valid = false;
      }
    }

    return valid;
  }

  /**
   * @returns {ColspanType | RowspanType}
   */
  #createElement() {
    const obj = {};
    for (const field of this.#formFields) {
      obj[field.name] = field.value;
    }

    return obj;
  }
}

class FormField {
  /**
   * @type {HTMLInputElement}
   */
  #input;

  /**
   * @type {boolean}
   */
  #required;

  /**
   * @type {HTMLDivElement}
   */
  #errorDiv;

  /**
   * @type {string}
   */
  #name;

  get value() {
    return this.#input.value ? this.#input.value : undefined;
  }

  get name() {
    return this.#name;
  }

  /**
   * @param {FormFieldType} param0
   * @param {HTMLFormElement} form
   */
  constructor({ label, name, id, required }, form) {
    const { errorElement, input } = createInputField({
      id,
      name,
      labelContent: label,
      parent: form,
    });
    this.#errorDiv = errorElement;
    this.#input = input;
    this.#required = required;
    this.#name = name;
  }

  /**
   * @returns {boolean}
   */
  validate() {
    this.#errorDiv.innerText = "";
    if (this.#required && !this.value) {
      this.#errorDiv.innerText = "A mező kitöltése kötelező";
      return false;
    }

    return true;
  }
}

export { FormController as Form, FormField };
