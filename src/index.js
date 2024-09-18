import "./styles.css";

import { clearDisplay, renderHomeAboutUs, renderMenuMaster, renderSet, renderFood, renderDrinks, renderContact, attachMainButtonListeners, attachMenuButtonListeners } from './functions.js';

window.clearDisplay = clearDisplay;
window.renderHomeAboutUs = renderHomeAboutUs;
window.renderMenuMaster = renderMenuMaster;
window.renderSet = renderSet;
window.renderFood = renderFood;
window.renderDrinks = renderDrinks;
window.renderContact = renderContact;
window.attachMainButtonListeners = attachMainButtonListeners;
window.attachMenuButtonListeners = attachMenuButtonListeners;

attachMainButtonListeners();