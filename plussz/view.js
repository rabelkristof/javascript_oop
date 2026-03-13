import { QuizManager } from "./manager";

class View {
  /**
   * @type {QuizManager}
   */
  #manager;

  /**
   * @type {HTMLDivElement}
   */
  #container;

  /**
   * @param {QuizManager} manager
   */
  constructor(manager) {
    this.#container = document.createElement("div");
    manager.finishResultCallback((result) => {
      this.#container.innerHTML = "";
      this.#container.innerText = result;
    });
    manager.nextQuestionCallback((question) => {
      this.#container.innerHTML = "";
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
      questionDiv.innerText = question;

      const answersDiv = document.createElement("div");
      answersDiv.classList.add("answers");
    });
  }

  /**
   * @param {HTMLElement} parent
   */
  appendTo(parent) {
    parent.appendChild(this.#container);
  }
}

export { View };
