/**
 * @typedef {{question: string, valid: boolean}} QuestionType
 */

/**
 * @callback NextQuestionCallback
 * @param {import("./view.js").QuestionViewType} question
 */

class SelectManager {
  /**
   * @type {number}
   */
  #questionNumber;

  /**
   * @type {QuestionType[]}
   */
  #questions;

  /**
   * @type {NextQuestionCallback}
   */
  #nextQuestionCallback;

  /**
   * @type {boolean[]}
   */
  #questionAnswers;

  /**
   *
   * @param {QuestionType[]} questions
   */
  constructor(questions) {
    this.#questions = questions;
    this.#questionNumber = 0;
  }

  /**
   * @returns {void}
   */
  play() {
    this.#nextQuestionCallback(this.#questions[0]);
  }

  /**
   * @returns {void}
   */
  reset() {}

  /**
   * @type {NextQuestionCallback}
   */
  set nextQuestionCallback(value) {
    this.#nextQuestionCallback = value;
  }
}

export { SelectManager };
