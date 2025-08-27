-- Create database schema for Cafe Cucina
CREATE SCHEMA 'cafecucina'

USE cafecucina


-- Menu categories table
CREATE TABLE IF NOT EXISTS menu_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    display_name VARCHAR(100) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Menu items table
CREATE TABLE IF NOT EXISTS menu_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT NOT NULL,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price VARCHAR(50) NOT NULL,
    image_url VARCHAR(255),
    is_vegetarian BOOLEAN DEFAULT FALSE,
    is_available BOOLEAN DEFAULT TRUE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES menu_categories(id) ON DELETE CASCADE
);

-- Contact form responses table
CREATE TABLE IF NOT EXISTS contact_responses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
    admin_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Admin users table (for admin panel access)
CREATE TABLE IF NOT EXISTS admin_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'manager') DEFAULT 'manager',
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- Insert menu categories
INSERT INTO menu_categories (name, display_name, description, sort_order) VALUES
('breakfast', 'Breakfast Special Menu', 'Start your day with our delicious breakfast options', 1),
('starters', 'Starters & Appetizers', 'Perfect appetizers to begin your meal', 2),
('soups', 'Soups', 'Warm and comforting soup selections', 3),
('salads', 'Salads', 'Fresh and healthy salad options', 4),
('sandwichBurger', 'Sandwiches & Burgers', 'Hearty sandwiches and gourmet burgers', 5),
('pasta', 'Pasta & Risotto', 'Italian pasta and risotto specialties', 6),
('mainCourse', 'Main Course', 'Our signature main course dishes', 7),
('pizza', 'Pizza', 'Wood-fired pizzas with fresh ingredients', 8),
('oriental', 'From Oriental Kitchen', 'Asian-inspired dishes and specialties', 9),
('espresso', 'Espresso & Hot Beverages', 'Premium coffee and hot drinks', 10),
('teas', 'Teas', 'Fine tea selection from around the world', 11),
('coldBeverages', 'Cold Beverages', 'Refreshing cold drinks and smoothies', 12),
('juices', 'Fresh Juices & Smoothies', 'Freshly squeezed juices and healthy smoothies', 13),
('spirits', 'Spirits', 'Premium spirits and whiskeys', 14),
('wines', 'Wines', 'Curated wine selection', 15),
('beers', 'Beers', 'Local and international beer selection', 16),
('cocktails', 'Cocktails', 'Handcrafted cocktails and mixed drinks', 17);

-- Insert sample menu items (breakfast category)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(1, 'Eggs on your style on toast', 'Poached/Scrambled/Sunny side', 'Rs.545', FALSE, 1),
(1, 'Namaste Porridge (V)', 'Cooked Based In Almond Milk, Seasonal Fruits, Almond, & Raisin W Honey', 'Rs.595', TRUE, 2),
(1, 'Muesli (V)', 'Topped W Dry Fruits & Yogurt', 'Rs.575', TRUE, 3),
(1, 'Hash Stack', 'Roasted Crusted Potato Mixed W Herbs & Cheese; Topped W Poached Eggs & Hollandaise Sauce', 'Rs.595', FALSE, 4),
(1, 'Breakfast Of Champion (BOC)', 'Served Eggs On Your Style, Roasted Mushroom, Sautéed Spinach, Hash Brown, Crispy Bacon, Grilled Tomato, Baked Beans & Sicilian Sausage', 'Rs.1050', FALSE, 5);

-- Insert sample menu items (starters category)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(2, 'Potato Wedges (V)', 'Tossed With Our Signature Herbs & Spices', 'Rs.475', TRUE, 1),
(2, 'Cheese Ball (V)', 'Stuffed With Mozzarella Cheese', 'Rs.575', TRUE, 2),
(2, 'Veg. Tempura (V)', 'Beer Battered Coated Vegetables & Paneer', 'Rs.595', TRUE, 3),
(2, 'BBQ Chicken Wings', 'Finished With BBQ Sauce And Red Wine', 'Rs.595', FALSE, 4),
(2, 'Fish Finger', 'Served With Organic Salad', 'Rs.575', FALSE, 5);

