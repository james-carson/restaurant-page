// This function clears the display, ready for anything else to be added. 

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