import data from "./data.json" with { type: "json" };
import { SelectManager } from "./selectmanager.js";
import { ViewElement } from "./view.js";

const manager = new SelectManager(data.questions);
const view = new ViewElement(manager);
manager.play();
