/**
 * @typedef {{id: number, author?: string, work?: string, concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */

const formFields = [
  {
    id: "author",
    label: "Név",
    name: "author",
  },
  {
    id: "work",
    label: "Mű",
    name: "work",
  },
  {
    id: "concept",
    label: "Fogalom",
    name: "concept",
  },
];

const headerArray = ["Szerző", "Mű", "Fogalom"];

import { NavigationBar } from "./navigation_bar.js";
import { TableView } from "./table_view.js";
import { FormView } from "./form_view.js";
import { AuthorManager } from "./author_manager.js";
import { ImportView } from "./importexport.js";

const navBar = new NavigationBar();
navBar.appendTo(document.body);

const manager = new AuthorManager();

const tableView = new TableView("table", headerArray, manager);
tableView.appendTo(document.body);
navBar.addViewElement(tableView, "Tablazat");

const formView = new FormView("form", formFields, manager);
formView.appendTo(document.body);
navBar.addViewElement(formView, "Form");

const importExportView = new ImportView("import", manager);
importExportView.appendTo(document.body);
navBar.addViewElement(importExportView, "Import/Export");

navBar.activate("table");
