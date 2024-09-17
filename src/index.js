import "./styles.css";

import { clearDisplay, renderHomeAboutUs, renderMenuMaster, appendSet, appendFood, appendDrinks, attachEventListeners } from './functions.js';

console.log("Testing, testing, 1, 2, 3!")

window.clearDisplay = clearDisplay;
window.renderHomeAboutUs = renderHomeAboutUs;
window.attachEventListeners = attachEventListeners;
window.renderMenuMaster = renderMenuMaster;
window.appendSet = appendSet;
window.appendFood = appendFood;
window.appendDrinks = appendDrinks;

attachEventListeners();