-- Insert sample admin user (password: admin123)
INSERT INTO admin_users (username, email, password_hash, role) VALUES
('admin', 'admin@cafecucina.com', '$2b$10$rQZ8kqVZ8kqVZ8kqVZ8kqVZ8kqVZ8kqVZ8kqVZ8kqVZ8kqVZ8kqVZ', 'admin');



-- Insert missing breakfast items (category_id = 1)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(1, 'BOC Sandwich', 'Choice of Bread, Spicy Sunnyside Eggs, Italian Pork Sausage, Bacon, Sundried Tomato and Slice of Cheese', 'Rs.945', FALSE, 6),
(1, 'Smashed Avocado', 'Seasonal Avocado Mashed W Lowest Fat Feta, Beading On Multigrain Bread, Cherry Tomato, Poached Eggs & Middle Eastern Spice (Dukkah)', 'Rs.645', TRUE, 7),
(1, 'Eggs Benedict', 'Served On Multigrain Bread W Smoked Grilled Ham, Poached Eggs & Hollandaise Sauce', 'Rs.625', FALSE, 8),
(1, 'Eggs Florentine', 'Served On Multigrain Bread W Sautéed Spinach Mushroom, Poached Eggs & Hollandaise Sauce', 'Rs.645', TRUE, 9),
(1, 'French Toast', 'Topped W Grilled Bacon, Maple Syrup & Ice Cream', 'Rs.645', FALSE, 10),
(1, 'Roti Wrap', 'Filled W Scrambled Eggs, Crispy Bacon, Sautéed Mushroom & Shredded Cheese', 'Rs.695', FALSE, 11),
(1, 'Fajita Chicken Wrap', 'Sautéed Chicken, Capsicum, Tomato, Spanish Onion, Finished W Cajun Spice. Served With Fries', 'Rs.645', FALSE, 12),
(1, 'Cottage Cheese Wrap (V)', 'Sautéed Cottage Cheese, Capsicum, Red Onion, Tomato W Homemade Pesto Basil Sauce', 'Rs.675', TRUE, 13),
(1, 'Smoothie Bowl', 'Chocolate & Peanut Butter / Litchi & Berries', 'Rs.695', TRUE, 14);

-- Insert missing starters items (category_id = 2)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(2, 'Sweet Corn (V)', 'Buttery/Spicy', 'Rs.475', TRUE, 6),
(2, 'Chicken Nuggets/Popcorn', 'Crispy golden chicken pieces', 'Rs.595', FALSE, 7);

-- Insert soups items (category_id = 3)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(3, 'Man Chow', 'Fried Spaghetti Tossed With Vegetables and Pan-Fried Chicken', 'Rs.545', FALSE, 1),
(3, 'Mushroom (V)', 'Diced Mushroom Prepared With Milk Base', 'Rs.475', TRUE, 2),
(3, 'Chicken & Mushroom', 'Diced Chicken And Button Mushroom Cooked With Milk Base', 'Rs.525', FALSE, 3),
(3, 'Hot & Sour', 'World Famous Soup Prepared With Diced Chicken, Boiled Vegetables And Touch Of Hot Sauce And Tangy Flavour', 'Rs.525', FALSE, 4);

-- Insert salads items (category_id = 4)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(4, 'Seasonal Fruit Salad (V)', 'Fresh seasonal fruits', 'Rs.645', TRUE, 1),
(4, 'Chicken Caesar Salad', 'Cos Lettuce, Crispy Bacon, Herb Roasted Croutons, Parmesan Cheese Topped W Poached Egg, Mustard Mayo & Cherry Tomato', 'Rs.695', FALSE, 2),
(4, 'Crispy Chicken Salad', 'Iceberg Lettuce, Red Cabbage, Cucumber, Carrot, Apple, Kalamata Olives, Dried Fruits Drizzled With Balsamic Vinaigrette', 'Rs.675', FALSE, 3),
(4, 'Greek Salad (V)', 'Roman Lettuce, Cherry Tomato, Cucumber, Spanish Onion, Olives, Feta Cheese, Drizzled W Lemon & Olive Oil', 'Rs.595', TRUE, 4);

