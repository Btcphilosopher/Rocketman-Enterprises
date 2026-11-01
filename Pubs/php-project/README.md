# The MicroPub Collective - PHP Edition

A production-ready, modular PHP website for **The MicroPub Collective** celebrating British micropubs, real cask ales, artisan ciders, and local hospitality.

## Features

- **Heritage British Pub Visual Identity**: Dark tavern forest green canvas (`#0b1410`), antique gold foil accents (`#d4af37`), serif typography (`Playfair Display`), and warm amber pub photography.
- **Hero & Chalkboard Section**: Matching the original design with classic British pub exterior backdrop, "Small Pubs. Big Character." title, and chalk-rendered offerings board.
- **4-Pillar Value Ribbon**: Real Ales & Craft Beer, Fine Wines & Spirits, Great Food & Snacks, and Local Community & Events.
- **Curated Pub Directory**: Search and filter authentic UK micropubs (Lincoln, Hebden Bridge, Canterbury, Bath, Bakewell, York) with cask counts, opening times, CAMRA awards, and addresses.
- **Cellar Taplist & Menu**: Real-time style tasting notes, ABV, and half/pint pricing for living cask ales, craft kegs, and farmhouse ciders.
- **Artisan Food Menu**: Scotch eggs, Melton Mowbray pork pies, local sourdough toasties, and ploughman's boards with ale pairings.
- **Acoustic Events & Quiz Calendar**: Unplugged sessions, brewer tastings, and RSVP links.
- **Working PHP Contact & Snug Reservation Form**: With server-side sanitization, email validation, and flash feedback alerts.

## Project Structure

```
php-project/
├── index.php          # Main homepage with hero, value ribbon, and 4 showcase cards
├── header.php         # Reusable HTML head, crown SVG wordmark, and top navigation
├── footer.php         # Reusable footer, CAMRA charter, newsletter, and opening traditions
├── data.php           # Central PHP data array for pubs, drinks, food, and events
├── pubs.php           # Interactive filterable pub directory
├── drinks.php         # Cellar list & tasting notes
├── food.php           # Artisan pub snacks & food menu
├── events.php         # What's on & folk music sessions
├── contact.php        # Snug booking and contact form with POST processing
├── style.css          # Responsive CSS stylesheet (no external CSS dependencies needed)
└── images/            # High-resolution photographic assets
    ├── hero.jpg       # Pub exterior at dusk on historic street
    ├── drinks.jpg     # Pint of cask ale in crown glass
    ├── interior.jpg   # Atmospheric timber snug interior
    ├── food.jpg       # Artisanal scotch eggs on oak board
    └── events.jpg     # Live acoustic folk session
```

## How to Run Locally

You can run this project using PHP's built-in web server:

```bash
cd php-project
php -S localhost:8000
```

Open your browser and navigate to:
```
http://localhost:8000
```

## Deployment to Web Hosts

This codebase runs on any web server with PHP 7.4+ or PHP 8.x:
- **cPanel / Shared Hosting**: Upload all files to your `public_html` directory.
- **Apache**: Requires no special `.htaccess` configuration.
- **Nginx**: Standard `try_files $uri $uri/ /index.php?$query_string;` configuration.
