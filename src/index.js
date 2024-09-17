import "./styles.css";

import { clearDisplay, renderHomeAboutUs, renderMenuMaster, appendSet, attachEventListeners } from './functions.js';

console.log("Testing, testing, 1, 2, 3!")

window.clearDisplay = clearDisplay;
window.renderHomeAboutUs = renderHomeAboutUs;
window.attachEventListeners = attachEventListeners;
window.renderMenuMaster = renderMenuMaster;
window.appendSet = appendSet;

attachEventListeners();