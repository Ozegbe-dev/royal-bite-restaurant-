# Royal Bite — Premium React Restaurant Website

A client-ready React + Vite restaurant experience based on the Royal Bite project brief.

## Run locally

### Windows
Double-click `START-ROYAL-BITE.bat`.

### Terminal
```powershell
npm install
npm run dev
```

Open the Local URL Vite prints, normally `http://localhost:5173/` (or the next available port).

## Important
Do not open `index.html` directly and do not use Live Server for this Vite project.

## Included
- Home, Menu, About / Our Story, Experience, Gallery, Guest Stories, Reservation, Contact, Checkout
- 96 menu items across 6 categories
- Search, category filters, favorites, cart drawer, localStorage persistence
- Reservation form and checkout flow
- Page-specific motion and interactions
- Responsive navigation and mobile behavior
- Hero/story/gallery image sources updated away from the previous LoremFlickr placeholders
- Integration points for real WhatsApp, email, database, reservation, payment, POS, map and social systems

## Business integrations
The current build is frontend-only. Replace placeholder contact information and connect real business services before production launch.


## Image reliability update
All page and menu image references were moved away from keyword-generated image services and dead third-party URLs to direct Unsplash image assets. A browser-level image error fallback is also included so a failed remote asset never leaves a broken-image icon. For final client launch, replace these stock assets with Royal Bite-approved/licensed photography supplied by the restaurant.
