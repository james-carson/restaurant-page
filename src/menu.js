// Class constructors for each menu item:

class Set {
    constructor(set_image, set_title, set_text, set_price) {
        this.set_image = set_image
        this.set_title = set_title
        this.set_text = set_text
        this.set_price = set_price
    }
}

class Food {
    constructor(food_image, food_title, food_text, food_price) {
        this.food_image = food_image
        this.food_title = food_title
        this.food_text = food_text
        this.food_price = food_price
    }
}

class Drinks {
    constructor(drinks_image, drinks_title, drinks_text, drinks_price) {
        this.drinks_image = drinks_image
        this.drinks_title = drinks_title
        this.drinks_text = drinks_text
        this.drinks_price = drinks_price
    }
}

// Array items for each class constructor:

const asamPedasSet = [
    new Set ('/images/menu_items/set/asam_pedas_ayam.jpg', 'Asam Pedas Set: Chicken', 'description', '8 Rm')
]