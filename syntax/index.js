import { muvelet, muveletLetrehoz } from "./functions.js";

const in1 = document.createElement("input");
document.body.appendChild(in1);
const in2 = document.createElement("input");
document.body.appendChild(in2);

const div = document.createElement("div");
document.body.appendChild(div);

const button = document.createElement("button");
button.innerText = "osszead";
document.body.appendChild(button);

button.addEventListener("click", () => {
  const n1 = Number(in1.value);
  const n2 = Number(in2.value);
  const { result } = muvelet(n1, n2, muveletLetrehoz("+"));
  div.innerText = result;
});
