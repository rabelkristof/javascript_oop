/**
 * @typedef {{question: string, answers: string[], rightAnswer: string}} QuestionType
 * @typedef {{question: string, answers: string[]}} QuestionViewType
 */

/**
 * @callback NextQuestionCallback
 * @param {QuestionViewType} question
 * @returns {void}
 */

/**
 * @callback FinishResultCallback
 * @param {string} result
 * @returns {void}
 */

class QuizManager {
  /**
   * @type {number}
   */
  #currentQuestionNumber;

  /**
   * @type {QuestionType[]}
   */
  #questions;

  /**
   * @type {string[]}
   */
  #questionAnswers;

  /**
   * @type {NextQuestionCallback}
   */
  #nextQuestionCallback;

  /**
   * @type {FinishResultCallback}
   */
  #finishResultCallback;

  /**
   * @param {NextQuestionCallback} value
   */
  set nextQuestionCallback(value) {
    this.#nextQuestionCallback = value;
  }

  /**
   * @param {FinishResultCallback} value
   */
  set finishResultCallback(value) {
    this.#finishResultCallback = value;
  }

  /**
   * @param {QuestionType[]} questions
   */
  constructor(questions) {
    this.#currentQuestionNumber = 0;
    this.#questionAnswers = [];
    this.#questions = questions;
  }

  /**
   * @returns {void}
   */
  startQuiz() {
    if (this.#questions.length != 0) {
      this.#nextQuestionCallback(this.#questions[0]);
    }
  }

  /**
   * @param {string} answer
   * @returns {void}
   */
  nextQuestion(answer) {
    this.#questionAnswers.push(answer);
    if (this.#currentQuestionNumber + 1 < this.#questions.length) {
      this.#currentQuestionNumber++;
      this.#nextQuestionCallback(this.#questions[this.#currentQuestionNumber]);
    } else {
      let correctAnswerCount = 0;
      for (let i = 0; i < this.#questionAnswers.length; i++) {
        if (this.#questions[i].rightAnswer == this.#questionAnswers[i]) {
          correctAnswerCount++;
        }
      }

      this.#finishResultCallback(
        `{correctAnswerCount} db kérdést találtál el.`,
      );
    }
  }
}

export { QuizManager };
