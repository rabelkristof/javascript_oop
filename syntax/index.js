import { Gomb } from "./gomb.js";

const in1 = document.createElement("input");
document.body.appendChild(in1);
const in2 = document.createElement("input");
document.body.appendChild(in2);

const div = document.createElement("div");
document.body.appendChild(div);

new Gomb(in1, in2, "+", div);
new Gomb(in1, in2, "-", div);
new Gomb(in1, in2, "*", div);