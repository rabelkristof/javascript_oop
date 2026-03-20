/**
 * @callback TableCallback
 * @param {Author[]} authorList
 * @returns {void}
 */

/**
 * @callback AddElementResultCallback
 * @param {string} message
 * @returns {void}
 */

/**
 * @callback ImportResultCallback
 * @param {string} message
 * @returns {void}
 */

export class AuthorManager {
  /**
   * @type {Author[]}
   */
  #authorList;
  /**
   * @type {TableCallback}
   */
  #tableCallback;

  /**
   * @type {AddElementResultCallback}
   */
  #addElementResultCallback;

  /**
   * @type {ImportResultCallback}
   */
  #importResultCallback;

  constructor() {
    this.#authorList = [];
  }

  /**
   * @param {TableCallback} value
   */
  set TableCallback(value) {
    this.#tableCallback = value;
  }

  /**
   * @param {AddElementResultCallback} value
   */
  set addElementResultCallback(value) {
    this.#addElementResultCallback = value;
  }

  /**
   * @param {ImportResultCallback} value
   */
  set importResultCallback(value) {
    this.#importResultCallback = value;
  }

  /**
   * @param {import("./index.js").AuthorType} element
   */
  addElement(element) {
    const author = new Author();
    author.id = this.#authorList.length;
    author.name = element.author;
    author.work = element.work;
    author.concept = element.concept;
    if (author.validate()) {
      this.#authorList.push(author);
      this.#addElementResultCallback("Sikeres elemfelvétel");
    } else {
      this.#addElementResultCallback("Sikertelen elemfelvétel");
    }
  }

  /**
   *
   * @param {import("./index.js").AuthorType[]} elementList
   */
  addElementList(elementList) {
    for (const elem of elementList) {
      const author = new Author();
      author.id = this.#authorList.length;
      author.name = elem.author;
      author.work = elem.work;
      author.concept = elem.concept;
      if (author.validate()) {
        this.#authorList.push(author);
        this.#importResultCallback("Sikeres importálás");
      } else {
        this.#importResultCallback("Sikertelen importálás");
        break;
      }
    }
  }

  /**
   * @returns {void}
   */
  getAllElement() {
    this.#tableCallback(this.#authorList);
  }

  /**
   * @returns {string}
   */
  getExportString() {
    const result = [];
    for (const author of this.#authorList) {
      result.push(`${author.name};${author.work};${author.concept}`);
    }

    return result.join("\n");
  }
}

export class Author {
  /**
   * @type {string}
   */
  #id;
  /**
   * @type {string}
   */
  #name;
  /**
   * @type {string}
   */
  #work;
  /**
   * @type {string}
   */
  #concept;

  /**
   * @returns {string}
   */
  get id() {
    return this.#id;
  }
  /**
   * @returns {string}
   */
  get name() {
    return this.#name;
  }
  /**
   * @returns {string}
   */
  get work() {
    return this.#work;
  }
  /**
   * @returns {string}
   */
  get concept() {
    return this.#concept;
  }
  /**
   * @param {string} value
   */
  set id(value) {
    this.#id = value;
  }
  /**
   * @param {string} value
   */
  set name(value) {
    this.#name = value;
  }
  /**
   * @param {string} value
   */
  set work(value) {
    this.#work = value;
  }
  /**
   * @param {string} value
   */
  set concept(value) {
    this.#concept = value;
  }

  /**
   * @returns {boolean}
   */
  validate() {
    return this.#name && this.concept && this.#work;
  }
}
