import "./styles.css";

import { clearDisplay, renderHomeAboutUs, renderMenuMaster, attachEventListeners } from './functions.js';

import { asamPedasSet, foodSet, drinksSet } from './menu.js';

console.log(asamPedasSet, foodSet, drinksSet);

console.log("Testing, testing, 1, 2, 3!")

window.clearDisplay = clearDisplay;
window.renderHomeAboutUs = renderHomeAboutUs;
window.attachEventListeners = attachEventListeners;
window.renderMenuMaster = renderMenuMaster;

attachEventListeners();