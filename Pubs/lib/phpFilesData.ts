export interface PhpFileEntry {
  filename: string;
  category: 'core' | 'template' | 'views' | 'styles' | 'docs';
  description: string;
  code: string;
}

export const PHP_FILES: PhpFileEntry[] = [
  {
    filename: 'index.php',
    category: 'core',
    description: 'Main homepage template rendering the Hero section, value proposition ribbon, and 4 showcase cards.',
    code: `<?php
require_once __DIR__ . '/data.php';
$page_title = 'The MicroPub Collective | Small Pubs. Big Character.';
include __DIR__ . '/header.php';
?>

<!-- Hero Section (Matches visual identity) -->
<section class="hero-section" style="background-image: linear-gradient(to right, rgba(10, 19, 15, 0.88) 0%, rgba(10, 19, 15, 0.6) 45%, rgba(10, 19, 15, 0.2) 100%), url('images/hero.jpg');">
    <div class="hero-container">
        <div class="hero-content">
            <h1 class="hero-title">
                Small Pubs.<br>
                <span class="gold-accent-line">Big Character.</span>
            </h1>
            <p class="hero-subtitle">
                A collection of outstanding micropubs across the UK, celebrating great drinks, local community and British hospitality.
            </p>
            <div class="hero-actions">
                <a href="pubs.php" class="btn-hero-gold">
                    EXPLORE OUR PUBS <span class="arrow-icon">→</span>
                </a>
            </div>
        </div>

        <!-- Chalkboard Menu Accent -->
        <div class="hero-chalkboard">
            <div class="chalkboard-frame">
                <div class="chalkboard-inner">
                    <p class="chalk-item">Real Ales</p>
                    <p class="chalk-item">Craft Beer</p>
                    <p class="chalk-item">Fine Wines</p>
                    <p class="chalk-item">Great Food</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 4-Feature Ribbon Banner -->
<section class="feature-ribbon">
    <div class="ribbon-container">
        <div class="ribbon-item">
            <div class="ribbon-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M12 2v4m0 0a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4 4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4zm-4 4a6 6 0 0 0-4 6c0 3.3 2.7 6 6 6m8-12a6 6 0 0 1 4 6c0 3.3-2.7 6-6 6m-4 0v4"/>
                </svg>
            </div>
            <div class="ribbon-text">
                <span class="ribbon-heading">REAL ALES</span>
                <span class="ribbon-sub">& CRAFT BEER</span>
            </div>
        </div>

        <div class="ribbon-divider"></div>

        <div class="ribbon-item">
            <div class="ribbon-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M8 22h8m-4-7v7m-5-15a5 5 0 0 0 10 0V2H7v5z"/>
                </svg>
            </div>
            <div class="ribbon-text">
                <span class="ribbon-heading">FINE WINES</span>
                <span class="ribbon-sub">& SPIRITS</span>
            </div>
        </div>

        <div class="ribbon-divider"></div>

        <div class="ribbon-item">
            <div class="ribbon-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M18 2v20m0-20a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3m0-11a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3M6 2v20m-3-15h6M3 2v6a3 3 0 0 0 6 0V2"/>
                </svg>
            </div>
            <div class="ribbon-text">
                <span class="ribbon-heading">GREAT FOOD</span>
                <span class="ribbon-sub">& SNACKS</span>
            </div>
        </div>

        <div class="ribbon-divider"></div>

        <div class="ribbon-item">
            <div class="ribbon-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            </div>
            <div class="ribbon-text">
                <span class="ribbon-heading">LOCAL COMMUNITY</span>
                <span class="ribbon-sub">& EVENTS</span>
            </div>
        </div>
    </div>
</section>

<!-- 4 Main Showcase Cards -->
<section class="showcase-cards-section">
    <div class="cards-grid">
        <!-- Card 1: Our Drinks -->
        <article class="showcase-card">
            <div class="card-image-wrap">
                <img src="images/drinks.jpg" alt="Pint of Real Ale in Crown Glass" loading="lazy">
                <div class="card-overlay"></div>
            </div>
            <div class="card-content">
                <h3 class="card-title">OUR DRINKS</h3>
                <p class="card-text">Discover our curated selection of ales, craft beers and fine spirits.</p>
                <a href="drinks.php" class="card-link">LEARN MORE <span class="arrow">→</span></a>
            </div>
        </article>

        <!-- Card 2: Our Pubs -->
        <article class="showcase-card">
            <div class="card-image-wrap">
                <img src="images/interior.jpg" alt="Cozy British Pub Interior Snug" loading="lazy">
                <div class="card-overlay"></div>
            </div>
            <div class="card-content">
                <h3 class="card-title">OUR PUBS</h3>
                <p class="card-text">Find your nearest Micropub Collective venue.</p>
                <a href="pubs.php" class="card-link">FIND A PUB <span class="arrow">→</span></a>
            </div>
        </article>

        <!-- Card 3: Our Food -->
        <article class="showcase-card">
            <div class="card-image-wrap">
                <img src="images/food.jpg" alt="Artisanal Scotch Eggs and Piccalilli" loading="lazy">
                <div class="card-overlay"></div>
            </div>
            <div class="card-content">
                <h3 class="card-title">OUR FOOD</h3>
                <p class="card-text">Great food, perfectly paired.</p>
                <a href="food.php" class="card-link">VIEW MENU <span class="arrow">→</span></a>
            </div>
        </article>

        <!-- Card 4: Our Events -->
        <article class="showcase-card">
            <div class="card-image-wrap">
                <img src="images/events.jpg" alt="Acoustic Folk Live Gig in Pub" loading="lazy">
                <div class="card-overlay"></div>
            </div>
            <div class="card-content">
                <h3 class="card-title">OUR EVENTS</h3>
                <p class="card-text">Live music, quizzes, tastings and more.</p>
                <a href="events.php" class="card-link">SEE WHAT'S ON <span class="arrow">→</span></a>
            </div>
        </article>
    </div>
</section>

<!-- Featured Pubs Directory Highlights -->
<section class="section-featured-pubs" id="pubs">
    <div class="section-header">
        <span class="section-kicker">CURATED UK VENUES</span>
        <h2 class="section-title">Discover Our Member Micropubs</h2>
        <p class="section-desc">Each micropub is independently run, fiercely committed to proper cellarmanship, and free from fruit machines and jukeboxes.</p>
    </div>

    <div class="pubs-preview-grid">
        <?php foreach (array_slice($pubs, 0, 3) as $pub): ?>
        <div class="pub-card-detailed">
            <div class="pub-card-header">
                <div class="pub-badge"><?= htmlspecialchars($pub['region']) ?></div>
                <h3><?= htmlspecialchars($pub['name']) ?></h3>
                <p class="pub-tagline"><?= htmlspecialchars($pub['tagline']) ?></p>
            </div>
            <div class="pub-card-body">
                <p class="pub-address">📍 <?= htmlspecialchars($pub['address']) ?>, <?= htmlspecialchars($pub['town']) ?> (<?= htmlspecialchars($pub['postcode']) ?>)</p>
                <div class="pub-meta-row">
                    <span>🍺 <?= $pub['cask_lines'] ?> Gravity Casks</span>
                    <span>🍎 <?= $pub['ciders'] ?> Artisan Ciders</span>
                    <span>🐕 <?= $pub['dog_friendly'] ? 'Dogs Welcome' : 'Snug Only' ?></span>
                </div>
            </div>
            <div class="pub-card-footer">
                <a href="contact.php?pub=<?= urlencode($pub['id']) ?>" class="btn-reserve">Reserve Snug</a>
                <a href="tel:<?= $pub['phone'] ?>" class="pub-phone"><?= $pub['phone'] ?></a>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>`
  },
  {
    filename: 'data.php',
    category: 'core',
    description: 'Central data store holding configurations, pub listings, beers on tap, food menus, and event calendars.',
    code: `<?php
/**
 * The MicroPub Collective - Central Data Store
 */

$site_config = [
    'title' => 'The MicroPub Collective',
    'tagline' => 'Small Pubs. Big Character.',
    'description' => 'A collection of outstanding micropubs across the UK, celebrating great drinks, local community and British hospitality.',
    'email' => 'hello@micropubcollective.co.uk',
    'phone' => '+44 (0) 1522 849201',
    'year' => date('Y'),
];

$pubs = [
    [
        'id' => 'hop-and-anchor',
        'name' => 'The Hop & Anchor',
        'tagline' => 'Historic cobblestone charm & gravity-fed cellar ales',
        'town' => 'Lincoln',
        'county' => 'Lincolnshire',
        'region' => 'Yorkshire & East',
        'address' => '14 Steep Hill, Bailgate',
        'postcode' => 'LN2 1LT',
        'phone' => '01522 849201',
        'image' => 'images/hero.jpg',
        'cask_lines' => 6,
        'ciders' => 8,
        'dog_friendly' => true,
        'beer_garden' => true,
        'camra_award' => 'CAMRA Branch Pub of the Year 2024',
        'hours' => [
            'Mon - Fri' => '12:00 - 22:30',
            'Saturday'  => '11:30 - 23:00',
            'Sunday'    => '12:00 - 21:00',
        ],
        'signature_ales' => ['Castle Gold (4.2%)', 'Cathedral Porter (5.1%)', 'Citra Sunburst (4.5%)'],
        'description' => 'Tucked beneath the shadow of Lincoln Cathedral on historic Steep Hill, The Hop & Anchor celebrates pure conversation, no fruit machines or television, and pristine cask ales poured straight by gravity.',
    ],
    [
        'id' => 'stumble-inn',
        'name' => 'The Stumble Inn',
        'tagline' => 'Pennine valley refuge with rotating artisan micro-brews',
        'town' => 'Hebden Bridge',
        'county' => 'West Yorkshire',
        'region' => 'Yorkshire & East',
        'address' => '8 Bridge Gate',
        'postcode' => 'HX7 8EX',
        'phone' => '01422 845112',
        'image' => 'images/interior.jpg',
        'cask_lines' => 8,
        'ciders' => 12,
        'dog_friendly' => true,
        'beer_garden' => false,
        'camra_award' => 'Yorkshire Regional Micropub Champion',
        'hours' => [
            'Mon - Fri' => '14:00 - 22:00',
            'Saturday'  => '12:00 - 23:00',
            'Sunday'    => '12:00 - 20:30',
        ],
        'signature_ales' => ['Hebden Hop Session (4.0%)', 'Black Moor Stout (4.8%)', 'Pennine Gold (4.4%)'],
        'description' => 'A cozy sanctuary for hill walkers, canal wanderers, and ale lovers in the heart of the Calder Valley.',
    ],
    [
        'id' => 'snug-and-barrel',
        'name' => 'The Snug & Barrel',
        'tagline' => 'Kentish hop heritage & traditional stillage service',
        'town' => 'Canterbury',
        'county' => 'Kent',
        'region' => 'Kent & South East',
        'address' => '22 Sun Street',
        'postcode' => 'CT1 2HX',
        'phone' => '01227 458993',
        'image' => 'images/drinks.jpg',
        'cask_lines' => 6,
        'ciders' => 10,
        'dog_friendly' => true,
        'beer_garden' => true,
        'camra_award' => 'East Kent CAMRA Micropub of the Year',
        'hours' => [
            'Mon - Fri' => '12:00 - 22:00',
            'Saturday'  => '12:00 - 22:30',
            'Sunday'    => '12:00 - 20:00',
        ],
        'signature_ales' => ['Canterbury Best (4.1%)', 'East Kent Golding Special (4.6%)'],
        'description' => 'Located in the birthplace of the UK micropub movement. Serving ales sourced exclusively within 30 miles of Kent hop farms.',
    ]
];`
  },
  {
    filename: 'header.php',
    category: 'template',
    description: 'Header component featuring gold crown SVG insignia, site navigation, and mobile menu trigger.',
    code: `<?php
if (!isset($page_title)) {
    $page_title = $site_config['title'] . ' | ' . $site_config['tagline'];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($page_title) ?></title>
    <meta name="description" content="<?= htmlspecialchars($site_config['description']) ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="site-header">
        <div class="header-inner">
            <a href="index.php" class="brand-link">
                <div class="brand-crown">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8">
                        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
                    </svg>
                </div>
                <div class="brand-text">
                    <span class="brand-sub">THE</span>
                    <span class="brand-title">MICROPUB</span>
                    <span class="brand-title">COLLECTIVE</span>
                    <span class="brand-tagline">SMALL PUBS. BIG CHARACTER.</span>
                </div>
            </a>

            <nav class="main-nav" id="mainNav">
                <div class="nav-item dropdown">
                    <a href="pubs.php" class="nav-link">OUR PUBS <span class="arrow">▾</span></a>
                    <div class="dropdown-menu">
                        <a href="pubs.php?region=Yorkshire">Yorkshire & East</a>
                        <a href="pubs.php?region=Kent">Kent & South East</a>
                        <a href="pubs.php?region=Cotswolds">Cotswolds & West</a>
                    </div>
                </div>
                <a href="index.php#our-story" class="nav-link">OUR STORY</a>
                <a href="drinks.php" class="nav-link">DRINKS & FOOD</a>
                <a href="events.php" class="nav-link">EVENTS</a>
                <a href="contact.php" class="nav-link">CONTACT</a>
            </nav>

            <div class="header-cta">
                <a href="pubs.php" class="btn-find-pub">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    FIND A PUB
                </a>
            </div>
        </div>
    </header>`
  },
  {
    filename: 'footer.php',
    category: 'template',
    description: 'Footer template with CAMRA tribute, opening hours tradition, and newsletter form.',
    code: `    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-col brand-col">
                    <h3 class="footer-logo">THE MICROPUB COLLECTIVE</h3>
                    <p class="footer-desc">
                        Honouring the British micropub philosophy: simple conversation, pristine independent cask ales, no electronics or fruit machines, and genuine community hospitality.
                    </p>
                    <div class="camra-badge">
                        <span>Proud Supporter of CAMRA & Independent British Breweries</span>
                    </div>
                </div>

                <div class="footer-col">
                    <h4>EXPLORE</h4>
                    <ul class="footer-links">
                        <li><a href="pubs.php">Our Pubs Directory</a></li>
                        <li><a href="drinks.php">Ales & Cellar List</a></li>
                        <li><a href="food.php">Artisan Food Menu</a></li>
                        <li><a href="events.php">Live Folk & Quizzes</a></li>
                        <li><a href="contact.php">Bookings & Snugs</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>OPENING TRADITIONS</h4>
                    <p class="hours-text"><strong>Wednesday - Friday:</strong> 12:00 - 22:30</p>
                    <p class="hours-text"><strong>Saturday:</strong> 11:30 - 23:00</p>
                    <p class="hours-text"><strong>Sunday Session:</strong> 12:00 - 20:30</p>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <?= $site_config['year'] ?> The MicroPub Collective Ltd. Please drink responsibly.</p>
            </div>
        </div>
    </footer>
</body>
</html>`
  },
  {
    filename: 'pubs.php',
    category: 'views',
    description: 'Dynamic pub directory supporting PHP query string filtering (e.g., ?region=Yorkshire).',
    code: `<?php
require_once __DIR__ . '/data.php';
$selected_region = isset($_GET['region']) ? $_GET['region'] : 'all';

$filtered_pubs = $pubs;
if ($selected_region !== 'all') {
    $filtered_pubs = array_filter($pubs, function($p) use ($selected_region) {
        return stripos($p['region'], $selected_region) !== false;
    });
}

$page_title = 'Our Pubs Directory | The MicroPub Collective';
include __DIR__ . '/header.php';
?>

<div class="page-banner">
    <div class="banner-inner">
        <span class="section-kicker">LOCATIONS & SANCTUARIES</span>
        <h1 class="page-heading">The Micropub Directory</h1>
        <p class="page-sub">Find your local sanctuary for conversation, real cask ale, and British pub hospitality.</p>
    </div>
</div>

<div class="content-container">
    <div class="filter-bar">
        <span class="filter-label">Filter by Region:</span>
        <div class="filter-buttons">
            <a href="pubs.php" class="filter-btn <?= $selected_region === 'all' ? 'active' : '' ?>">All Regions</a>
            <a href="pubs.php?region=Yorkshire" class="filter-btn <?= $selected_region === 'Yorkshire' ? 'active' : '' ?>">Yorkshire</a>
            <a href="pubs.php?region=Kent" class="filter-btn <?= $selected_region === 'Kent' ? 'active' : '' ?>">Kent</a>
            <a href="pubs.php?region=Cotswolds" class="filter-btn <?= $selected_region === 'Cotswolds' ? 'active' : '' ?>">Cotswolds</a>
        </div>
    </div>

    <div class="pubs-catalog-grid">
        <?php foreach ($filtered_pubs as $pub): ?>
        <article class="pub-card-full">
            <div class="pub-image-container">
                <img src="<?= htmlspecialchars($pub['image']) ?>" alt="<?= htmlspecialchars($pub['name']) ?>">
                <span class="award-pill"><?= htmlspecialchars($pub['camra_award']) ?></span>
            </div>
            <div class="pub-card-details">
                <span class="pub-loc-tag"><?= htmlspecialchars($pub['region']) ?></span>
                <h2 class="pub-name"><?= htmlspecialchars($pub['name']) ?></h2>
                <p class="pub-tagline-quote">“<?= htmlspecialchars($pub['tagline']) ?>”</p>
                <p class="pub-bio"><?= htmlspecialchars($pub['description']) ?></p>
                <div class="pub-footer-action">
                    <a href="contact.php?pub=<?= urlencode($pub['id']) ?>" class="btn-hero-gold">Reserve Snug</a>
                </div>
            </div>
        </article>
        <?php endforeach; ?>
    </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>`
  },
  {
    filename: 'contact.php',
    category: 'views',
    description: 'Interactive snug reservation and contact form with server-side validation and flash response.',
    code: `<?php
require_once __DIR__ . '/data.php';

$feedback = null;
$error = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $pub_selected = trim($_POST['pub_selected'] ?? '');
    $party_size = intval($_POST['party_size'] ?? 2);
    $date = trim($_POST['date'] ?? '');

    if (empty($name) || empty($email) || empty($pub_selected)) {
        $error = 'Please provide your name, email, and choose a micropub.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Please enter a valid email address.';
    } else {
        $feedback = "Cheers {$name}! Your booking enquiry for {$party_size} guests at {$pub_selected} on {$date} has been dispatched. We will confirm your snug table within 12 hours.";
    }
}

$page_title = 'Contact & Snug Bookings | The MicroPub Collective';
include __DIR__ . '/header.php';
?>

<div class="page-banner">
    <div class="banner-inner">
        <span class="section-kicker">GET IN TOUCH</span>
        <h1 class="page-heading">Reserve a Snug or Say Hello</h1>
    </div>
</div>

<div class="content-container">
    <?php if ($feedback): ?>
        <div class="alert alert-success">
            <h3>✅ Booking Enquiry Received</h3>
            <p><?= htmlspecialchars($feedback) ?></p>
        </div>
    <?php endif; ?>

    <form method="POST" action="contact.php" class="booking-form">
        <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="pub_selected">Select Pub</label>
            <select id="pub_selected" name="pub_selected" required>
                <?php foreach ($pubs as $p): ?>
                    <option value="<?= htmlspecialchars($p['name']) ?>"><?= htmlspecialchars($p['name']) ?></option>
                <?php endforeach; ?>
            </select>
        </div>
        <button type="submit" class="btn-hero-gold">SUBMIT ENQUIRY →</button>
    </form>
</div>

<?php include __DIR__ . '/footer.php'; ?>`
  },
  {
    filename: 'style.css',
    category: 'styles',
    description: 'Complete standalone CSS stylesheet with responsive dark green & gold pub aesthetics.',
    code: `/* Standalone PHP Stylesheet - The MicroPub Collective */
:root {
    --bg-dark: #0b1410;
    --bg-card: #122119;
    --border-color: #233a2e;
    --gold: #d4af37;
    --gold-light: #f3df8a;
    --text-primary: #f7f4ea;
    --text-muted: #b8b09d;
    --font-serif: 'Playfair Display', Georgia, serif;
    --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-primary);
    font-family: var(--font-sans);
    margin: 0;
    line-height: 1.6;
}

/* Header & Nav */
.site-header {
    background-color: rgba(11, 20, 16, 0.95);
    border-bottom: 1px solid rgba(212, 175, 55, 0.25);
    padding: 1rem 2rem;
}
.header-inner {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.brand-title {
    font-family: var(--font-serif);
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
}
.main-nav a {
    color: #d1cdc0;
    text-decoration: none;
    margin: 0 1rem;
    font-size: 0.85rem;
}
.main-nav a:hover {
    color: var(--gold);
}
.btn-find-pub {
    color: var(--gold);
    border: 1px solid var(--gold);
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-size: 0.8rem;
    border-radius: 4px;
}

/* Hero */
.hero-section {
    min-height: 560px;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center;
    border-bottom: 1px solid rgba(212, 175, 55, 0.3);
}
.hero-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.hero-title {
    font-family: var(--font-serif);
    font-size: 3.8rem;
    line-height: 1.1;
    color: #fff;
}
.btn-hero-gold {
    background: linear-gradient(135deg, #d4af37, #b8860b);
    color: #0b1410;
    padding: 0.9rem 2rem;
    font-weight: 700;
    text-decoration: none;
    display: inline-block;
    border-radius: 2px;
}

/* 4 Showcase Cards */
.cards-grid {
    max-width: 1400px;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    padding: 0 2rem;
}
.showcase-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
}
.card-content {
    padding: 1.5rem;
}
.card-title {
    font-family: var(--font-serif);
    color: var(--gold);
    font-size: 1.1rem;
}
.card-link {
    color: var(--gold);
    text-decoration: none;
    font-weight: bold;
    font-size: 0.8rem;
}`
  },
  {
    filename: 'README.md',
    category: 'docs',
    description: 'Documentation for local development, web server deployment, and PHP requirements.',
    code: `# The MicroPub Collective - PHP Deployment Guide

Run locally:
\`\`\`bash
php -S localhost:8000
\`\`\`

Deploy to cPanel or Apache:
1. Upload all files to public_html.
2. Ensure images/ directory contains hero.jpg, drinks.jpg, interior.jpg, food.jpg, events.jpg.
3. Access via your domain.`
  }
];