-- Insert sandwichBurger items (category_id = 5)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(5, 'Quattro Sandwich', 'Choice Of Bread, Grilled Chicken, Grilled Ham, Fried Egg, Slice Cheese, Tomato, Lettuce & Mayo', 'Rs.795', FALSE, 1),
(5, 'Mediterranean Veg. Sandwich (V)', 'Filled W Grilled Vegetables, Feta Cheese, Sundried Tomato, Basil Pesto & Rocca Leaf', 'Rs.645', TRUE, 2),
(5, 'Grilled Frango Burger', 'Grilled Cajun Chicken Breast Fillet W Tangy Mayo, Mango Salsa, Kakro, Jalapeno & Sour Cream', 'Rs.695', FALSE, 3),
(5, 'Chicken Schnitzel Burger', 'Bread Crumbed Chicken Breast Fillet, Lettuce, Tomato, Cheese & BBQ Sauce', 'Rs.625', FALSE, 4),
(5, 'Veg. Burger (V)', 'Mixed Veg, Mushroom & Spinach Patty W Tomato, Lettuce, Cheese & Basil Pesto', 'Rs.645', TRUE, 5),
(5, 'Fish Burger', 'Grilled Fish Fillet, Lettuce, Gherkins, Cheese and Tartare Sauce', 'Rs.745', FALSE, 6),
(5, 'New York Style Burger', 'Homemade Tenderloin Patty Layer W Fried Egg, Grilled Crispy Bacon, Slice Cheese, Ripe Tomato, Lettuce, Beetroot, Whole Grain Mustard Mayo & Caramelized Onion', 'Rs.825', FALSE, 7),
(5, 'Avocado Sandwich (V)', 'Fresh avocado with seasonal vegetables', 'Rs.495', TRUE, 8),
(5, 'Egg & Bacon Sandwich', 'Classic combination with fresh bread', 'Rs.595', FALSE, 9),
(5, 'Chicken Avocado Sandwich', 'Grilled chicken with fresh avocado', 'Rs.695', FALSE, 10),
(5, 'BLT', 'Bacon, Lettuce, Tomato classic', 'Rs.595', FALSE, 11),
(5, 'BLAT', 'Bacon, Lettuce, Avocado, Tomato', 'Rs.625', FALSE, 12);

-- Insert pasta items (category_id = 6)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(6, 'Pollo – e – Pomodorro Risotto', 'Cooked In Creamy Arborio Rice, Sautéed Chicken, Sun Dried Tomato & Baby Capers On Base Of Tomato Sauce Topped W Parmesan Cheese', 'Rs.845', FALSE, 1),
(6, 'Tres Champinon Risotto (V)', 'Cooked In Creamy Arborio Rice, Shiitake Mushroom Topped W Parmesan Wafer', 'Rs.745', TRUE, 2),
(6, 'Linguine Carbonara', 'White Wine Base, Grilled Bacon, Touch Of Cream Finished W Egg Yolk', 'Rs.775', FALSE, 3),
(6, 'Linguine Alfredo', 'Tossed W Herbs Marinated Grilled Chicken, Mushroom & Cream Sauce; Finished W Shaved Parmesan Cheese', 'Rs.745', FALSE, 4),
(6, 'Aglio – E – Olio (V)', 'Tossed W Homemade Basil Pesto', 'Rs.595/695', TRUE, 5),
(6, 'Penne Avocado (V)', 'Penne Tossed W Seasonal Vegetables On Cream Sauce Topped W Cheese', 'Rs.675/775', TRUE, 6),
(6, 'Penne Verao (V)', 'Penne Tossed W Seasonal Vegetables On Napolitano Sauce Topped W Cheese', 'Rs.725', TRUE, 7);

