export const categories = [
  { id: "main-meals", label: "Main Meals", eyebrow: "From our kitchen" },
  { id: "protein", label: "Protein", eyebrow: "Fire & flavour" },
  { id: "fast-food", label: "Fast Food", eyebrow: "Casual luxury" },
  { id: "snacks", label: "Snacks", eyebrow: "Small plates" },
  { id: "desserts", label: "Desserts", eyebrow: "Save room" },
  { id: "drinks", label: "Drinks", eyebrow: "Pour something special" },
];

const IMAGE_CDN = "https://images.unsplash.com";

// Curated direct image assets from Unsplash. Using stable image URLs instead of
// keyword image services keeps the restaurant site reliable in production.
const IMAGE_LIBRARY = {
  jollof: `${IMAGE_CDN}/photo-1664992960082-0ea299a9c53e?auto=format&fit=crop&w=1200&q=84`,
  jollof2: `${IMAGE_CDN}/photo-1664993101841-036f189719b6?auto=format&fit=crop&w=1200&q=84`,
  jollof3: `${IMAGE_CDN}/photo-1665556899022-9761f95769e5?auto=format&fit=crop&w=1200&q=84`,
  burger: `${IMAGE_CDN}/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1200&q=84`,
  burger2: `${IMAGE_CDN}/photo-1524817935500-bb9d3a1dd6c5?auto=format&fit=crop&w=1200&q=84`,
  pizza: `${IMAGE_CDN}/photo-1555072956-7758afb20e8f?auto=format&fit=crop&w=1200&q=84`,
  pasta: `${IMAGE_CDN}/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=1200&q=84`,
  steak: `${IMAGE_CDN}/photo-1752095809291-e183b49e1e4b?auto=format&fit=crop&w=1200&q=84`,
  coffee: `${IMAGE_CDN}/photo-1468768649734-ddebcf0b0bc4?auto=format&fit=crop&w=1200&q=84`,
  dessert: `${IMAGE_CDN}/photo-1540337706094-da10342c93d8?auto=format&fit=crop&w=1200&q=84`,
  interior: `${IMAGE_CDN}/photo-1468912637438-582f3f543cba?auto=format&fit=crop&w=1600&q=84`,
  cocktail: `${IMAGE_CDN}/photo-1750124933194-e021f47b5f8b?auto=format&fit=crop&w=1200&q=84`,
  pizza2: `${IMAGE_CDN}/photo-1555072956-7758afb20e8f?auto=format&fit=crop&w=1400&q=84`,
};

const image = (tags, id) => {
  const joined = tags.join(" ").toLowerCase();
  if (
    joined.includes("jollof") ||
    joined.includes("ofada") ||
    joined.includes("rice") ||
    joined.includes("egusi") ||
    joined.includes("okra") ||
    joined.includes("afang") ||
    joined.includes("swallow")
  )
    return [IMAGE_LIBRARY.jollof, IMAGE_LIBRARY.jollof2, IMAGE_LIBRARY.jollof3][
      id % 3
    ];
  if (
    joined.includes("suya") ||
    joined.includes("beef") ||
    joined.includes("steak") ||
    joined.includes("lamb") ||
    joined.includes("rib") ||
    joined.includes("gizzard")
  )
    return [IMAGE_LIBRARY.steak, IMAGE_LIBRARY.burger2, IMAGE_LIBRARY.jollof3][
      id % 3
    ];
  if (
    joined.includes("burger") ||
    joined.includes("fries") ||
    joined.includes("wrap") ||
    joined.includes("taco") ||
    joined.includes("quesadilla") ||
    joined.includes("sandwich") ||
    joined.includes("waffle")
  )
    return [IMAGE_LIBRARY.burger, IMAGE_LIBRARY.burger2][id % 2];
  if (joined.includes("pizza"))
    return [IMAGE_LIBRARY.pizza, IMAGE_LIBRARY.pizza2][id % 2];
  if (
    joined.includes("pasta") ||
    joined.includes("linguine") ||
    joined.includes("paella")
  )
    return [IMAGE_LIBRARY.pasta, IMAGE_LIBRARY.pasta][id % 2];
  if (
    joined.includes("dessert") ||
    joined.includes("cake") ||
    joined.includes("chocolate") ||
    joined.includes("tiramisu") ||
    joined.includes("panna") ||
    joined.includes("brownie") ||
    joined.includes("pavlova") ||
    joined.includes("mousse") ||
    joined.includes("baklava") ||
    joined.includes("donut")
  )
    return IMAGE_LIBRARY.dessert;
  if (
    joined.includes("coffee") ||
    joined.includes("latte") ||
    joined.includes("coldbrew") ||
    joined.includes("tea") ||
    joined.includes("affogato")
  )
    return IMAGE_LIBRARY.coffee;
  if (
    joined.includes("drink") ||
    joined.includes("mojito") ||
    joined.includes("lemonade") ||
    joined.includes("cooler") ||
    joined.includes("fizz") ||
    joined.includes("punch") ||
    joined.includes("zobo") ||
    joined.includes("chapman")
  )
    return IMAGE_LIBRARY.cocktail;
  return [
    IMAGE_LIBRARY.jollof,
    IMAGE_LIBRARY.burger,
    IMAGE_LIBRARY.pasta,
    IMAGE_LIBRARY.dessert,
  ][id % 4];
};

