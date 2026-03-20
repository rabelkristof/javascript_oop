/**
 * @typedef {{question: string}} QuestionViewType
 */

import { PlayArea } from "./playarea.js";
import { SelectManager } from "./selectmanager.js";

class ViewElement {
  /**
   * @type {SelectManager}
   */
  #manager;

  /**
   * @type {HTMLDivElement}
   */
  #container;

  /**
   * @param {SelectManager} manager
   */
  constructor(manager) {
    this.#manager = manager;
    this.#manager.nextQuestionCallback = (question) => {
      const cardArea = new PlayArea(this.#manager, question);
    };
    this.#container = document.createElement("div");
    const header = document.createElement("div");
    header.innerText = "Igaz vagy hamis?";
    this.#container.appendChild(header);
  }

  /**
   * @param {HTMLElement} parent
   */
  appendTo(parent) {
    parent.appendChild(this.#container);
  }
}

class CardArea extends PlayArea {
  /**
   * @param {SelectManager} manager
   * @param {QuestionViewType} question
   */
  constructor(manager, question) {
    super(manager);

    const trueButton = document.createElement("button");
    trueButton.classList.add("card-true");
    trueButton.innerText = question.question;

    const falseButton = document.createElement("button");
    falseButton.classList.add("card-false");
    falseButton.innerText = question.question;

    this.div.appendChild(trueButton);
    this.div.appendChild(falseButton);
    this.replaceContent();
  }
}

class ResultArea extends PlayArea {
  /**
   * @param {SelectManager} manager
   */
  constructor(manager) {
    super(manager);
  }
}

export { ViewElement };