-- Insert mainCourse items (category_id = 7)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(7, 'Grilled Rooster Rosemary', 'Lemon & Rosemary Grilled Chicken Breast Served W Herbs Mashed Potato W Organic Salad & Drizzled Basil Pesto', 'Rs.775', FALSE, 1),
(7, 'Peri-Peri Chicken Oyster', 'Marinated Chicken Oyster, With Creamy Mushroom and Cauliflower Puree, Choice of Sautéed Veg./Salad', 'Rs.825', FALSE, 2),
(7, 'Chicken Parmigianino (Parma)', 'Crumbed Chicken Breast Fillet Topped W Grilled Ham, Egg Plant, & Cheese Finished W Homemade Tomato Sauce', 'Rs.925', FALSE, 3),
(7, 'Veg. Steak (V)', 'Mix Veg. Patty, Cottage Cheese, Butter Cream sauce, sides of Salad And Mashed Potato', 'Rs.795', TRUE, 4),
(7, 'Chicken Steak', 'Grilled Chicken Breast Fillet Topped W Mushroom Brown Sauce Served Hot Spicy Spaghetti & Sautéed Vegetables', 'Rs.825', FALSE, 5),
(7, 'Oz Style Bush Steak', 'Wrapped W Crispy Bacon Served W Onion Jam, Crispy Greens Topped W Mushroom Demi Glace Sauce (180 Gms)', 'Rs.1495', FALSE, 6),
(7, 'Salmon Steak', 'Smoked Norwegian Salmon, Beetroot Risotto, Sautéed Vegetables, Topped with Poached Egg, Finished with Lemon Butter Sauce', 'Rs.2195', FALSE, 7),
(7, 'Pork Chop', 'Herb Crusted Pan Roasted Pork Chop Served With Beetroot Risotto, Crispy Buttered Greens & Choice of BBQ OR Schezwan Sauce', 'Rs.1395', FALSE, 8),
(7, 'Fish Saltimbocca', 'Pan-Fried Bacon Wrapped Fish Fillet, Served W Mash Potato, Crispy Greens & Pan-Glazed Sauce', 'Rs.1145', FALSE, 9);

-- Insert pizza items (category_id = 8)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(8, 'Margherita (V)', 'Homemade Tomato Sauce, Mozzarella Cheese', 'Rs.695', TRUE, 1),
(8, 'Pizza Al Quattro Formaggi (V)', 'Homemade Tomato Sauce with Combination of Four Types of Cheese', 'Rs.1195', TRUE, 2),
(8, 'Al Fungi (V)', 'Homemade Tomato Sauce, Mozzarella Cheese, Mushroom', 'Rs.725', TRUE, 3),
(8, 'Mix Veg. Pizza (V)', 'Homemade Tomato Sauce, Mozzarella Cheese, Capsicum, Spanish Onion, Mushroom, Tomato, Sweet corn, Olives, Cottage Cheese', 'Rs.795', TRUE, 4),
(8, 'Greek Pizza (V)', 'Homemade Tomato Sauce, Mozzarella Cheese, Feta Cheese, Black Olive, Spanish onion, Tomato', 'Rs.975', TRUE, 5),
(8, 'Pepperoni', 'Homemade Tomato Sauce, Mozzarella Cheese, Pork Pepperoni', 'Rs.1095', FALSE, 6),
(8, 'Capricciosa', 'Homemade Tomato Sauce, Mozzarella Cheese, Ham, Mushroom, Olives', 'Rs.1095', FALSE, 7),
(8, 'Salame Pizza', 'Homemade Tomato Sauce, Mozzarella Cheese, Pork Salami', 'Rs.995', FALSE, 8),
(8, 'BBQ Chicken', 'Homemade Tomato Sauce, Mozzarella Cheese, BBQ Chicken, Grilled Onion', 'Rs.995', FALSE, 9),
(8, 'Smoked Chicken', 'Homemade Tomato Sauce, Mozzarella Cheese, Smoked Chicken', 'Rs.1095', FALSE, 10),
(8, 'Hawaiian', 'Homemade Tomato Sauce, Mozzarella Cheese, Chicken/Pork, Pineapple', 'Rs.995', FALSE, 11),
(8, 'Meat Lover', 'Homemade Tomato Sauce, Mozzarella Cheese, Bacon, Ham, Smoked Chicken, Pepperoni', 'Rs.1195', FALSE, 12);

