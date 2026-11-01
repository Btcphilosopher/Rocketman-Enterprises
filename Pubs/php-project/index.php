<?php
require_once __DIR__ . '/data.php';
$page_title = 'The MicroPub Collective | Small Pubs. Big Character.';
include __DIR__ . '/header.php';
?>

<!-- Hero Section (Pixel-matched to visual identity) -->
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
                <!-- Hop Icon -->
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
                <!-- Wine Glass Icon -->
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
                <!-- Fork & Knife Icon -->
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
                <!-- People Icon -->
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

<!-- 4 Main Showcase Cards (Exact match to screenshot) -->
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
                <div class="pub-ales-snippet">
                    <strong>Poured Today:</strong>
                    <ul>
                        <?php foreach ($pub['signature_ales'] as $ale): ?>
                            <li><?= htmlspecialchars($ale) ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
            <div class="pub-card-footer">
                <a href="contact.php?pub=<?= urlencode($pub['id']) ?>" class="btn-reserve">Reserve Snug</a>
                <a href="tel:<?= $pub['phone'] ?>" class="pub-phone"><?= $pub['phone'] ?></a>
            </div>
        </div>
        <?php endforeach; ?>
    </div>

    <div class="center-btn-wrap">
        <a href="pubs.php" class="btn-gold-outline">VIEW ALL UK LOCATIONS & MAP</a>
    </div>
</section>

<!-- The Micropub Manifesto / Our Story -->
<section class="story-section" id="our-story">
    <div class="story-container">
        <div class="story-text">
            <span class="section-kicker">HERITAGE & TRADITION</span>
            <h2>Small Spaces. Mighty Conversations.</h2>
            <p>
                The modern micropub movement was born in 2005 when Martyn Hillier opened The Butchers Arms in Herne, Kent. His principle was revolutionary in its simplicity: a small, one-room freehouse focused entirely on quality real ale and lively human interaction.
            </p>
            <p>
                At <strong>The MicroPub Collective</strong>, we unite the very finest independent micropubs across Britain. You won’t find loud televisions blaring football matches, neon slot machines, or mass-produced industrial lager. Instead, you'll discover pristine cellar-conditioned casks, craft farmhouse ciders, and friends you haven't met yet.
            </p>
            <div class="story-stats">
                <div class="stat-box">
                    <span class="stat-num">100%</span>
                    <span class="stat-label">Independent Breweries</span>
                </div>
                <div class="stat-box">
                    <span class="stat-num">0</span>
                    <span class="stat-label">Fruit Machines or TVs</span>
                </div>
                <div class="stat-box">
                    <span class="stat-num">18+</span>
                    <span class="stat-label">CAMRA Honours</span>
                </div>
            </div>
        </div>
        <div class="story-image">
            <img src="images/interior.jpg" alt="Traditional Snug Seating">
        </div>
    </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>
