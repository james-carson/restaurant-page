import "./styles.css";

import { clearDisplay, renderHomeAboutUs, renderMenuMaster, renderSet, renderFood, renderDrinks, renderContact, attachEventListeners } from './functions.js';

console.log("Testing, testing, 1, 2, 3!")

window.clearDisplay = clearDisplay;
window.renderHomeAboutUs = renderHomeAboutUs;
window.renderMenuMaster = renderMenuMaster;
window.renderSet = renderSet;
window.renderFood = renderFood;
window.renderDrinks = renderDrinks;
window.renderContact = renderContact;
window.attachEventListeners = attachEventListeners;

attachEventListeners();