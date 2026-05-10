# Supamenu Backend

A Node.js/Express backend for the Supamenu digital restaurant application.

## Getting Started

### Prerequisites
- Node.js installed

### Installation
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the server
- For development (with nodemon):
  ```bash
  npm run dev
  ```
- For production:
  ```bash
  npm start
  ```

## API Endpoints

### Data
- `GET /api/categories`: Fetch all food categories.
- `GET /api/restaurants`: Fetch available restaurants.
- `GET /api/menu-categories`: Fetch menu sections (Appetizer, Main, etc.).
- `GET /api/menu-items`: Fetch all menu items.
  - Optional query param: `?category=Burgers`
- `GET /api/drinks`: Fetch drink options.

### Authentication
- `POST /api/auth/login`: User login.
- `POST /api/auth/register`: User registration.

### Orders
- `POST /api/orders`: Submit a new order.

## Environment Variables
Create a `.env` file in the backend root:
```
PORT=5000
```
