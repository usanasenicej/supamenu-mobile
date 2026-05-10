const CATEGORIES = [
  { id: '1', name: 'All', icon: 'LayoutGrid' },
  { id: '2', name: 'Burgers', icon: 'Beef' },
  { id: '3', name: 'Pizza', icon: 'Pizza' },
  { id: '4', name: 'Pasta', icon: 'Utensils' },
  { id: '5', name: 'Drinks', icon: 'CupSoda' },
  { id: '6', name: 'Desserts', icon: 'CakeSlice' },
];

const RESTAURANTS = [
  {
    id: '1',
    name: 'Choose Kigali',
    address: 'World, African, Pizzeria, Coffee',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Heaven Restaurant',
    address: 'African, International, Wine Bar',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'The Hut',
    address: 'Asian, Fusion, Indian',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Pili Pili',
    address: 'Grill, Pizza, European',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
  },
];

const MENU_CATEGORIES = [
  { id: '1', name: 'Appetizer' },
  { id: '2', name: 'Starter' },
  { id: '3', name: 'Main' },
  { id: '4', name: 'Dessert' },
  { id: '5', name: 'Drink' },
];

const DRINKS = [
  {
    id: 'd1',
    name: 'Tom Yummy',
    price: 5000,
    description: 'Kaffir Lime Vodka, Lemongrass, Ginger, Citrus',
    priceUsd: 12.5,
  },
  {
    id: 'd2',
    name: 'Singapore Sling',
    price: 5000,
    description: 'Gin, Benedictine, Citrus, Cucumber',
    priceUsd: 12.5,
  },
  {
    id: 'd3',
    name: 'White Russian',
    price: 6000,
    description: 'Vanilla, Coffee and Chocolate with hints of Orange',
    priceUsd: 12.5,
  },
];

const MENU_ITEMS = [
  {
    id: '1',
    name: 'Supa Truffle Burger',
    category: 'Burgers',
    price: 18.50,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    description: 'Black Angus beef, truffle aioli, caramelized onions, and aged Gruyère.',
  },
  {
    id: '2',
    name: 'Spiced Salmon Poke',
    category: 'All',
    price: 22.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    description: 'Fresh Atlantic salmon, avocado, edamame, and our signature spicy soy dressing.',
  },
];

module.exports = {
  CATEGORIES,
  RESTAURANTS,
  MENU_CATEGORIES,
  DRINKS,
  MENU_ITEMS
};