-- Insert oriental items (category_id = 9)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(9, 'Spiced Noodle', 'Asian style spiced noodles', 'Rs.725', FALSE, 1),
(9, 'Peanut Chicken', 'Chicken cooked with peanut sauce', 'Rs.645', FALSE, 2),
(9, 'Chicken Sausage', 'Traditional chicken sausage preparation', 'Rs.495', FALSE, 3),
(9, 'Spiced Chicken', 'Traditional spiced chicken preparation', 'Rs.595', FALSE, 4),
(9, 'Spiced Pork', 'Traditional spiced pork preparation', 'Rs.675', FALSE, 5),
(9, 'Chicken MO:MO', 'Traditional Nepali dumplings with chicken filling', 'Rs.445', FALSE, 6),
(9, 'Veg. MO:MO', 'Traditional Nepali dumplings with vegetable filling', 'Rs.345', TRUE, 7);

-- Insert espresso items (category_id = 10)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(10, 'Ristretto/Espresso', 'Rich, bold, aromatic coffee shot', 'Rs.170', TRUE, 1),
(10, 'Double Ristretto/Espresso/Macchiato', 'Double shot espresso variations', 'Rs.260', TRUE, 2),
(10, 'Long Black/Americano', 'Espresso with hot water', 'Rs.275', TRUE, 3),
(10, 'Café Latte/Cappuccino/Flat White', 'Steamed milk with espresso', 'Rs.300', TRUE, 4),
(10, 'Mochaccino', 'Chocolate coffee blend', 'Rs.360', TRUE, 5),
(10, 'Piccolo Latte', 'Small latte with strong coffee flavor', 'Rs.260', TRUE, 6),
(10, 'Spiced Chai Latte', 'Traditional spiced tea with milk', 'Rs.295', TRUE, 7),
(10, 'Dirty Chai Latte', 'Chai latte with espresso shot', 'Rs.325', TRUE, 8),
(10, 'Turmeric Latte', 'Golden milk with turmeric', 'Rs.300', TRUE, 9),
(10, 'Hot Lemon with Honey & Ginger', 'Warming herbal drink', 'Rs.295', TRUE, 10),
(10, 'Hot Chocolate', 'Rich creamy hot chocolate', 'Rs.375', TRUE, 11),
(10, 'Alternative Coffee Brewing', 'V60, Chemex, French Press', 'Rs.375', TRUE, 12);

-- Insert teas items (category_id = 11)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(11, 'English Breakfast/Green Tea/Lemon Tea/Masala Tea', 'Twinings tea selection', 'Rs.175', TRUE, 1),
(11, 'Hibiscus', 'Flower tea with tart flavor', 'Rs.300', TRUE, 2),
(11, 'Butterfly Pea', 'Color-changing flower tea', 'Rs.300', TRUE, 3),
(11, 'Chamomile', 'Calming flower tea', 'Rs.300', TRUE, 4),
(11, 'Everest Green', 'Premium Nepali green tea', 'Rs.300/600', TRUE, 5),
(11, 'Everest Oolong (Ball Rolled)', 'Premium Nepali oolong tea', 'Rs.300/600', TRUE, 6),
(11, 'Everest Ruby', 'Premium Nepali black tea', 'Rs.300/600', TRUE, 7),
(11, 'Spearmint', 'Fresh herb tea', 'Rs.300', TRUE, 8),
(11, 'Matcha Latte', 'Japanese green tea latte', 'Rs.350', TRUE, 9);