const rows = [
  [
    "Royal Jollof & Charred Chicken",
    "main-meals",
    8500,
    "Nigerian",
    "Smoky party-style jollof, fire-kissed chicken and house pepper relish.",
    ["jollof", "rice", "chicken"],
    1,
  ],
  [
    "Egusi & Pounded Yam",
    "main-meals",
    9000,
    "Nigerian",
    "Silky melon-seed stew, tender beef and greens with hand-pounded yam.",
    ["egusi", "soup", "yam"],
    2,
  ],
  [
    "Ofada Rice & Ayamase",
    "main-meals",
    9500,
    "Nigerian",
    "Nutty Ofada rice with peppery ayamase sauce, boiled egg and assorted beef.",
    ["ofada", "rice", "stew"],
    3,
  ],
  [
    "Seafood Okra & Swallow",
    "main-meals",
    11000,
    "Nigerian",
    "Okra slow-cooked with prawns, fish and squid, served with soft swallow.",
    ["okra", "seafood", "soup"],
    4,
  ],
  [
    "Suya-Spiced Rice Bowl",
    "main-meals",
    9200,
    "Nigerian",
    "Grilled beef strips, jollof rice, greens and yaji-spiced house salad.",
    ["suya", "rice", "bowl"],
    5,
  ],
  [
    "Coconut Curry Prawns",
    "main-meals",
    12500,
    "Fusion",
    "Coconut curry, tiger prawns, jasmine rice and charred lime.",
    ["coconut", "curry", "prawns"],
    6,
  ],
  [
    "Jerk Chicken Rice",
    "main-meals",
    9800,
    "Fusion",
    "Jerk-seasoned chicken, coconut rice, pineapple salsa and slaw.",
    ["jerk", "chicken", "rice"],
    7,
  ],
  [
    "Truffle Mushroom Pasta",
    "main-meals",
    10500,
    "International",
    "Creamy truffle mushroom linguine, parmesan and cracked pepper.",
    ["truffle", "mushroom", "pasta"],
    8,
  ],
  [
    "Herb-Grilled Steak Plate",
    "main-meals",
    18500,
    "International",
    "Char-grilled beef, rosemary potatoes, greens and pepper jus.",
    ["steak", "potatoes", "restaurant"],
    9,
  ],
  [
    "Cajun Salmon & Greens",
    "main-meals",
    15500,
    "International",
    "Cajun salmon, lemon greens, roasted vegetables and herb oil.",
    ["salmon", "greens", "vegetables"],
    10,
  ],
  [
    "Creamy Prawn Linguine",
    "main-meals",
    13800,
    "International",
    "Garlic prawns, silky cream sauce, parsley and aged parmesan.",
    ["prawn", "pasta", "cream"],
    11,
  ],
  [
    "Royal Harvest Bowl",
    "main-meals",
    7200,
    "Plant-forward",
    "Roasted grains, seasonal vegetables, herbs and citrus dressing.",
    ["grain", "vegetable", "bowl"],
    12,
  ],
  [
    "Pepper Soup & Yam",
    "main-meals",
    10500,
    "Nigerian",
    "Fragrant pepper soup with tender goat and a side of yam.",
    ["pepper", "soup", "goat"],
    13,
  ],
  [
    "Afang & Wheat",
    "main-meals",
    9800,
    "Nigerian",
    "Leafy Afang soup with tender meat and pillowy wheat swallow.",
    ["afang", "soup", "swallow"],
    14,
  ],
  [
    "Thai Basil Chicken Rice",
    "main-meals",
    10200,
    "Asian-inspired",
    "Fragrant rice, basil chicken, chilli and crisp cucumber.",
    ["thai", "chicken", "rice"],
    15,
  ],
  [
    "Seafood Paella Royale",
    "main-meals",
    16500,
    "Spanish-inspired",
    "Saffron rice with prawns, fish, mussels and roasted peppers.",
    ["paella", "seafood", "rice"],
    16,
  ],

  [
    "Yaji Beef Suya Skewers",
    "protein",
    6800,
    "Nigerian",
    "Charred beef skewers coated in bold yaji spice and smoked pepper.",
    ["suya", "beef", "skewers"],
    17,
  ],
  [
    "Honey-Glazed Chicken Wings",
    "protein",
    6500,
    "International",
    "Crisp wings lacquered with honey, chilli and toasted sesame.",
    ["chicken", "wings", "honey"],
    18,
  ],
  [
    "Charred Peppered Chicken",
    "protein",
    7200,
    "Nigerian",
    "Flame-grilled chicken tossed in fresh pepper sauce and herbs.",
    ["peppered", "chicken", "grilled"],
    19,
  ],
  [
    "Garlic Butter Prawns",
    "protein",
    9800,
    "International",
    "Jumbo prawns sautéed in garlic butter, parsley and citrus.",
    ["garlic", "butter", "prawns"],
    20,
  ],
  [
    "Crispy Calamari",
    "protein",
    8500,
    "International",
    "Lightly seasoned calamari with lemon aioli and herbs.",
    ["calamari", "seafood", "fried"],
    21,
  ],
  [
    "Rosemary Lamb Chops",
    "protein",
    14500,
    "International",
    "Tender lamb chops, rosemary marinade and charred lemon.",
    ["lamb", "chops", "rosemary"],
    22,
  ],
  [
    "Suya Chicken Thighs",
    "protein",
    7800,
    "Nigerian",
    "Boneless chicken thighs grilled with house suya spice.",
    ["suya", "chicken", "grill"],
    23,
  ],
  [
    "Black Pepper Beef Bites",
    "protein",
    9200,
    "Fusion",
    "Seared beef bites finished with black pepper glaze and scallions.",
    ["beef", "pepper", "bites"],
    24,
  ],
  [
    "Citrus Grilled Fish",
    "protein",
    9800,
    "International",
    "Fresh fish fillet, citrus marinade, herbs and olive oil.",
    ["grilled", "fish", "citrus"],
    25,
  ],
  [
    "Slow-Roasted Beef Short Rib",
    "protein",
    16000,
    "International",
    "Fork-tender short rib, rich jus and charred shallots.",
    ["beef", "short", "rib"],
    26,
  ],
  [
    "Sticky Soy Chicken",
    "protein",
    6900,
    "Asian-inspired",
    "Crisp chicken glazed with soy, ginger, garlic and spring onion.",
    ["sticky", "chicken", "asian"],
    27,
  ],
  [
    "Peri-Peri Chicken Quarter",
    "protein",
    7500,
    "African-inspired",
    "Flame-roasted chicken with smoky peri-peri and lemon.",
    ["periperi", "chicken", "grilled"],
    28,
  ],
  [
    "Pepper Prawns & Plantain",
    "protein",
    9300,
    "Nigerian",
    "Peppery prawns paired with sweet ripe plantain and herbs.",
    ["prawns", "plantain", "pepper"],
    29,
  ],
  [
    "Herb Crusted White Fish",
    "protein",
    11200,
    "International",
    "Oven-roasted fish with herb crust, lemon and caper butter.",
    ["white", "fish", "herb"],
    30,
  ],
  [
    "Spiced Beef Medallions",
    "protein",
    12800,
    "International",
    "Pan-seared beef medallions with smoked spice rub.",
    ["beef", "medallion", "grilled"],
    31,
  ],
  [
    "Charcoal BBQ Chicken",
    "protein",
    7600,
    "International",
    "Charcoal grilled chicken with house BBQ glaze and pickles.",
    ["bbq", "chicken", "grill"],
    32,
  ],

  [
    "Royal Beef Burger",
    "fast-food",
    8500,
    "International",
    "Brioche bun, aged cheddar, smoked onions, lettuce and signature sauce.",
    ["burger", "beef", "fries"],
    33,
  ],
  [
    "Crispy Chicken Burger",
    "fast-food",
    7900,
    "International",
    "Buttermilk chicken, slaw, pickles and hot honey in a toasted bun.",
    ["chicken", "burger", "fries"],
    34,
  ],
  [
    "Jerk Chicken Burger",
    "fast-food",
    8200,
    "Fusion",
    "Jerk chicken, pineapple relish, lettuce and chilli mayo.",
    ["jerk", "burger", "chicken"],
    35,
  ],
  [
    "Royal Smash Burger",
    "fast-food",
    9000,
    "International",
    "Double smashed beef patties, American cheese and burger sauce.",
    ["smash", "burger", "beef"],
    36,
  ],
  [
    "Truffle Chicken Pizza",
    "fast-food",
    9800,
    "Fusion",
    "Roast chicken, mushrooms, truffle cream and mozzarella.",
    ["pizza", "chicken", "mushroom"],
    37,
  ],
  [
    "Suya Steak Pizza",
    "fast-food",
    10500,
    "Fusion",
    "Yaji beef, peppers, mozzarella and smoked chilli oil.",
    ["suya", "pizza", "beef"],
    38,
  ],
  [
    "Margherita Royale",
    "fast-food",
    7600,
    "Italian-inspired",
    "San Marzano tomato, basil, mozzarella and olive oil.",
    ["pizza", "margherita", "basil"],
    39,
  ],
  [
    "Pepperoni & Hot Honey Pizza",
    "fast-food",
    8900,
    "International",
    "Crisp pepperoni, mozzarella and a honey-chilli finish.",
    ["pizza", "pepperoni", "honey"],
    40,
  ],
  [
    "Loaded Chicken Fries",
    "fast-food",
    7200,
    "International",
    "Crisp fries, chicken, cheddar, spring onion and house sauce.",
    ["loaded", "fries", "chicken"],
    41,
  ],
  [
    "Prawn Po’ Boy Roll",
    "fast-food",
    9500,
    "Southern-inspired",
    "Crisp prawns, slaw and spicy remoulade in a toasted roll.",
    ["prawn", "sandwich", "roll"],
    42,
  ],
  [
    "Cajun Chicken Wrap",
    "fast-food",
    6900,
    "International",
    "Cajun chicken, crisp lettuce, peppers and garlic mayo.",
    ["wrap", "chicken", "cajun"],
    43,
  ],
  [
    "Steak & Cheese Melt",
    "fast-food",
    9800,
    "International",
    "Sliced steak, caramelised onions, cheese and toasted sourdough.",
    ["steak", "sandwich", "cheese"],
    44,
  ],
  [
    "Crispy Fish Burger",
    "fast-food",
    8100,
    "International",
    "Golden fish fillet, slaw, pickles and tartare sauce.",
    ["fish", "burger", "fries"],
    45,
  ],
  [
    "Spicy Chicken Tacos",
    "fast-food",
    7600,
    "Mexican-inspired",
    "Charred chicken, salsa, avocado, crema and coriander.",
    ["tacos", "chicken", "mexican"],
    46,
  ],
  [
    "Beef Quesadilla Royale",
    "fast-food",
    8400,
    "Mexican-inspired",
    "Seasoned beef, melted cheese, peppers and smoky salsa.",
    ["quesadilla", "beef", "cheese"],
    47,
  ],
  [
    "Chicken & Waffle Stack",
    "fast-food",
    8800,
    "International",
    "Crisp chicken, Belgian waffle, maple glaze and chilli butter.",
    ["chicken", "waffle", "brunch"],
    48,
  ],

  [
    "Puff-Puff Trio",
    "snacks",
    3200,
    "Nigerian",
    "Warm golden puff-puff with cinnamon sugar and condensed milk.",
    ["puffpuff", "dough", "snack"],
    49,
  ],
  [
    "Chicken Samosa",
    "snacks",
    3800,
    "West African-inspired",
    "Crisp pastry parcels filled with spiced chicken and vegetables.",
    ["samosa", "chicken", "snack"],
    50,
  ],
  [
    "Beef Spring Rolls",
    "snacks",
    3900,
    "International",
    "Crisp rolls filled with seasoned beef, vegetables and herbs.",
    ["springrolls", "beef", "snack"],
    51,
  ],
  [
    "Plantain Chips & Dip",
    "snacks",
    2800,
    "Nigerian",
    "Thin-crisp plantain chips with smoked pepper dip.",
    ["plantain", "chips", "dip"],
    52,
  ],
  [
    "Peppered Gizzard",
    "snacks",
    5200,
    "Nigerian",
    "Tender gizzard glazed in tomato-pepper sauce and onions.",
    ["gizzard", "pepper", "snack"],
    53,
  ],
  [
    "Suya Corn Ribs",
    "snacks",
    3600,
    "Fusion",
    "Charred sweetcorn with yaji butter and lime.",
    ["corn", "suya", "snack"],
    54,
  ],
  [
    "Loaded Nachos Royale",
    "snacks",
    6500,
    "International",
    "Crisp tortilla chips, beef, cheese, salsa, jalapeño and crema.",
    ["nachos", "beef", "cheese"],
    55,
  ],
  [
    "Mozzarella Sticks",
    "snacks",
    4900,
    "International",
    "Golden mozzarella sticks with tomato basil dip.",
    ["mozzarella", "sticks", "snack"],
    56,
  ],
  [
    "Crispy Onion Rings",
    "snacks",
    3500,
    "International",
    "Lightly seasoned onion rings with smoked mayo.",
    ["onion", "rings", "snack"],
    57,
  ],
  [
    "Chicken Bites",
    "snacks",
    4500,
    "International",
    "Crunchy chicken bites with hot honey dip.",
    ["chicken", "bites", "snack"],
    58,
  ],
  [
    "Spiced Potato Wedges",
    "snacks",
    3200,
    "International",
    "Oven-crisp wedges with garlic herb sauce.",
    ["potato", "wedges", "snack"],
    59,
  ],
  [
    "Mini Beef Sliders",
    "snacks",
    5900,
    "International",
    "Three juicy beef sliders with cheese and pickles.",
    ["sliders", "beef", "snack"],
    60,
  ],
  [
    "Cajun Prawns Skewers",
    "snacks",
    6200,
    "International",
    "Quick-grilled prawns in Cajun spice with citrus.",
    ["prawn", "skewers", "snack"],
    61,
  ],
  [
    "Smoky Chicken Lollipops",
    "snacks",
    5600,
    "International",
    "Charred chicken lollipops with sticky glaze.",
    ["chicken", "lollipop", "snack"],
    62,
  ],
  [
    "Garlic Bread & Whipped Butter",
    "snacks",
    2900,
    "International",
    "Warm garlic bread with cultured whipped butter.",
    ["garlic", "bread", "butter"],
    63,
  ],
  [
    "Cassava Croquettes",
    "snacks",
    3400,
    "Nigerian-inspired",
    "Crisp cassava bites with peppered tomato relish.",
    ["cassava", "croquette", "snack"],
    64,
  ],

  [
    "Classic Cheesecake",
    "desserts",
    5200,
    "International",
    "Vanilla cheesecake, berry compote and buttery biscuit crumb.",
    ["cheesecake", "dessert"],
    65,
  ],
  [
    "Dark Chocolate Torte",
    "desserts",
    5600,
    "International",
    "Dense dark chocolate torte with sea salt and cream.",
    ["chocolate", "cake", "dessert"],
    66,
  ],
  [
    "Salted Caramel Brownie",
    "desserts",
    4900,
    "International",
    "Warm brownie, salted caramel and vanilla gelato.",
    ["brownie", "caramel", "dessert"],
    67,
  ],
  [
    "Mango Passion Pavlova",
    "desserts",
    5400,
    "International",
    "Crisp meringue, passion fruit cream and ripe mango.",
    ["pavlova", "mango", "dessert"],
    68,
  ],
  [
    "Classic Tiramisu",
    "desserts",
    5700,
    "Italian-inspired",
    "Espresso-soaked layers, mascarpone and cocoa.",
    ["tiramisu", "dessert", "coffee"],
    69,
  ],
  [
    "Coconut Panna Cotta",
    "desserts",
    5100,
    "International",
    "Silky coconut panna cotta with pineapple and lime.",
    ["panna", "cotta", "coconut"],
    70,
  ],
  [
    "Brioche Bread Pudding",
    "desserts",
    4800,
    "International",
    "Warm brioche pudding, vanilla sauce and toasted nuts.",
    ["breadpudding", "dessert"],
    71,
  ],
  [
    "Banana Foster Waffle",
    "desserts",
    5300,
    "International",
    "Crisp waffle, caramelised banana, cinnamon and cream.",
    ["waffle", "banana", "dessert"],
    72,
  ],
  [
    "Red Velvet Slice",
    "desserts",
    4800,
    "International",
    "Velvety cocoa cake with cream cheese frosting.",
    ["redvelvet", "cake", "dessert"],
    73,
  ],
  [
    "Lemon Meringue Tart",
    "desserts",
    5000,
    "International",
    "Bright lemon curd, buttery pastry and toasted meringue.",
    ["lemon", "tart", "dessert"],
    74,
  ],
  [
    "Pistachio Baklava",
    "desserts",
    4600,
    "Middle Eastern-inspired",
    "Crisp phyllo, pistachio, honey and citrus zest.",
    ["baklava", "pistachio", "dessert"],
    75,
  ],
  [
    "Warm Cinnamon Donuts",
    "desserts",
    4200,
    "International",
    "Fresh mini donuts with cinnamon sugar and chocolate dip.",
    ["donuts", "cinnamon", "dessert"],
    76,
  ],
  [
    "Strawberry Shortcake",
    "desserts",
    5100,
    "International",
    "Soft vanilla sponge, berries and lightly whipped cream.",
    ["strawberry", "cake", "dessert"],
    77,
  ],
  [
    "Espresso Affogato",
    "desserts",
    4300,
    "Italian-inspired",
    "Vanilla gelato drenched in a hot espresso shot.",
    ["affogato", "coffee", "gelato"],
    78,
  ],
  [
    "Peanut Butter Mousse",
    "desserts",
    4700,
    "International",
    "Silky peanut mousse, chocolate crumb and roasted peanuts.",
    ["mousse", "peanut", "dessert"],
    79,
  ],
  [
    "Chef’s Dessert Flight",
    "desserts",
    7500,
    "Royal Bite signature",
    "Four mini desserts selected by the pastry kitchen.",
    ["dessert", "platter", "chef"],
    80,
  ],

  [
    "Royal Chapman",
    "drinks",
    3500,
    "Nigerian",
    "House Chapman with citrus, bitters, grenadine and orange.",
    ["chapman", "drink"],
    81,
  ],
  [
    "Fresh Pineapple Ginger",
    "drinks",
    3200,
    "Nigerian-inspired",
    "Fresh pineapple juice brightened with ginger and lime.",
    ["pineapple", "ginger", "drink"],
    82,
  ],
  [
    "Zobo Royale",
    "drinks",
    3000,
    "Nigerian",
    "Hibiscus cooler infused with ginger, pineapple and spice.",
    ["zobo", "hibiscus", "drink"],
    83,
  ],
  [
    "Mango Passion Cooler",
    "drinks",
    3500,
    "International",
    "Mango, passion fruit, citrus and crushed ice.",
    ["mango", "passionfruit", "drink"],
    84,
  ],
  [
    "Classic Mojito",
    "drinks",
    3500,
    "International",
    "Mint, lime, soda and a crisp zero-proof finish.",
    ["mojito", "mint", "lime"],
    85,
  ],
  [
    "Berry Lemonade",
    "drinks",
    3500,
    "International",
    "Mixed berries, fresh lemon and sparkling water.",
    ["berry", "lemonade", "drink"],
    86,
  ],
  [
    "Iced Latte",
    "drinks",
    4000,
    "International",
    "Espresso, chilled milk and a soft caramel finish.",
    ["latte", "coffee", "drink"],
    87,
  ],
  [
    "Vanilla Cold Brew",
    "drinks",
    4500,
    "International",
    "Slow-steeped cold brew, vanilla and chilled cream.",
    ["coldbrew", "coffee", "drink"],
    88,
  ],
  [
    "Ginger Lemon Tea",
    "drinks",
    3000,
    "International",
    "Fresh ginger, lemon, honey and warm botanicals.",
    ["tea", "ginger", "lemon"],
    89,
  ],
  [
    "Pineapple Mint Fizz",
    "drinks",
    3200,
    "International",
    "Pineapple, mint and sparkling citrus over ice.",
    ["pineapple", "mint", "fizz"],
    90,
  ],
  [
    "Watermelon Cooler",
    "drinks",
    3000,
    "International",
    "Fresh watermelon, lime and basil over crushed ice.",
    ["watermelon", "lime", "drink"],
    91,
  ],
  [
    "Virgin Piña Colada",
    "drinks",
    3800,
    "International",
    "Pineapple, coconut cream and crushed ice.",
    ["pinacolada", "pineapple", "coconut"],
    92,
  ],
  [
    "Chocolate Frappe",
    "drinks",
    4500,
    "International",
    "Iced chocolate, espresso, milk and whipped cream.",
    ["chocolate", "frappe", "drink"],
    93,
  ],
  [
    "Strawberry Smoothie",
    "drinks",
    4200,
    "International",
    "Fresh strawberries blended with yogurt and honey.",
    ["strawberry", "smoothie", "drink"],
    94,
  ],
  [
    "Tropical Fruit Punch",
    "drinks",
    3500,
    "International",
    "Pineapple, orange, passion fruit and a bright citrus lift.",
    ["fruit", "punch", "drink"],
    95,
  ],
  [
    "Royal House Iced Tea",
    "drinks",
    3000,
    "Royal Bite signature",
    "Black tea, peach, lemon and fresh mint over ice.",
    ["icedtea", "peach", "drink"],
    96,
  ],
];

