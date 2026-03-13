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
   * @param {AuthorType} element
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
   * @returns {void}
   */
  getAllElement() {
    this.#tableCallback(this.#authorList);
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
