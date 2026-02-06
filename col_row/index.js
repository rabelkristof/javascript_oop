import { Manager } from "./manager.js";
import { Table } from "./table.js";
import data from "./data.json" with { type: "json" };

const colspanManager = new Manager();
const colspanTable = new Table(data.colspanHeaderArray, colspanManager);
colspanTable.setAppendRow((tbody, element) => {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);

  const neve = document.createElement("td");
  neve.innerText = element.neve;
  tr.appendChild(neve);
  const kor = document.createElement("td");
  kor.innerText = element.kor;
  tr.appendChild(kor);
  const szerelme1 = document.createElement("td");
  szerelme1.innerText = element.szerelme1;
  tr.appendChild(szerelme1);

  if (element.szerelme2) {
    const szerelme2 = document.createElement("td");
    szerelme2.innerText = element.szerelme2;
    tr.appendChild(szerelme2);
  } else {
    szerelme1.colSpan = 2;
  }
});

for (const elem of data.colspanDataArr) {
  colspanManager.addElement(elem);
}
