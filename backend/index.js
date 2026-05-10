const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const { 
  CATEGORIES, 
  RESTAURANTS, 
  MENU_CATEGORIES, 
  DRINKS, 
  MENU_ITEMS 
} = require('./data/mockData');

// Routes
app.get('/api/categories', (req, res) => {
  res.json(CATEGORIES);
});

app.get('/api/restaurants', (req, res) => {
  res.json(RESTAURANTS);
});

app.get('/api/menu-categories', (req, res) => {
  res.json(MENU_CATEGORIES);
});

app.get('/api/drinks', (req, res) => {
  res.json(DRINKS);
});

app.get('/api/menu-items', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    const filtered = MENU_ITEMS.filter(item => item.category === category);
    return res.json(filtered);
  }
  res.json(MENU_ITEMS);
});

// Root route
app.get('/', (req, res) => {
  res.send('Supamenu Backend API is running...');
});

// Auth Routes
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt:', email);
  // Placeholder logic
  if (email && password) {
    res.json({
      success: true,
      user: { id: '1', name: 'John Doe', email: email },
      token: 'mock-jwt-token'
    });
  } else {
    res.status(400).json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body;
  console.log('Register attempt:', email);
  // Placeholder logic
  res.json({
    success: true,
    user: { id: '2', name: name, email: email },
    token: 'mock-jwt-token'
  });
});

// Order Routes
app.post('/api/orders', (req, res) => {
  const orderData = req.body;
  console.log('New Order Received:', orderData);
  res.json({ success: true, orderId: Math.floor(Math.random() * 1000000) });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
