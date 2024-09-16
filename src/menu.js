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

// Array items for each class constructor, exported for use:

export const asamPedasSet = [
    new Set('/images/menu_items/set/asam_pedas_ayam.png', 'Asam Pedas Set: Chicken', 'A spicy and tangy chicken dish simmered in a flavorful tamarind-based broth. The balance of sour and heat makes this Malay specialty unforgettable, served with fragrant rice and fresh herbs on the side.', '8 Rm'),
    new Set('/images/menu_items/set/asam_pedas_ikan.png', 'Asam Pedas Set: Fish', 'Fresh fish cooked in a bold, spicy broth with tamarind and chili, giving a delightful sour and spicy punch. This dish is served with rice and vegetables, offering a true taste of traditional Malay cuisine.', '10.5 Rm')
]

export const foodSet = [
    new Food('/images/menu_items/food/nasi_goreng_biasa.jpeg', 'Nasi Goreng Biasa', 'A simple yet satisfying fried rice dish, cooked with soy sauce, garlic, and vegetables. It\'s a comforting and flavorful meal, perfect for those seeking a quick and tasty option.', '6 Rm'),
    new Food('/images/menu_items/food/nasi_goreng_cili_padi.jpeg', 'Nasi Goreng Cili Padi', 'Spicy fried rice made with fiery cili padi (bird\'s eye chili), giving it a serious kick. This dish is for spice lovers who crave a bold, unforgettable flavor.', '6 Rm'),
    new Food('/images/menu_items/food/nasi_goreng_kampung.jpeg', 'Nasi Goreng Kampung', 'Traditional village-style fried rice, cooked with anchovies, vegetables, and a generous helping of sambal for an extra burst of flavor. It\'s a rustic and hearty dish that evokes the warmth of home-cooked meals.', '6 Rm'),
    new Food('/images/menu_items/food/nasi_goreng_pattaya.jpeg', 'Nasi Goreng Pattaya', 'Fried rice wrapped in a soft omelette, served with a tangy chili sauce. This unique dish offers a delightful contrast between the savoury rice and the sweetness of the sauce.', '7 Rm'),
    new Food('/images/menu_items/food/nasi_ayam_goreng.png', 'Nasi Ayam Goreng', 'Fragrant rice served with perfectly crispy fried chicken, seasoned with a blend of Malay spices. It\'s a simple, comforting dish that combines the best of fried rice and fried chicken.', '7.5 Rm'),
    new Food('/images/menu_items/food/mee_goreng.png', 'Mee / Bihun / Maggi / Kway Teow Goreng', 'Stir-fried noodles or rice noodles (your choice) tossed with vegetables, soy sauce, and spices. This dish is a street food favorite, packed with flavor and perfect for a quick bite.', '6 Rm'),
    new Food('/images/menu_items/food/mee_bandung.jpg', 'Mee / Bihun / Maggi / Kway Teow Bandung', 'A noodle dish in a rich, flavorful broth made with a mix of spicy and sweet flavors. Served with your choice of noodles, this dish offers a comforting bowl of hearty goodness.', '8 Rm'),
    new Food('/images/menu_items/food/mee_kungfu.jpg', 'Mee / Bihun / Maggi / Kway Teow Kungfu', 'A crispy noodle dish where the noodles are fried to a crunchy perfection and topped with a thick, savory sauce. The contrasting textures of crispy and saucy make it a popular choice.', '8 Rm'),
    new Food('/images/menu_items/food/tom_yam_ayam.jpeg', 'Tom Yam Ayam', 'A spicy and sour Thai-inspired soup with chicken, filled with aromatic herbs, chili, and lime. It\'s the perfect balance of heat and tang, warming you from the inside out.', '9 Rm'),
    new Food('/images/menu_items/food/tom_yam_daging.jpeg', 'Tom Yam Daging', 'This beef version of the famous Tom Yam soup features tender slices of beef in a spicy, tangy broth. The bold flavors and aromatic spices make this a must-try for beef lovers.', '10 Rm')
]

export const drinksSet = [
    new Drinks('/images/menu_items/drinks/milo.jpeg', 'Milo', 'A popular Malaysian chocolate malt drink, available hot or iced. It\'s a rich and creamy treat that offers a comforting dose of nostalgia.', '2.5 Hot Rm / 3 Iced Rm'),
    new Drinks('/images/menu_items/drinks/teh.jpeg', 'Teh', 'Classic Malaysian tea, served hot or iced. With a robust flavor, it\'s perfect as a refreshing drink or a warm pick-me-up.', '2.5 Rm Hot / 2.5 Iced Rm'),
    new Drinks('/images/menu_items/drinks/teh_o.jpg', 'Teh \'O\'', 'A lighter, unsweetened version of traditional tea, served either hot or iced. It\'s ideal for those who prefer a more subtle and refreshing tea flavor.', '1.8 Rm Hot / 2.5 Rm Iced'),
    new Drinks('/images/menu_items/drinks/teh_o_limau.jpeg', 'Teh \'O\' Limau', 'A refreshing blend of unsweetened black tea with a tangy twist of lime. Served hot or iced, this is a perfect drink for those who prefer a citrusy punch to their tea.', '2 Rm Hot / 2.5 Rm Iced'),
    new Drinks('/images/menu_items/drinks/kopi.jpg', 'Kopi', 'Bold, Malaysian-style coffee served hot or iced. It\'s rich, strong, and perfect for coffee lovers looking for an extra kick.', '2 Rm Hot / 2.5 Rm Iced'),
    new Drinks('/images/menu_items/drinks/kopi_o.jpg', 'Kopi \'O\'', 'A black coffee version of the traditional kopi, without milk but still full of flavor. It\'s served hot or iced, offering a simple yet satisfying coffee experience.', '1.8 Rm Hot / 2 Rm Iced'),
    new Drinks('/images/menu_items/drinks/limau.jpg', 'Limau', 'A refreshing lime juice drink, available hot or iced. Its tangy, citrusy flavor makes it the perfect thirst quencher, especially on hot days.', '2 Rm Hot / 2.5 Iced'),
    new Drinks('/images/menu_items/drinks/jus_apple.jpeg', 'Jus Apple', 'Freshly squeezed apple juice, served chilled for a sweet and crisp taste. It\'s light and refreshing, perfect for cooling down.', '5 Rm'),
    new Drinks('/images/menu_items/drinks/jus_orange.jpg', 'Jus Orange', 'A classic orange juice, freshly squeezed and served cold. It\'s tangy, sweet, and packed with vitamin C, perfect for a refreshing lift.', '5 Rm'),
    new Drinks('/images/menu_items/drinks/jus_carrot.jpeg', 'Jus Carrot', 'Sweet and earthy, this carrot juice is a healthy and refreshing option. It\'s great for those looking for a natural energy boost with a bit of sweetness.', '5 Rm')
];