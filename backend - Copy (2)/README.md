# Restaurant Backend

This backend is built with Express, MongoDB, JWT authentication, and Cloudinary image upload support. It is designed to serve the restaurant project frontend with the following core features:

- User registration and login with JWT
- Restaurant profile creation and update
- Menu item CRUD operations
- Order creation and status tracking
- Image uploading via Cloudinary or direct image URL

## Setup

1. Copy environment values into `backend/.env` from `.env.example`.
2. Install dependencies from the backend folder:

```bash
cd backend
npm install
```

3. Start the server:

```bash
npm run dev
```

The server listens on `http://localhost:5000` by default.

## Recommended environment variables

```env
MONGODB_URI=mongodb://localhost:27017/restaurant_app
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5000
```

## API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

### Restaurants
- `GET /api/restaurants`
- `GET /api/restaurants/me`
- `GET /api/restaurants/:id`
- `POST /api/restaurants`
- `PUT /api/restaurants/:id`

### Menu Items
- `GET /api/menu-items`
- `GET /api/menu-items/:id`
- `POST /api/menu-items`
- `PUT /api/menu-items/:id`
- `DELETE /api/menu-items/:id`

Query examples:
- `GET /api/menu-items?restaurantId=<id>`
- `GET /api/menu-items?category=Drinks`

### Orders
- `POST /api/orders`
- `GET /api/orders`
- `GET /api/orders/:id`
- `PUT /api/orders/:id/status`

### Uploads
- `POST /api/uploads`

Use authenticated requests with `Authorization: Bearer <token>`.

## Frontend integration notes

- Replace local mock login with API calls to `/api/auth/login` and `/api/auth/register`.
- Store JWT in local storage or secure HTTP-only cookies.
- Use `/api/restaurants` and `/api/menu-items` for menu and restaurant data.
- Upload menu images with `/api/uploads` and save the returned URL in the menu item payload.