export const menuItems = rows.map(
  ([name, category, price, origin, description, tags, id]) => ({
    id,
    name,
    category,
    price,
    origin,
    description,
    tags,
    image: image(tags, id),
  }),
);

export const featuredItems = [1, 17, 33, 65].map((id) =>
  menuItems.find((item) => item.id === id),
);

export const galleryImages = [
  { src: IMAGE_LIBRARY.interior, title: "The Royal Room", tag: "Atmosphere" },
  {
    src: IMAGE_LIBRARY.jollof2,
    title: "A table of West African flavour",
    tag: "Food",
  },
  { src: IMAGE_LIBRARY.pasta, title: "Set for the evening", tag: "Dining" },
  { src: IMAGE_LIBRARY.steak, title: "Fire & flavour", tag: "Kitchen" },
  { src: IMAGE_LIBRARY.burger, title: "Casual luxury", tag: "Dining" },
  { src: IMAGE_LIBRARY.pizza, title: "Fresh from the oven", tag: "Kitchen" },
  { src: IMAGE_LIBRARY.dessert, title: "A sweet finish", tag: "Desserts" },
  { src: IMAGE_LIBRARY.coffee, title: "Slow mornings", tag: "Drinks" },
  {
    src: IMAGE_LIBRARY.interior,
    title: "Made for memories",
    tag: "Experience",
  },
  { src: IMAGE_LIBRARY.jollof3, title: "Heritage on a plate", tag: "Food" },
  { src: IMAGE_LIBRARY.burger2, title: "The Royal table", tag: "Dining" },
  {
    src: IMAGE_LIBRARY.interior,
    title: "Dinner is a ritual",
    tag: "Experience",
  },
];

export const testimonials = [
  {
    quote:
      "The food, the room and the service all seem to understand each other. We left already planning our next visit.",
    name: "Amara M.",
    detail: "Weekend dinner guest · Lagos",
    rating: 5,
  },
  {
    quote:
      "The jollof was smoky, the suya was brilliant, and the whole evening felt beautifully considered.",
    name: "Tobi A.",
    detail: "Birthday dinner · Victoria Island",
    rating: 5,
  },
  {
    quote:
      "Royal Bite feels elevated without losing the warmth that makes Nigerian hospitality special.",
    name: "Nneka O.",
    detail: "Friday night guest · Lagos",
    rating: 5,
  },
  {
    quote:
      "Our reservation was smooth, the table looked incredible and dessert became the surprise favourite.",
    name: "David K.",
    detail: "Celebration dinner · Lagos",
    rating: 5,
  },
];

export const restaurant = {
  phone: "+234 800 000 0000",
  email: "hello@royalbite.com",
  address: "12 Royal Avenue, Victoria Island, Lagos",
  hours: "Daily · 11:00 AM — 11:00 PM",
};
