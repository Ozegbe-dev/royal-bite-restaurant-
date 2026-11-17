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
    "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  ],
  [
    "Egusi & Pounded Yam",
    "main-meals",
    9000,
    "Nigerian",
    "Silky melon-seed stew, tender beef and greens with hand-pounded yam.",
    ["egusi", "soup", "yam"],
    2,
    "https://media.istockphoto.com/id/1398351215/photo/egusi-soup-with-fufu-pounded-yam.webp?a=1&b=1&s=612x612&w=0&k=20&c=bpowb3HCg76MVl13_tkTih9ByUbnfLby2163db1qXso="
  ],
  [
    "Ofada Rice & Ayamase",
    "main-meals",
    9500,
    "Nigerian",
    "Nutty Ofada rice with peppery ayamase sauce, boiled egg and assorted beef.",
    ["ofada", "rice", "stew"],
    3,
    "https://media.istockphoto.com/id/2151441901/photo/a-close-up-shot-of-ofada-rice-moi-moi-and-ofada-sauce.jpg?s=1024x1024&w=is&k=20&c=YWgJy9_-ylCEud4deJXV3QretEVwX19aWCbaU1OM6dU="
  ],
  [
    "Seafood Okra & Swallow",
    "main-meals",
    11000,
    "Nigerian",
    "Okra slow-cooked with prawns, fish and squid, served with soft swallow.",
    ["okra", "seafood", "soup"],
    4,
    "https://media.istockphoto.com/id/1327486591/photo/okra-soup-with-fufu-or-pounded-yam.jpg?s=1024x1024&w=is&k=20&c=tt39eVlVJNFxz9t9Rs8WT27XRHXRtt400f9G7SgwoJM="
  ],
  [
    "Suya-Spiced Rice Bowl",
    "main-meals",
    9200,
    "Nigerian",
    "Grilled beef strips, jollof rice, greens and yaji-spiced house salad.",
    ["suya", "rice", "bowl"],
    5,
    "https://malamishaku.com/_next/image?q=75&url=https%3A%2F%2Ffleksa-cdn-v3.s3.eu-central-1.amazonaws.com%2Feedbf174-18c5-474a-bb45-7f5da27191eb%2Fcategory%2F1763397667322_chopped_suya_with_jollof_rice_png&w=3840"
  ],
  [
    "Coconut Curry Prawns",
    "main-meals",
    12500,
    "Fusion",
    "Coconut curry, tiger prawns, jasmine rice and charred lime.",
    ["coconut", "curry", "prawns"],
    6,
    "https://images.unsplash.com/photo-1574656133595-ac4f2d946017?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  ],
  [
    "Jerk Chicken Rice",
    "main-meals",
    9800,
    "Fusion",
    "Jerk-seasoned chicken, coconut rice, pineapple salsa and slaw.",
    ["jerk", "chicken", "rice"],
    7,
    "https://media.istockphoto.com/id/1264328760/photo/jamaican-jerk-chicken-legs.jpg?s=1024x1024&w=is&k=20&c=5Y1zchzzf1aIASVEKO_Zm9nq5vAj8xZdi2v2ErB6UKQ="
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
    "https://images.unsplash.com/photo-1546964124-0cce460f38ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  ],
  [
    "Cajun Salmon & Greens",
    "main-meals",
    15500,
    "International",
    "Cajun salmon, lemon greens, roasted vegetables and herb oil.",
    ["salmon", "greens", "vegetables"],
    10,
    "https://images.unsplash.com/photo-1676300186673-615bcc8d5d68?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  ],
  [
    "Creamy Prawn Linguine",
    "main-meals",
    13800,
    "International",
    "Garlic prawns, silky cream sauce, parsley and aged parmesan.",
    ["prawn", "pasta", "cream"],
    11,
    "https://images.unsplash.com/photo-1677681483419-e18aa1376db7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  ],
  [
    "Ofe Nsala (White Soup)",
    "main-meals",
    7200,
    "Nigerian",
    "A traditional Igbo white soup prepared with fresh catfish or tender chicken, aromatic local spices and uziza, served hot with soft pounded yam.",
    ["grain", "vegetable", "bowl"],
    12,
    "https://i.pinimg.com/1200x/3d/0d/64/3d0d64db30f52283b2d51c0179bcda91.jpg"
  ],
  [
    "Pepper Soup & Yam",
    "main-meals",
    10500,
    "Nigerian",
    "Fragrant pepper soup with tender goat and a side of yam.",
    ["pepper", "soup", "goat"],
    13,
    "https://i.pinimg.com/736x/2c/bb/a3/2cbba35b6a5d473ba64e8d20b39c44b3.jpg"
  ],
  [
    "Afang & Wheat",
    "main-meals",
    9800,
    "Nigerian",
    "Leafy Afang soup with tender meat and pillowy wheat swallow.",
    ["afang", "soup", "swallow"],
    14,
    "https://i.pinimg.com/736x/81/a9/2c/81a92cb70f1fafc48a1e51a4ccbbc734.jpg"
  ],
  [
    "Thai Basil Chicken Rice",
    "main-meals",
    10200,
    "Asian-inspired",
    "Fragrant rice, basil chicken, chilli and crisp cucumber.",
    ["thai", "chicken", "rice"],
    15,
    "https://i.pinimg.com/736x/87/2b/c1/872bc1b6f0e2a75f08e9fdaf45336593.jpg"
  ],
  [
    "Seafood Paella Royale",
    "main-meals",
    16500,
    "Spanish-inspired",
    "Saffron rice with prawns, fish, mussels and roasted peppers.",
    ["paella", "seafood", "rice"],
    16,
    "https://i.pinimg.com/1200x/80/ac/a6/80aca6860f8e9c9a6cfcdf5927f4bf21.jpg"
  ],

  [
    "Yaji Beef Suya Skewers",
    "protein",
    6800,
    "Nigerian",
    "Charred beef skewers coated in bold yaji spice and smoked pepper.",
    ["suya", "beef", "skewers"],
    17,
    "https://i.pinimg.com/736x/50/7a/1a/507a1acb889ab31a126fa71398dd32a5.jpg"
  ],
  [
    "Honey-Glazed Chicken Wings",
    "protein",
    6500,
    "International",
    "Crisp wings lacquered with honey, chilli and toasted sesame.",
    ["chicken", "wings", "honey"],
    18,
    "https://i.pinimg.com/736x/ed/f2/0b/edf20bfdc01c611330214b36a742e464.jpg"
  ],
  [
    "Charred Peppered Chicken",
    "protein",
    7200,
    "Nigerian",
    "Flame-grilled chicken tossed in fresh pepper sauce and herbs.",
    ["peppered", "chicken", "grilled"],
    19,
    "https://i.pinimg.com/1200x/4b/31/55/4b315509b5634c2e2ef378da780265c3.jpg"
  ],
  [
    "Garlic Butter Prawns",
    "protein",
    9800,
    "International",
    "Jumbo prawns sautéed in garlic butter, parsley and citrus.",
    ["garlic", "butter", "prawns"],
    20,
    "https://i.pinimg.com/736x/81/0f/ba/810fbae8549b77635e0ce0db45a86800.jpg"
  ],
  [
    "Crispy Calamari",
    "protein",
    8500,
    "International",
    "Lightly seasoned calamari with lemon aioli and herbs.",
    ["calamari", "seafood", "fried"],
    21,
    "https://i.pinimg.com/736x/8d/dd/99/8ddd99809fdf30cf32719519fae64237.jpg"
  ],
  [
    "Rosemary Lamb Chops",
    "protein",
    14500,
    "International",
    "Tender lamb chops, rosemary marinade and charred lemon.",
    ["lamb", "chops", "rosemary"],
    22,
    "https://i.pinimg.com/736x/e1/c2/62/e1c262f19d7cb7ef7b3e35d683e4f717.jpg"
  ],
  [
    "Suya Chicken Thighs",
    "protein",
    7800,
    "Nigerian",
    "Boneless chicken thighs grilled with house suya spice.",
    ["suya", "chicken", "grill"],
    23,
    "https://i.pinimg.com/1200x/9f/4e/24/9f4e2435f9c7c867d71493889c4c3564.jpg"
  ],
  [
    "Black Pepper Beef Bites",
    "protein",
    9200,
    "Fusion",
    "Seared beef bites finished with black pepper glaze and scallions.",
    ["beef", "pepper", "bites"],
    24,
    "https://i.pinimg.com/1200x/a0/fb/b6/a0fbb6c7f05c4ec0c913cf1dd31fb856.jpg"
  ],
  [
    "Citrus Grilled Fish",
    "protein",
    9800,
    "International",
    "Fresh fish fillet, citrus marinade, herbs and olive oil.",
    ["grilled", "fish", "citrus"],
    25,
    "https://i.pinimg.com/736x/70/e9/44/70e94498143d92f13d420bcde93d38f2.jpg"
  ],
  [
    "Slow-Roasted Beef Short Rib",
    "protein",
    16000,
    "International",
    "Fork-tender short rib, rich jus and charred shallots.",
    ["beef", "short", "rib"],
    26,
    'https://i.pinimg.com/1200x/b9/2d/93/b92d93965fd790f120c4060087885a48.jpg'
  ],
  [
    "Sticky Soy Beef Bites",
    "protein",
    6900,
    "Asian-inspired",
    "Juicy beef bites glazed in a rich sticky soy sauce with garlic, ginger and a hint of sweetness.",
    ["sticky", "chicken", "asian"],
    27,
    "https://i.pinimg.com/1200x/f8/70/83/f870834c13e6e80158c0aab14474c72f.jpg"
  ],
  [
    "	Peri-Peri Grilled Fish",
    "protein",
    7500,
    "African-inspired",
    "Fresh fish marinated in bold peri-peri spices, grilled to perfection and served with a zesty finish.",
    ["periperi", "fish", "grilled"],
    28,
    "https://i.pinimg.com/236x/8e/0f/6a/8e0f6a830ca842ee885ff2e1806206f4.jpg"
  ],
  [
    "Pepper Prawns & Plantain",
    "protein",
    9300,
    "Nigerian",
    "Peppery prawns paired with sweet ripe plantain and herbs.",
    ["prawns", "plantain", "pepper"],
    29,
    "https://i.pinimg.com/1200x/75/d0/2d/75d02d3a334b4c32691b0bf34bc0f100.jpg"
  ],
  [
    "Herb Crusted White Fish",
    "protein",
    11200,
    "International",
    "Oven-roasted fish with herb crust, lemon and caper butter.",
    ["white", "fish", "herb"],
    30,
    "https://i.pinimg.com/1200x/07/87/80/078780aaec2ec30af2df2a4ef1095ec0.jpg"
  ],
  [
    "Spiced Beef Medallions",
    "protein",
    12800,
    "International",
    "Pan-seared beef medallions with smoked spice rub.",
    ["beef", "medallion", "grilled"],
    31,
    "https://i.pinimg.com/736x/ae/51/54/ae5154cab344c3dced561546c8e62694.jpg"
  ],
  [
    "	Charcoal BBQ Lamb Chops",
    "protein",
    7600,
    "International",
    "Succulent lamb chops seasoned with smoky barbecue spices and grilled over charcoal for a rich, savoury flavour.",
    ["bbq", "lamb", "grill"],
    32,
    "https://i.pinimg.com/736x/cd/c5/ed/cdc5edf0d2f4082dc824153d500d3c59.jpg"
  ],

  [
    "Royal Beef Burger",
    "fast-food",
    8500,
    "International",
    "Brioche bun, aged cheddar, smoked onions, lettuce and signature sauce.",
    ["burger", "beef", "fries"],
    33,
    "https://i.pinimg.com/736x/f6/2a/17/f62a17af7e3c73fd227c475f2f067d7c.jpg"
  ],
  [
    "Crispy Fish & Chips",
    "fast-food",
    7900,
    "International",
    "Crispy golden-battered fish served with seasoned fries, fresh lemon and a creamy tartar dipping sauce.",
    ["fish", "chips", "tartare"],
    34,
    "https://i.pinimg.com/736x/ef/28/11/ef28116ff416b1615bcb1c6a639b950c.jpg"
  ],
  [
    "Beef Shawarma Wrap",
    "fast-food",
    8200,
    "Fusion",
    "Tender seasoned beef wrapped in soft flatbread with fresh vegetables, garlic sauce and a touch of spice.",
    ["beef", "shawarma", "wrap"],
    35,
    "https://i.pinimg.com/1200x/6b/e0/c3/6be0c3deba8af3ff39e95f89756e5474.jpg"
  ],
  [
    "Royal Smash Burger",
    "fast-food",
    9000,
    "International",
    "Double smashed beef patties, American cheese and burger sauce.",
    ["smash", "burger", "beef"],
    36,
    "https://i.pinimg.com/1200x/71/45/5b/71455bf6b1a54d312f1c83d360794e7f.jpg"
  ],
  [
    "Truffle Chicken Pizza",
    "fast-food",
    9800,
    "Fusion",
    "Roast chicken, mushrooms, truffle cream and mozzarella.",
    ["pizza", "chicken", "mushroom"],
    37,
    "https://i.pinimg.com/736x/0d/25/f6/0d25f6769b44e12f35207fe920aa5e83.jpg"
  ],
  [
    "Suya Steak Pizza",
    "fast-food",
    10500,
    "Fusion",
    "Yaji beef, peppers, mozzarella and smoked chilli oil.",
    ["suya", "pizza", "beef"],
    38,
    "https://i.pinimg.com/1200x/eb/77/61/eb7761004b885f92b7e581cf0b68ac6a.jpg"
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
    "https://i.pinimg.com/originals/c3/74/56/c37456fe40a1474ceffb37709a3eccc5.png"
  ],
  [
    "Loaded Chicken Fries",
    "fast-food",
    9200,
    "International",
    "Crisp fries, chicken, cheddar, spring onion and house sauce.",
    ["loaded", "fries", "chicken"],
    41,
    "https://i.pinimg.com/736x/4f/0d/a5/4f0da5017071edce0397dde2ed32d5db.jpg"
  ],
  [
    "Prawn Po’ Boy Roll",
    "fast-food",
    9500,
    "Southern-inspired",
    "Crisp prawns, slaw and spicy remoulade in a toasted roll.",
    ["prawn", "sandwich", "roll"],
    42,
    "https://i.pinimg.com/1200x/77/c9/73/77c97388fbe7e06e2d49fbca47a54e16.jpg"
  ],
  [
    "Cajun Chicken Wrap",
    "fast-food",
    6900,
    "International",
    "Looking for a quick, delicious, and satisfying meal? These Easy Chicken Wraps are packed with juicy, perfectly seasoned chicken, crisp fresh vegetables, shredded cheddar cheese, and a creamy homemade garlic sauce, all wrapped in a soft tortilla. Toasted until lightly golden, every bite delivers the perfect combination of flavor and texture! 😍 Perfect for busy weeknight dinners, easy lunches, meal prep, or a grab-and-go meal, this simple chicken wrap recipe is sure to become a family favorite. Save this easy recipe for your next lunch or dinner!",
    ["wrap", "chicken", "cajun"],
    43,
    "https://i.pinimg.com/736x/dc/55/c9/dc55c9a1763ed1411a6279cdbf368fdf.jpg"
  ],
  [
    "Steak & Cheese Melt",
    "fast-food",
    9800,
    "International",
    "Sliced steak, caramelised onions, cheese and toasted sourdough.",
    ["steak", "sandwich", "cheese"],
    44,
    "https://i.pinimg.com/236x/23/dc/5b/23dc5b2333342a8ab35cee6b795cc337.jpg"
  ],
  [
    "Crispy Fish Burger",
    "fast-food",
    8100,
    "International",
    "Golden fish fillet, slaw, pickles and tartare sauce.",
    ["fish", "burger", "fries"],
    45,
    "https://i.pinimg.com/736x/b6/f0/4d/b6f04df28f818041438580f5f3b2a408.jpg"
    
  ],
  [
    "Spicy Chicken Tacos",
    "fast-food",
    7600,
    "Mexican-inspired",
    "Charred chicken, salsa, avocado, crema and coriander.",
    ["tacos", "chicken", "mexican"],
    46,
    "https://i.pinimg.com/1200x/ca/3c/7e/ca3c7e16f7b8e6c30970289651a22102.jpg"
  ],
  [
    "Beef Quesadilla Royale",
    "fast-food",
    8400,
    "Mexican-inspired",
    "Seasoned beef, melted cheese, peppers and smoky salsa.",
    ["quesadilla", "beef", "cheese"],
    47,
    "https://i.pinimg.com/736x/4e/72/a3/4e72a372c7cc6d18822479eda43b3dcc.jpg"
  ],
  [
    "Chicken & Waffle Stack",
    "fast-food",
    8800,
    "International",
    "Crisp chicken, Belgian waffle, maple glaze and chilli butter.",
    ["chicken", "waffle", "brunch"],
    48,
    "https://i.pinimg.com/736x/9a/3b/98/9a3b98d2baf4981e5ebedc6b3e1abd2a.jpg"
  ],

  [
    "Puff-Puff Trio",
    "snacks",
    3200,
    "Nigerian",
    "Three servings of soft, fluffy Nigerian puff-puff, deep-fried until golden and lightly dusted with sugar for a sweet, satisfying treat.",
    ["puffpuff", "dough", "snack"],
    49,
    "https://i.pinimg.com/1200x/92/98/36/929836737877df304860cf038d114c78.jpg"
  ],
  [
    "Beef Samosa",
    "snacks",
    3800,
    "West African-inspired",
    "Crisp pastry parcels filled with spiced beef and vegetables.",
    ["samosa", "beef", "snack"],
    50,
    "https://i.pinimg.com/1200x/e9/4a/c8/e94ac8457c5975e2310f2fcf702f8b3c.jpg"
  ],
  [
    "Beef Spring Rolls",
    "snacks",
    3900,
    "International",
    "Crisp rolls filled with seasoned beef, vegetables and herbs.",
    ["springrolls", "beef", "snack"],
    51,
    "https://i.pinimg.com/1200x/d6/a3/ab/d6a3abe646a61544662109fede8c3b35.jpg"
  ],
  [
    "Plantain Chips & Dip",
    "snacks",
    2800,
    "Nigerian",
    "Thin-crisp plantain chips with smoked pepper dip.",
    ["plantain", "chips", "dip"],
    52,
    "https://i.pinimg.com/1200x/3a/e7/9b/3ae79b055dccbb506408f9a2ddb13e9a.jpg"
  ],
  [
    "Peppered Gizzard",
    "snacks",
    5200,
    "Nigerian",
    "Tender gizzard glazed in tomato-pepper sauce and onions.",
    ["gizzard", "pepper", "snack"],
    53,
    "https://i.pinimg.com/1200x/38/e6/97/38e697ea66e0a6122cb592a099f538e5.jpg"
  ],
  [
    "Suya Corn Ribs",
    "snacks",
    3600,
    "Fusion",
    "Charred sweetcorn with yaji butter and lime.",
    ["corn", "suya", "snack"],
    54,
    "https://i.pinimg.com/1200x/a0/02/d1/a002d1d5fc19e85e98bd8fa91fd202bf.jpg"
  ],
  [
    "Loaded Nachos Royale",
    "snacks",
    6500,
    "International",
    "Crisp tortilla chips, beef, cheese, salsa, jalapeño and crema.",
    ["nachos", "beef", "cheese"],
    55,
    "https://i.pinimg.com/1200x/e9/04/83/e904837ff3416902dd524988e861b4e9.jpg"
  ],
  [
    "Mozzarella Sticks",
    "snacks",
    4900,
    "International",
    "Golden mozzarella sticks with tomato basil dip.",
    ["mozzarella", "sticks", "snack"],
    56,
    "https://i.pinimg.com/736x/dc/1f/c2/dc1fc261315c21c129c9fc4c5c9ecf5b.jpg"
  ],
  [
    "Crispy Onion Rings",
    "snacks",
    3500,
    "International",
    "Lightly seasoned onion rings with smoked mayo.",
    ["onion", "rings", "snack"],
    57,
    "https://i.pinimg.com/1200x/6a/7b/76/6a7b763c39c1914896222b819deffcb1.jpg"
  ],
  [
    "Chicken Bites",
    "snacks",
    4500,
    "International",
    "Crunchy chicken bites with hot honey dip.",
    ["chicken", "bites", "snack"],
    58,
    "https://i.pinimg.com/1200x/29/ab/39/29ab394d8fef1f269405f282abfb3a99.jpg"
  ],
  [
    "Spiced Potato Wedges",
    "snacks",
    3200,
    "International",
    "Oven-crisp wedges with garlic herb sauce.",
    ["potato", "wedges", "snack"],
    59,
    "https://i.pinimg.com/736x/77/bf/2b/77bf2b8b71dfd7f657ba57ea4742f810.jpg"
  ],
 
  [
    "Cajun Prawns Skewers",
    "snacks",
    6200,
    "International",
    "Quick-grilled prawns in Cajun spice with citrus.",
    ["prawn", "skewers", "snack"],
    61,
    "https://i.pinimg.com/736x/c4/f4/b8/c4f4b8446b5640518949ac33a40cd9a1.jpg"
  ],
  [
    "Smoky Chicken Lollipops",
    "snacks",
    5600,
    "International",
    "Charred chicken lollipops with sticky glaze.",
    ["chicken", "lollipop", "snack"],
    62,
    "https://i.pinimg.com/736x/5b/6e/af/5b6eaf44abfd77f2016112f2bde8f2af.jpg"
  ],
  [
    "Garlic Bread & Whipped Butter",
    "snacks",
    2900,
    "International",
    "Warm garlic bread with cultured whipped butter.",
    ["garlic", "bread", "butter"],
    63,
    "https://i.pinimg.com/736x/7c/3f/1a/7c3f1ae835e8bbd44fdbc84df6a164f9.jpg"
  ],
  [
    "Cassava Croquettes",
    "snacks",
    3400,
    "Nigerian-inspired",
    "Golden-fried cassava bites with a crispy breadcrumb coating and a soft, seasoned centre, served with a flavourful dipping sauce.",
    ["cassava", "croquette", "snack"],
    64,
    "https://i.pinimg.com/736x/a7/6e/9d/a76e9dab8dd4ce0096f68cc11b53398c.jpg"
  ],

  [
    "Classic Cheesecake",
    "desserts",
    5200,
    "International",
    "Vanilla cheesecake, berry compote and buttery biscuit crumb.",
    ["cheesecake", "dessert"],
    65,
    "https://i.pinimg.com/1200x/de/88/ae/de88ae32c53780b6c684a4dd3365e73f.jpg"
  ],
  [
    "Dark Chocolate Torte",
    "desserts",
    5600,
    "International",
    "Dense dark chocolate torte with sea salt and cream.",
    ["chocolate", "cake", "dessert"],
    66,
    "https://i.pinimg.com/736x/6d/1f/cc/6d1fccce3beab49999aba3e779d04f34.jpg"
  ],
  [
    "Salted Caramel Brownie",
    "desserts",
    4900,
    "International",
    "Warm brownie, salted caramel and vanilla gelato.",
    ["brownie", "caramel", "dessert"],
    67,
    "https://i.pinimg.com/1200x/83/b5/3c/83b53caf61e2cc00431886fd5fedd28d.jpg"
  ],
  [
    "Mango Passion Pavlova",
    "desserts",
    5400,
    "International",
    "Crisp meringue, passion fruit cream and ripe mango.",
    ["pavlova", "mango", "dessert"],
    68,
    "https://i.pinimg.com/1200x/92/27/38/922738087abec138d961ed7a55b621d5.jpg"
  ],
  [
    "Classic Tiramisu",
    "desserts",
    5700,
    "Italian-inspired",
    "Espresso-soaked layers, mascarpone and cocoa.",
    ["tiramisu", "dessert", "coffee"],
    69,
    "https://i.pinimg.com/736x/43/6f/b8/436fb87352217cbbccc8ec5c6af565c2.jpg"
  ],
  [
    "Coconut Panna Cotta",
    "desserts",
    5100,
    "International",
    "Silky coconut panna cotta with pineapple and lime.",
    ["panna", "cotta", "coconut"],
    70,
    "https://i.pinimg.com/736x/61/2c/e8/612ce8ceaa01bc6c8e531442b2b43d23.jpg"
  ],
  [
    "Kuli-Kuli",
    "desserts",
    4800,
    "Nigerian-inspired",
    "Crunchy Nigerian peanut snack made from seasoned groundnut paste and fried until golden.",
    ["peanut", "snack", "dessert"],
    71,
    "https://i.pinimg.com/1200x/e1/12/96/e11296e9474701a3c0b52cba3bcd775e.jpg"
  ],
  [
    "Chin Chin",
    "desserts",
    5300,
    "Nigerian-inspired",
    "Crunchy, bite-sized fried pastry made with flour, butter, milk and sugar.",
    ["pastry", "snack", "dessert"],
    72,
    "https://i.pinimg.com/736x/8e/0f/93/8e0f93070129c8015475d996addf3ffb.jpg"
  ],
  [
    "Plantain Mosa",
    "desserts",
    4800,
    "Nigerian-inspired",
    "Ripe mashed plantain mixed with spices and flour, then fried into soft, sweet golden bites.",
    ["plantain", "snack", "dessert"],
    73,
    "https://i.pinimg.com/736x/f4/76/7e/f4767e235e861393d1fce01cd5c4b9da.jpg"
  ],
  [
    "Lemon Meringue Tart",
    "desserts",
    5000,
    "International",
    "Bright lemon curd, buttery pastry and toasted meringue.",
    ["lemon", "tart", "dessert"],
    74,
    "https://i.pinimg.com/736x/53/c8/9b/53c89bb1ae1566862b9450ea4b28af99.jpg"
  ],
  [
    "Plantain Cake",
    "desserts",
    4600,
    "Nigerian-inspired",
    "SoSweet, moist cake made with ripe mashed plantains, butter, eggs and warm spices.ft sponge cake soaked in a rich mixture of milk and cream, served chilled.",
    ["plantain", "snack", "dessert"],
    75,
    "https://i.pinimg.com/1200x/76/92/e4/7692e4d98b76242bdaacce3af0509436.jpg"
  ],
  [
    "Coconut Ice Cream",
    "desserts",
    4200,
    "International",
    "Creamy homemade ice cream made with coconut milk, cream and sugar.",
    ["coconut", "icecream", "dessert"],
    76,
    "https://i.pinimg.com/736x/b9/2b/cf/b92bcfd61ba08633204fd74c2fbc70f9.jpg"
  ],
  [
    "Strawberry Shortcake",
    "desserts",
    5100,
    "International",
    "Soft vanilla sponge, berries and lightly whipped cream.",
    ["strawberry", "cake", "dessert"],
    77,
    "https://i.pinimg.com/736x/f0/5b/f3/f05bf3a538620233a59980b05c95c916.jpg"
  ],
  [
    "Espresso Affogato",
    "desserts",
    4300,
    "Italian-inspired",
    "Vanilla gelato drenched in a hot espresso shot.",
    ["affogato", "coffee", "gelato"],
    78,
    "https://i.pinimg.com/1200x/7f/c9/87/7fc98748d3ad0d3cbc1101f453d52463.jpg"
  ],
  [
    "Peanut Butter Mousse",
    "desserts",
    4700,
    "International",
    "Silky peanut mousse, chocolate crumb and roasted peanuts.",
    ["mousse", "peanut", "dessert"],
    79,
    "https://i.pinimg.com/736x/9f/ea/8a/9fea8a58731bb02f332406a499b1fb5c.jpg"
  ],
 
  [
    "Royal Chapman",
    "drinks",
    3500,
    "Nigerian",
    "House Chapman with citrus, bitters, grenadine and orange.",
    ["chapman", "drink"],
    81,
    "https://i.pinimg.com/236x/4b/2d/d1/4b2dd11bb74055827f688f00809abfcc.jpg"
  ],
  [
    "Fresh Pineapple Ginger",
    "drinks",
    3200,
    "Nigerian-inspired",
    "Fresh pineapple juice brightened with ginger and lime.",
    ["pineapple", "ginger", "drink"],
    82,
    "https://i.pinimg.com/1200x/f9/18/33/f91833f0582e2bd858c64cc01dd4b2f9.jpg"
  ],
  [
    "Zobo Royale",
    "drinks",
    3000,
    "Nigerian",
    "Hibiscus cooler infused with ginger, pineapple and spice.",
    ["zobo", "hibiscus", "drink"],
    83,
    "https://i.pinimg.com/1200x/52/e0/b7/52e0b75edf0089f2e3914faeff82fae4.jpg"
  ],
  [
    "Kunu Aya",
    "drinks",
    3500,
    "Nigerian",
    "A creamy, naturally sweet drink made from tiger nuts, dates and coconut.",
    ["kunu", "tigernuts", "drink"],
    84,
    "https://i.pinimg.com/1200x/60/d1/1b/60d11bf6f57122662e96a10c127031b3.jpg"
  ],
  [
    "Fresh Palm Wine",
    "drinks",
    3500,
    "Nigerian",
    "A traditional natural drink tapped from palm trees, known for its mildly sweet and fermented flavour.",
    ["palmwine", "mint", "lime"],
    85,
    "https://i.pinimg.com/1200x/a1/97/10/a1971079198e8f3bc686c9eaf90861fa.jpg"
  ],
  [
    "Berry Lemonade",
    "drinks",
    3500,
    "International",
    "Mixed berries, fresh lemon and sparkling water.",
    ["berry", "lemonade", "drink"],
    86,
    "https://i.pinimg.com/1200x/87/2f/18/872f18e131dd1a6472ca5ae80ec01476.jpg"
  ],
  [
    "Iced Latte",
    "drinks",
    4000,
    "International",
    "Espresso, chilled milk and a soft caramel finish.",
    ["latte", "coffee", "drink"],
    87,
    "https://i.pinimg.com/736x/92/c8/f4/92c8f47dd2fe215a1284b49a0348acc6.jpg"
  ],
  [
    "Vanilla Cold Brew",
    "drinks",
    4500,
    "International",
    "Slow-steeped cold brew, vanilla and chilled cream.",
    ["coldbrew", "coffee", "drink"],
    88,
    "https://i.pinimg.com/1200x/03/1f/52/031f52b7d22fb1b0dab72bd68bcaa4ca.jpg"
  ],


  [
    "Watermelon Cooler",
    "drinks",
    3000,
    "International",
    "Fresh watermelon, lime and basil over crushed ice.",
    ["watermelon", "lime", "drink"],
    91,
    "https://i.pinimg.com/1200x/d6/20/85/d62085cd6a5d78f1b46acae5347d4f00.jpg"
  ],
  [
    "Virgin Piña Colada",
    "drinks",
    3800,
    "International",
    "Pineapple, coconut cream and crushed ice.",
    ["pinacolada", "pineapple", "coconut"],
    92,
    "https://i.pinimg.com/1200x/ae/15/6e/ae156ecb5dc95c949a5657af3b8a0550.jpg"
  ],
  [
    "Chocolate Frappe",
    "drinks",
    4500,
    "International",
    "Iced chocolate, espresso, milk and whipped cream.",
    ["chocolate", "frappe", "drink"],
    93,
     "https://i.pinimg.com/736x/6f/6b/5d/6f6b5d5039c81d35d5b580efa7e3608f.jpg"
  ],
  [
    "Strawberry Smoothie",
    "drinks",
    4200,
    "International",
    "Fresh strawberries blended with yogurt and honey.",
    ["strawberry", "smoothie", "drink"],
    94,
   "https://i.pinimg.com/736x/8e/40/22/8e4022b38beb7d6fa99d5072f76b91b5.jpg"
  ],
  [
    "Tropical Fruit Punch",
    "drinks",
    3500,
    "International",
    "Pineapple, orange, passion fruit and a bright citrus lift.",
    ["fruit", "punch", "drink"],
    95,
    "https://i.pinimg.com/1200x/dc/cc/16/dccc16f98a27643d0b16ae185334f223.jpg"
  ],
  [
    "Royal House Iced Tea",
    "drinks",
    3000,
    "Royal Bite signature",
    "Black tea, peach, lemon and fresh mint over ice.",
    ["icedtea", "peach", "drink"],
    96,
    "https://i.pinimg.com/736x/2e/47/9a/2e479aae8787715603bd97d65e5da6de.jpg"
  ],
];

export const menuItems = rows.map(
  ([name, category, price, origin, description, tags, id, customImage]) => ({
    id,
    name,
    category,
    price,
    origin,
    description,
    tags,
    image: customImage || image(tags, id),
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