-- Insert coldBeverages items (category_id = 12)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(12, 'Iced Long Black/Americano', 'Cold espresso with water', 'Rs.275', TRUE, 1),
(12, 'Iced Café Latte', 'Cold latte with ice', 'Rs.300', TRUE, 2),
(12, 'Iced Coffee', 'Cold brew coffee with ice', 'Rs.395', TRUE, 3),
(12, 'Iced Mochaccino', 'Cold chocolate coffee', 'Rs.445', TRUE, 4),
(12, 'Iced Spiced Chai Latte', 'Cold spiced chai', 'Rs.445', TRUE, 5),
(12, 'Iced Dirty Chai Latte', 'Cold chai with espresso', 'Rs.475', TRUE, 6),
(12, 'Iced Matcha Latte', 'Cold matcha green tea', 'Rs.350', TRUE, 7),
(12, 'Affogato', 'Vanilla ice cream with espresso', 'Rs.325', TRUE, 8),
(12, 'Iced Chocolate', 'Cold chocolate drink', 'Rs.395', TRUE, 9),
(12, 'Iced Lemon/Peach Tea', 'Refreshing iced tea', 'Rs.325', TRUE, 10),
(12, 'Smoothie', 'Avocado/Banana/Strawberry/Mango/Blueberry/Black Berry', 'Rs.545', TRUE, 11),
(12, 'Milkshakes', 'Coffee/Strawberry/Chocolate/Caramel/Vanilla', 'Rs.375', TRUE, 12),
(12, 'Virgin Mojito', 'Strawberry/Pomegranate Mojito', 'Rs.495', TRUE, 13),
(12, 'Blue Lagoon', 'Tropical blue mocktail', 'Rs.445', TRUE, 14),
(12, 'Lemonade', 'Mint/Strawberry/Watermelon', 'Rs.350', TRUE, 15),
(12, 'Lemon Lime Bitter', 'Refreshing citrus drink', 'Rs.445', TRUE, 16),
(12, 'Kombucha', 'Fermented tea beverage', 'Rs.375', TRUE, 17),
(12, 'Sea Buck Thorn', 'Himalayan superfruit juice', 'Rs.300', TRUE, 18),
(12, 'Fresh Lime Soda', 'Classic lime soda', 'Rs.250', TRUE, 19),
(12, 'Coke Spider', 'Coke with ice cream', 'Rs.275', TRUE, 20),
(12, 'Bottle Water', 'Pure drinking water', 'Rs.100', TRUE, 21);

-- Insert juices items (category_id = 13)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(13, 'Watermelon', 'Fresh watermelon juice', 'Rs.375', TRUE, 1),
(13, 'Orange (OJ)', 'Fresh orange juice', 'Rs.425', TRUE, 2),
(13, 'Carrot & Ginger', 'Healthy carrot ginger blend', 'Rs.425', TRUE, 3),
(13, 'ABC, Ginger, Lemon, Parsley', 'Apple, Beetroot, Carrot blend', 'Rs.499', TRUE, 4),
(13, 'Apple, Beetroot, OJ, Lemon & Ginger', 'Antioxidant rich blend', 'Rs.499', TRUE, 5),
(13, 'Detox', 'Strawberry, Pineapple, OJ, Mango, Banana, Coconut Water', 'Rs.595', TRUE, 6),
(13, 'Carrot', 'Pure carrot juice', 'Rs.475', TRUE, 7),
(13, 'Pina Colada', 'Banana, Coconut Water, Coconut Milk, Pineapple', 'Rs.595', TRUE, 8),
(13, 'Berries', 'Mixed berry smoothie', 'Rs.625', TRUE, 9),
(13, 'Tropical Green', 'Almond/Oat Milk, OJ, Avocado, Mango, Spinach', 'Rs.645', TRUE, 10),
(13, 'Orange Side', 'Almond/Oat Milk, Orange, Banana, Carrot', 'Rs.595', TRUE, 11),
(13, 'Vita ''C'' Bomb', 'Vitamin C rich blend', 'Rs.645', TRUE, 12),
(13, 'Tropical Turmeric', 'Mango, Banana, Pineapple, Turmeric, Coco Milk, Lemon Juice', 'Rs.625', TRUE, 13);

