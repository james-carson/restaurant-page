// This function clears the display, ready for anything else to be added. 

import { asamPedasSet, foodSet, drinksSet } from './menu.js';

console.log(asamPedasSet, foodSet, drinksSet);

export function clearDisplay() {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

export function renderHomeAboutUs() {
    clearDisplay();

    // Container div for home/about us content

    const container_div = document.createElement('div');
    container_div.classList.add('container_div');
    document.getElementById('content').appendChild(container_div);

    // Home Title

    const home_title = document.createElement('div');
    home_title.classList.add('home_title');
    home_title.textContent = 'Welcome to our family restaurant!'
    container_div.appendChild(home_title);

    // Home Image (div + image)

    const home_img_div = document.createElement('div');
    home_img_div.classList.add('home_img_div');
    container_div.appendChild(home_img_div);

    const home_img = document.createElement('img');
    home_img.classList.add('home_img');
    home_img.src = '/images/Ikan-masak-asam-pedas.jpg';
    home_img.alt = 'Family Restaurant Image';
    home_img.style.width = '100%';
    home_img.style.height = 'auto';
    home_img_div.appendChild(home_img);

    // Home Text (div + 3 p's)

    const home_text_div = document.createElement('div');
    home_text_div.classList.add('home_text_div');
    container_div.appendChild(home_text_div);

    const home_text_1 = document.createElement('p');
    home_text_1.classList.add('home_text_1');
    home_text_1.textContent = 'Nestled in the heart of Pantai Cenang, Langkawi, Warung Asam Pedas Padu is a family-owned gem that has been serving authentic Malay cuisine for over 20 years.What started as a humble stall by the beach, where locals and tourists alike would line up for a taste of Malaysia\'s beloved dish, Asam Pedas, has blossomed into a cozy restaurant where tradition meets flavor. The restaurant was founded by Makcik Noor, a Langkawi native who inherited her secret Asam Pedas recipe from generations of Malay cooks before her. The dish, known for its tangy, spicy broth infused with tamarind, chili, and fresh herbs, quickly gained a reputation as the best on the island. Visitors would travel from far and wide to sample her famous Asam Pedas Set, featuring the freshest catch of the day and a unique blend of spices.'
    home_text_div.appendChild(home_text_1);

    const home_text_2 = document.createElement('p');
    home_text_2.classList.add('home_text_2');
    home_text_2.textContent = 'As the warung grew, so did the menu. Today, Warung Asam Pedas Padu continues to serve the signature Asam Pedas alongside a selection of other traditional Malay dishes, each made with the same love and care as when the first bowl was served. Whether you\'re craving something spicy, sweet, or refreshing, our menu is designed to offer a taste of the local culture, with dishes that speak to the rich culinary heritage of Malaysia.'
    home_text_div.appendChild(home_text_2);

    const home_text_3 = document.createElement('p');
    home_text_3.classList.add('home_text_3');
    home_text_3.textContent = 'At Warung Asam Pedas Padu, we believe in keeping our food fresh, our atmosphere relaxed, and our guests feeling like family. So whether you\'re a first-time visitor or a loyal regular, we welcome you to sit back, enjoy the vibrant flavors of Malaysia, and become part of our story.'
    home_text_div.appendChild(home_text_3);
}

export function renderMenuMaster() {
    clearDisplay();

    // Add menu container div

    const menu_div = document.createElement('div');
    menu_div.classList.add('menu_div');
    document.getElementById('content').appendChild(menu_div);

    // Add Menu title

    const menu_title = document.createElement('div');
    menu_title.classList.add('menu_title');
    menu_title.textContent = 'Our Menu'
    menu_div.appendChild(menu_title);

    // Add buttons div + 3 * menu buttons

    const menu_buttons = document.createElement('div');
    menu_buttons.classList.add('menu_buttons');
    menu_div.appendChild(menu_buttons);

    const set_button = document.createElement('button');
    set_button.classList.add('set_button');
    set_button.textContent = 'Signature Sets'
    menu_buttons.appendChild(set_button);

    const food_button = document.createElement('button');
    food_button.classList.add('food_button');
    food_button.textContent = 'Other Dishes'
    menu_buttons.appendChild(food_button);

    const drinks_button = document.createElement('button');
    drinks_button.classList.add('drinks_button');
    drinks_button.textContent = 'Drinks'
    menu_buttons.appendChild(drinks_button);

    // Add menu grid for different sets to be appended to

    const menu_grid = document.createElement('div');
    menu_grid.classList.add('menu_grid');
    menu_div.appendChild(menu_grid);

    // Nothing else after here - need to set up other functions.
}

export function appendSet() {
    clearDisplay();
    renderMenuMaster();

    const menu_grid = document.getElementsByClassName('menu_grid')[0];

    for (let i = 0; i < asamPedasSet.length; i++) {
        const set = asamPedasSet[i];
        
        // Append the card

        const card = document.createElement('div');
        card.classList.add('card');
        menu_grid.appendChild(card);

        // Append the card image div and then the image itself

        const card_img_div = document.createElement('div');
        card_img_div.classList.add('card_img_div');
        card.appendChild(card_img_div);

        const card_img = document.createElement('img');
        card_img.classList.add('card_img');
        card_img.src = set.set_image;
        card_img.alt = set.set_title;
        card_img.style.width = 'auto';
        card_img.style.height = '100%';
        card_img_div.appendChild(card_img);

        // Append the title

        const card_title = document.createElement('div');
        card_title.classList.add('card_title');
        card_title.textContent = set.set_title;
        card.appendChild(card_title);

        // Append the text

        const card_text = document.createElement('div');
        card_text.classList.add('card_text');
        card_text.textContent = set.set_text;
        card.appendChild(card_text);

        // Append the price

        const card_price = document.createElement('div');
        card_price.classList.add('card_price');
        card_price.textContent = set.set_price;
        card.appendChild(card_price);
    }
}

export function appendFood() {
    clearDisplay();
    renderMenuMaster();

    const menu_grid = document.getElementsByClassName('menu_grid')[0];

    for (let i = 0; i < foodSet.length; i++) {
        const set = foodSet[i];
        
        // Append the card

        const card = document.createElement('div');
        card.classList.add('card');
        menu_grid.appendChild(card);

        // Append the card image div and then the image itself

        const card_img_div = document.createElement('div');
        card_img_div.classList.add('card_img_div');
        card.appendChild(card_img_div);

        const card_img = document.createElement('img');
        card_img.classList.add('card_img');
        card_img.src = set.food_image;
        card_img.alt = set.food_title;
        card_img.style.width = 'auto';
        card_img.style.height = '100%';
        card_img_div.appendChild(card_img);

        // Append the title

        const card_title = document.createElement('div');
        card_title.classList.add('card_title');
        card_title.textContent = set.food_title;
        card.appendChild(card_title);

        // Append the text

        const card_text = document.createElement('div');
        card_text.classList.add('card_text');
        card_text.textContent = set.food_text;
        card.appendChild(card_text);

        // Append the price

        const card_price = document.createElement('div');
        card_price.classList.add('card_price');
        card_price.textContent = set.food_price;
        card.appendChild(card_price);
    }
}

export function appendDrinks() {
    clearDisplay();
    renderMenuMaster();

    const menu_grid = document.getElementsByClassName('menu_grid')[0];

    for (let i = 0; i < drinksSet.length; i++) {
        const set = drinksSet[i];
        
        // Append the card

        const card = document.createElement('div');
        card.classList.add('card');
        menu_grid.appendChild(card);

        // Append the card image div and then the image itself

        const card_img_div = document.createElement('div');
        card_img_div.classList.add('card_img_div');
        card.appendChild(card_img_div);

        const card_img = document.createElement('img');
        card_img.classList.add('card_img');
        card_img.src = set.drinks_image;
        card_img.alt = set.drinks_title;
        card_img.style.width = 'auto';
        card_img.style.height = '100%';
        card_img_div.appendChild(card_img);

        // Append the title

        const card_title = document.createElement('div');
        card_title.classList.add('card_title');
        card_title.textContent = set.drinks_title;
        card.appendChild(card_title);

        // Append the text

        const card_text = document.createElement('div');
        card_text.classList.add('card_text');
        card_text.textContent = set.drinks_text;
        card.appendChild(card_text);

        // Append the price

        const card_price = document.createElement('div');
        card_price.classList.add('card_price');
        card_price.textContent = set.drinks_price;
        card.appendChild(card_price);
    }
}

function renderContact() {
    clearDisplay();
}

export function attachEventListeners() {
    document.addEventListener('DOMContentLoaded', (event) => {
        renderHomeAboutUs();
    });

    const aboutUsButton = document.getElementById('about_us');

    aboutUsButton.addEventListener('click', () => {
        clearDisplay();
        renderHomeAboutUs();
    });

}