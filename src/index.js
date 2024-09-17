import "./styles.css";

import { clearDisplay, renderHomeAboutUs, renderMenuMaster, renderSet, renderFood, renderDrinks, attachEventListeners } from './functions.js';

console.log("Testing, testing, 1, 2, 3!")

window.clearDisplay = clearDisplay;
window.renderHomeAboutUs = renderHomeAboutUs;
window.attachEventListeners = attachEventListeners;
window.renderMenuMaster = renderMenuMaster;
window.renderSet = renderSet;
window.renderFood = renderFood;
window.renderDrinks = renderDrinks;

attachEventListeners();