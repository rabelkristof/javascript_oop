import { muvelet, muveletLetrehoz } from "./functions.js";

class Gomb {
  /**
   * @param {HTMLInputElement} input1
   * @param {HTMLInputElement} input2
   * @param {"+" | "-" | "*"} muveletString
   * @param {HTMLDivElement} eredmenyDiv
   */
  constructor(input1, input2, muveletString, eredmenyDiv) {
    const button = document.createElement("button");
    document.body.appendChild(button);
    button.innerText = muveletString;
    button.addEventListener(
      "click",
      this.#calculate(input1, input2, muveletString, eredmenyDiv),
    );
  }

  /**
   * @param {HTMLInputElement} input1
   * @param {HTMLInputElement} input2
   * @param {"+" | "-" | "*"} muveletString
   * @param {HTMLDivElement} eredmenyDiv
   */
  #calculate(input1, input2, muveletString, eredmenyDiv) {
    return () => {
      const n1 = Number(input1.value);
      const n2 = Number(input2.value);
      const { result } = muvelet(n1, n2, muveletLetrehoz(muveletString));
      eredmenyDiv.innerText = result.toString();
    };
  }
}

export { Gomb };
