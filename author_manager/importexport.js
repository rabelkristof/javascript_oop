import { ViewElement } from "./view_element.js";
import { AuthorManager } from "./author_manager.js";

class ImportView extends ViewElement {
  /**
   * @type {AuthorManager}
   */
  #manager;

  /**
   * @param {string} id
   * @param {AuthorManager} manager
   */
  constructor(id, manager) {
    super(id);
    this.#manager = manager;
    const resultDiv = document.createElement("div");
    this.div.appendChild(resultDiv);

    this.#manager.importResultCallback = (message) => {
      resultDiv.innerText = message;
      setTimeout(() => {
        resultDiv.innerText = "";
      }, 1500);
    };

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    this.div.appendChild(fileInput);

    fileInput.addEventListener("change", (e) => {
      e.preventDefault();
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = () => {
        /**
         * @type {import("./index.js").AuthorType[]}
         */
        const result = [];
        const content = reader.result;
        const lines = content.split("\n");
        for (const line of lines) {
          const parts = line.split(";");
          /**
           * @type {import("./index.js").AuthorType}
           */
          const authorType = {
            author: parts[0],
            work: parts[1],
            concept: parts[2],
          };
          result.push(authorType);
        }
        manager.addElementList(result);
      };
    });

    const exportButton = document.createElement("button");
    exportButton.innerText = "Export";
    this.div.appendChild(exportButton);
    exportButton.addEventListener("click", () => {
      const a = document.createElement("a");
      const fileContent = this.#manager.getExportString();
      const file = new Blob([fileContent]);
      const fileUrl = URL.createObjectURL(file);
      a.href = fileUrl;
      a.download = "export.csv";
      a.click();
      URL.revokeObjectURL(a.href);
    });
  }
}

export { ImportView };
