// This function clears the display, ready for anything else to be added. 

export function clearDisplay() {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

export function renderHomeAboutUs() {
    clearDisplay();

    const container_div = document.createElement('div');
    container_div.classList.add('container_div');
    document.getElementById('content').appendChild(container_div);

    const home_title = document.createElement('div');
    home_title.classList.add('home_title');
    home_title.textContent = 'Welcome to our family restaurant!'
    document.querySelector('container_div').appendChild(home_title);

    const home_img = document.createElement('div');
    home_img.classList.add('home_img');
    document.querySelector('container_div').appendChild(home_img);
    // Need to append an image to this div - Or use a background image for it - try both!

    const home_text = document.createElement('div');
    home_text.classList.add('home_text');
    home_title.textContent = 'Nestled in the heart of Pantai Cenang, Langkawi, Warung Asam Pedas Padu is a family-owned gem that has been serving authentic Malay cuisine for over 20 years.What started as a humble stall by the beach, where locals and tourists alike would line up for a taste of Malaysia\'s beloved dish, Asam Pedas, has blossomed into a cozy restaurant where tradition meets flavor. The restaurant was founded by Makcik Noor, a Langkawi native who inherited her secret Asam Pedas recipe from generations of Malay cooks before her. The dish, known for its tangy, spicy broth infused with tamarind, chili, and fresh herbs, quickly gained a reputation as the best on the island. Visitors would travel from far and wide to sample her famous Asam Pedas Set, featuring the freshest catch of the day and a unique blend of spices. As the warung grew, so did the menu. Today, Warung Asam Pedas Padu continues to serve the signature Asam Pedas alongside a selection of other traditional Malay dishes, each made with the same love and care as when the first bowl was served. Whether you\'re craving something spicy, sweet, or refreshing, our menu is designed to offer a taste of the local culture, with dishes that speak to the rich culinary heritage of Malaysia. At Warung Asam Pedas Padu, we believe in keeping our food fresh, our atmosphere relaxed, and our guests feeling like family. So whether you\'re a first-time visitor or a loyal regular, we welcome you to sit back, enjoy the vibrant flavors of Malaysia, and become part of our story.'
    document.querySelector('container_div').appendChild(home_text);
    // Need to split this into 3 paragraphs and add them individually.
}

function renderMenuMaster() {
    clearDisplay();
}

function appendSet() {
    clearDisplay();
    renderMenuMaster();
}

function appendFood() {
    clearDisplay();
    renderMenuMaster();
}

function appendDrinks() {
    clearDisplay();
    renderMenuMaster();
}

function renderContact() {
    clearDisplay();
}