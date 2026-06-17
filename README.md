# 🛒 Grocify

<div align="center">

![Grocify Banner](https://img.shields.io/badge/Grocify-Online%20Grocery%20Store-brightgreen?style=for-the-badge&logo=shopify&logoColor=white)

[![GitHub Stars](https://img.shields.io/github/stars/aazmeer-official/Grocify?style=social)](https://github.com/aazmeer-official/Grocify/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/aazmeer-official/Grocify?style=social)](https://github.com/aazmeer-official/Grocify/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/aazmeer-official/Grocify)](https://github.com/aazmeer-official/Grocify/issues)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-In%20Development-orange)](https://github.com/aazmeer-official/Grocify)

**A modern, full-stack online grocery shopping platform built with the MERN stack.**  
Fast. Clean. Scalable. Built by a developer on the road to FAANG. 🚀

[Live Demo](#) · [Report Bug](https://github.com/aazmeer-official/Grocify/issues) · [Request Feature](https://github.com/aazmeer-official/Grocify/issues)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [How to Use](#-how-to-use)
- [Screenshots](#-screenshots)
- [Roadmap & Future Features](#-roadmap--future-features)
- [Contributing](#-contributing)
- [Developer](#-developer)
- [License](#-license)

---

## 🧾 About the Project

**Grocify** is a full-featured online grocery shopping web application designed to deliver a seamless, fast, and intuitive shopping experience. The platform allows users to browse grocery products across categories, manage a cart, place orders, and track them — all in one clean interface.

This project is built from scratch as part of a hands-on, real-world development journey toward becoming a top-tier MERN Stack developer.

> 🎯 **Goal:** Build a production-ready e-commerce application that solves real problems, demonstrates full-stack mastery, and serves as a flagship project for career advancement.

---

## ✨ Features

### 🛍️ Shopping Experience
- 🧺 Browse grocery products organized by categories (Fruits, Vegetables, Dairy, Bakery, Beverages, etc.)
- 🔍 Real-time search with instant filtering
- 📦 Detailed product pages with images, descriptions, price, and stock info
- ⭐ Product ratings and reviews system
- 🏷️ Discount badges and sale tags

### 🛒 Cart & Checkout
- ➕ ➖ Add, remove, and update item quantities
- 💰 Live price calculation with subtotal, taxes, and delivery fees
- 💾 Persistent cart using LocalStorage (guest) and database (logged-in users)
- 🎟️ Promo code / coupon system
- 💳 Checkout flow with address and payment selection

### 👤 User System
- 🔐 Secure registration and login (JWT Authentication)
- 📧 Email verification on signup
- 🔑 Forgot password / reset password via email
- 🧾 Order history and order detail view
- 📍 Save multiple delivery addresses
- 👤 Edit profile and manage account settings

### 📱 Design & Performance
- 📱 Fully responsive — works perfectly on mobile, tablet, and desktop
- ⚡ Fast-loading, optimized UI with lazy loading
- 🌙 Dark mode / Light mode toggle
- ♿ Accessible UI with ARIA labels and keyboard navigation

### 🛠️ Admin Panel *(In Progress)*
- 📊 Dashboard with sales and user analytics
- 📦 Add, edit, delete products
- 📋 View and manage all orders
- 👥 User management
- 📁 Category management

---

## 🧠 Tech Stack

### 🖥️ Frontend
| Technology | Purpose |
|---|---|
| React.js | UI component library |
| React Router DOM | Client-side routing |
| Redux Toolkit | Global state management |
| Axios | API requests |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations and transitions |

### ⚙️ Backend
| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API framework |
| JWT | Authentication tokens |
| Bcrypt.js | Password hashing |
| Multer | Image/file upload handling |
| Nodemailer | Email sending (OTP, reset password) |

### 🗄️ Database & Storage
| Technology | Purpose |
|---|---|
| MongoDB | NoSQL database |
| Mongoose | MongoDB ODM |
| Cloudinary | Image hosting & optimization |

### 🔧 Dev Tools & Utilities
| Tool | Purpose |
|---|---|
| Git & GitHub | Version control |
| VS Code | Primary code editor |
| Postman | API testing |
| dotenv | Environment variable management |
| Nodemon | Auto-restart dev server |
| ESLint & Prettier | Code quality and formatting |

---

## 📁 Project Structure

```
grocify/
│
├── 📂 client/                        # React Frontend
│   ├── 📂 public/
│   │   ├── index.html
│   │   └── favicon.ico
│   │
│   └── 📂 src/
│       ├── 📂 assets/                # Images, icons, fonts
│       ├── 📂 components/            # Reusable UI components
│       │   ├── Navbar.jsx
│       │   ├── Footer.jsx
│       │   ├── ProductCard.jsx
│       │   ├── CartItem.jsx
│       │   └── ...
│       ├── 📂 pages/                 # Route-level page components
│       │   ├── Home.jsx
│       │   ├── Shop.jsx
│       │   ├── ProductDetail.jsx
│       │   ├── Cart.jsx
│       │   ├── Checkout.jsx
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   ├── Profile.jsx
│       │   ├── OrderHistory.jsx
│       │   └── Admin/
│       │       ├── Dashboard.jsx
│       │       ├── ManageProducts.jsx
│       │       └── ManageOrders.jsx
│       ├── 📂 redux/                 # State management
│       │   ├── store.js
│       │   ├── cartSlice.js
│       │   ├── authSlice.js
│       │   └── productSlice.js
│       ├── 📂 hooks/                 # Custom React hooks
│       ├── 📂 utils/                 # Helper functions
│       ├── 📂 styles/                # Global CSS / Tailwind config
│       ├── App.jsx
│       └── main.jsx
│
├── 📂 server/                        # Node.js + Express Backend
│   ├── 📂 config/
│   │   └── db.js                     # MongoDB connection
│   ├── 📂 controllers/               # Route logic
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   └── orderController.js
│   ├── 📂 models/                    # Mongoose schemas
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Category.js
│   ├── 📂 routes/                    # Express route definitions
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   └── orderRoutes.js
│   ├── 📂 middleware/
│   │   ├── authMiddleware.js         # JWT verification
│   │   ├── adminMiddleware.js        # Admin-only access
│   │   └── errorHandler.js
│   ├── 📂 utils/
│   │   ├── sendEmail.js
│   │   └── generateToken.js
│   └── server.js                     # Entry point
│
├── .env                              # Environment variables (never commit this)
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)

---

### 📦 Installation

**1. Clone the repository**

```bash
git clone https://github.com/aazmeer-official/Grocify.git
cd Grocify
```

**2. Install backend dependencies**

```bash
cd server
npm install
```

**3. Install frontend dependencies**

```bash
cd ../client
npm install
```

**4. Set up environment variables**

Create a `.env` file in the `server/` directory (see [Environment Variables](#-environment-variables) section).

**5. Run the development servers**

Backend (from `server/` folder):
```bash
npm run dev
```

Frontend (from `client/` folder):
```bash
npm run dev
```

**6. Open in browser**

```
Frontend: http://localhost:5173
Backend API: http://localhost:5000
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server/` directory:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d

# Cloudinary (Image Hosting)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Client URL (for CORS)
CLIENT_URL=http://localhost:5173
```

> ⚠️ **Never commit your `.env` file to GitHub.** It's already listed in `.gitignore`.

---

## 🔌 API Endpoints

### 🔐 Auth Routes — `/api/auth`
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register new user | ❌ |
| POST | `/login` | Login user | ❌ |
| POST | `/forgot-password` | Send password reset email | ❌ |
| PUT | `/reset-password/:token` | Reset user password | ❌ |
| GET | `/me` | Get logged-in user profile | ✅ |

### 🧺 Product Routes — `/api/products`
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all products (with filters) | ❌ |
| GET | `/:id` | Get single product | ❌ |
| POST | `/` | Add new product | ✅ Admin |
| PUT | `/:id` | Update product | ✅ Admin |
| DELETE | `/:id` | Delete product | ✅ Admin |

### 🛒 Cart Routes — `/api/cart`
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get user's cart | ✅ |
| POST | `/add` | Add item to cart | ✅ |
| PUT | `/update` | Update item quantity | ✅ |
| DELETE | `/remove/:productId` | Remove item from cart | ✅ |
| DELETE | `/clear` | Clear entire cart | ✅ |

### 📦 Order Routes — `/api/orders`
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get user's orders | ✅ |
| GET | `/:id` | Get single order details | ✅ |
| POST | `/place` | Place a new order | ✅ |
| PUT | `/:id/cancel` | Cancel an order | ✅ |
| GET | `/admin/all` | Get all orders (admin) | ✅ Admin |
| PUT | `/admin/:id/status` | Update order status | ✅ Admin |

---

## 🧪 How to Use

1. **Open the app** in your browser at `http://localhost:5173`
2. **Browse products** from the home page or shop page by category
3. **Search** for a specific product using the search bar
4. **View product details** by clicking on any product card
5. **Add to cart** and adjust quantities as needed
6. **Register or Login** to proceed to checkout
7. **Enter delivery address** and select payment method
8. **Place your order** and receive a confirmation
9. **Track your order** from the Order History page

---

## 📸 Screenshots

> Screenshots will be added once the UI is complete.

| Page | Preview |
|------|---------|
| 🏠 Home Page | `./screenshots/home.png` |
| 🛍️ Shop / Product Listing | `./screenshots/shop.png` |
| 📦 Product Detail | `./screenshots/product-detail.png` |
| 🛒 Cart Page | `./screenshots/cart.png` |
| 💳 Checkout Page | `./screenshots/checkout.png` |
| 👤 User Profile | `./screenshots/profile.png` |
| 📊 Admin Dashboard | `./screenshots/admin-dashboard.png` |

---

## 🗺️ Roadmap & Future Features

Here's the full plan of what's coming to Grocify. This is where the real magic happens. 🔥

### ✅ Phase 1 — Core MVP *(Current)*
- [x] Project setup (React + Node + MongoDB)
- [x] Product browsing and search
- [x] Cart functionality
- [x] User authentication (JWT)
- [ ] Checkout flow
- [ ] Order placement and history
- [ ] Admin panel — product management

### 🔄 Phase 2 — Enhanced Features *(In Progress)*
- [ ] **Order Tracking System** 📦 — Real-time order status updates (Pending → Processing → Shipped → Delivered)
- [ ] **Product Reviews & Ratings** ⭐ — Users can rate and review products after purchase
- [ ] **Wishlist / Saved Items** ❤️ — Save products for later
- [ ] **Promo Codes & Coupons** 🎟️ — Discount system with percentage and flat-rate coupons
- [ ] **Multi-image Product Gallery** 🖼️ — View product from multiple angles
- [ ] **Advanced Filters & Sorting** 🔽 — Filter by price, rating, category, availability

### 🚀 Phase 3 — Advanced Capabilities
- [ ] **Real Payment Gateway** 💳 — Integration with Stripe or Razorpay for actual payments
- [ ] **AI-Based Recommendations** 🤖 — Suggest products based on purchase history and browsing behavior using a recommendation engine
- [ ] **Smart Search (NLP)** 🧠 — Natural language search ("cheap fruits under 200") powered by AI
- [ ] **Email Notifications** 📧 — Order confirmation, shipping updates, and promotions via Nodemailer
- [ ] **Push Notifications** 🔔 — Browser push alerts for order updates and deals
- [ ] **Inventory Management** 📊 — Auto out-of-stock flagging, low-stock alerts for admin

### 📱 Phase 4 — Mobile & Scale
- [ ] **Progressive Web App (PWA)** 🌐 — Installable on mobile, works offline with service workers
- [ ] **React Native Mobile App** 📱 — Dedicated iOS and Android app
- [ ] **Delivery Partner Panel** 🛵 — Separate interface for delivery agents to accept and update orders
- [ ] **Multi-language Support (i18n)** 🌍 — Urdu, English, and other regional languages
- [ ] **Multiple Vendor Support** 🏪 — Allow multiple sellers to list products (marketplace model)
- [ ] **Subscription / Weekly Basket** 🔁 — Subscribe to weekly grocery delivery at a discount

### 🧠 Phase 5 — Intelligence & Optimization
- [ ] **Chatbot Assistant** 💬 — AI-powered customer support chatbot integrated into the platform
- [ ] **Dynamic Pricing Engine** 💹 — Price adjustments based on demand, time of day, and stock levels
- [ ] **Fraud Detection** 🔒 — Flag suspicious transactions and order patterns
- [ ] **Analytics Dashboard** 📈 — Sales trends, top products, revenue charts for admin
- [ ] **A/B Testing Framework** 🧪 — Test UI variations to optimize conversion rates
- [ ] **SEO Optimization** 🔍 — Server-side rendering with Next.js for better search engine ranking

---

## 🤝 Contributing

Contributions are what make the open-source community an amazing place. Any contributions are **greatly appreciated**.

**Steps to contribute:**

1. **Fork** the repository
2. **Create** your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m "Add: AmazingFeature description"
   ```
4. **Push** to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request** on GitHub

### 📋 Commit Message Convention

```
Add: new feature added
Fix: bug fixed
Update: existing feature updated
Remove: something removed
Refactor: code refactored without feature change
Docs: documentation updated
Style: formatting, no logic change
```

---

## 👨‍💻 Developer

<div align="center">

**Aazmeer**

🏢 CEO of [XEVNOX](https://github.com/aazmeer-official)  
💻 Full Stack Developer — MERN Stack (in progress)  
🎯 Building real-world projects to reach FAANG 🚀  
📍 Pakistan

[![GitHub](https://img.shields.io/badge/GitHub-aazmeer--official-black?style=flat-square&logo=github)](https://github.com/aazmeer-official)

</div>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Aazmeer (XEVNOX)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<div align="center">

Made with ❤️ by **Aazmeer** | XEVNOX

⭐ **Star this repo if you found it helpful!** ⭐

</div>
