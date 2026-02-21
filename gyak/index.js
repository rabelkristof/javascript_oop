import { Manager } from "./manager.js";
import { Table } from "./table.js";
import data from "./data.json" with { type: "json" };
import { tbodyRenderColspan, tbodyRenderRowspan } from "./functions.js";
import { Form } from "./form.js";

const colspanManager = new Manager();
const colspanTable = new Table(colspanManager, document.body, (tr) => {
  for (const header of data.colspanHeaderArray) {
    const th = document.createElement("th");
    th.innerText = header.name;
    th.colSpan = header.colspan;
    tr.appendChild(th);
  }
});
colspanTable.addElementCallback(tbodyRenderColspan);

for (const elem of data.colspanDataArr) {
  colspanManager.addElement(elem);
}

new Form(colspanManager, data.colspanFormFieldList, document.body);

const rowspanManager = new Manager();
const rowspanTable = new Table(rowspanManager, document.body, (tr) => {
  for (const header of data.rowspanHeaderArray) {
    const th = document.createElement("th");
    th.innerText = header.name;
    th.colSpan = header.colspan;
    tr.appendChild(th);
  }
});
rowspanTable.addElementCallback(tbodyRenderRowspan);

for (const elem of data.rowspanTableArray) {
  rowspanManager.addElement(elem);
}

new Form(rowspanManager, data.rowspanFormFieldList, document.body);