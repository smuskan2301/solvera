# SOLVÉRA — Your Skin. Your Ritual.

A responsive, beginner-friendly beauty & cosmetics storefront built with HTML, CSS and vanilla JavaScript.

## Project structure

- `index.html` — page shell, header, footer and app mount
- `style.css` — responsive visual design system
- `script.js` — navigation, catalogue filters, cart, wishlist, routines, finder, journal and demo checkout
- `products.js` — 24 fictional sample products and demo reviews

## Run in Visual Studio Code

1. Extract `solvera-store.zip` to a folder.
2. Open the extracted `solvera-store` folder in VS Code.
3. Install the **Live Server** extension if it is not already installed.
4. Right-click `index.html` and choose **Open with Live Server**.
5. The site runs in your browser. Internet is required for Google Fonts and Unsplash product imagery.

You can also open `index.html` directly, but Live Server is recommended.

## Features

- Responsive homepage, product catalogue, product detail views, wishlist, cart and checkout demo
- Working search, category, price, skin type, concern, finish and shade filters
- Sorting by popularity, price, rating and name
- LocalStorage persistence for cart, wishlist and discount code
- Demo coupons: `SOLVERA10` (10% off) and `RITUAL200` (₹200 off)
- Free shipping at ₹1,499; otherwise ₹99
- Beauty Finder, routines/bundles, journal articles, FAQ, contact demo and policy pages
- Form validation and local success messages

## Important demo notes

SOLVÉRA is fictional. Product names, prices, ratings, reviews and testimonials are sample data. Checkout does not collect card details, process payments or ship products. Newsletter and contact forms do not send information to a server. The cart and wishlist are stored in this browser's localStorage.

Images are loaded from Unsplash URLs and require an internet connection. For production, use image assets you have permission to use, implement a secure backend, real inventory, payment provider, order emails, privacy/legal review, and accessible error handling.