-- Insert spirits items (category_id = 14)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(14, 'Royal Salute 21years', 'Premium Scotch Whisky', 'Rs.1550/3000 (30ml/60ml)', FALSE, 1),
(14, 'JW Blue Label', 'Premium Blended Scotch', 'Rs.1750/3400 (30ml/60ml)', FALSE, 2),
(14, 'JW Gold Label', 'Premium Blended Scotch', 'Rs.600/1200 (30ml/60ml)', FALSE, 3),
(14, 'JW Black Label', 'Blended Scotch Whisky', 'Rs.445/800 (30ml/60ml)', FALSE, 4),
(14, 'Glenfiddich 18years', 'Single Malt Scotch', 'Rs.1100/2200 (30ml/60ml)', FALSE, 5),
(14, 'Glenfiddich 12years', 'Single Malt Scotch', 'Rs.600/1100 (30ml/60ml)', FALSE, 6),
(14, 'Jack Daniel', 'Tennessee Whiskey', 'Rs.445/800 (30ml/60ml)', FALSE, 7),
(14, 'Grey Goose', 'Premium French Vodka', 'Rs.575/1100 (30ml/60ml)', FALSE, 8),
(14, 'Absolute Vodka', 'Swedish Vodka', 'Rs.375/650 (30ml/60ml)', FALSE, 9),
(14, 'Bombay Sapphire Gin', 'Premium London Dry Gin', 'Rs.490/950 (30ml/60ml)', FALSE, 10),
(14, 'Himalayan Reserve', 'Local premium whisky', 'Rs.555', FALSE, 11),
(14, 'OD Black Chimney', 'Local premium whisky', 'Rs.555', FALSE, 12);

-- Insert wines items (category_id = 15)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(15, 'Wine Selection', 'House wine selection', 'Rs.2550', FALSE, 1),
(15, 'JP Chenet', 'French wine', 'Rs.2550', FALSE, 2),
(15, 'Bottega', 'Italian wine', 'Rs.3900', FALSE, 3);

-- Insert beers items (category_id = 16)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(16, 'Barahsinghe', 'Local premium beer', 'Rs.645', FALSE, 1),
(16, 'Tuborg', 'International beer', 'Rs.595', FALSE, 2),
(16, 'Khumbu Kolsch', 'Sherpa Craft Beer', 'Rs.555 (500ml) / Rs.1650 (1.75L)', FALSE, 3),
(16, 'Himalayan Red', 'Sherpa Craft Beer', 'Rs.555 (500ml) / Rs.1650 (1.75L)', FALSE, 4),
(16, 'Indian Pale Ale (IPA)', 'Sherpa Craft Beer', 'Rs.595 (500ml) / Rs.1750 (1.75L)', FALSE, 5);

-- Insert cocktails items (category_id = 17)
INSERT INTO menu_items (category_id, name, description, price, is_vegetarian, sort_order) VALUES
(17, 'Mimosa', 'Champagne and orange juice', 'Rs.695', FALSE, 1),
(17, 'Mojito', 'Classic rum cocktail with mint', 'Rs.645', FALSE, 2),
(17, 'Hot Rum Punch', 'Warm spiced rum cocktail', 'Rs.545', FALSE, 3),
(17, 'Blue Lagoon', 'Tropical blue cocktail', 'Rs.645', FALSE, 4),
(17, 'Vodka Sunrise', 'Vodka with orange juice and grenadine', 'Rs.645', FALSE, 5);