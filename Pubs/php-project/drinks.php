<?php
require_once __DIR__ . '/data.php';
$page_title = 'The Cellar & Drinks List | The MicroPub Collective';
include __DIR__ . '/header.php';
?>

<div class="page-banner">
    <div class="banner-inner">
        <span class="section-kicker">CELLAR & STILLAGE</span>
        <h1 class="page-heading">Our Curated Drinks Selection</h1>
        <p class="page-sub">Poured straight from the barrel or hand-pulled through traditional brass beer engines.</p>
    </div>
</div>

<div class="content-container">
    <div class="drinks-intro-card">
        <div class="intro-icon">🍺</div>
        <div>
            <h3>The Micropub Cellar Philosophy</h3>
            <p>We do not serve mass-industrial carbonated lager or pasteurised commercial kegs. Every ale in our cellars is living, unpasteurised, and poured at natural cellar temperature (11°C–13°C) to allow the delicate balance of malt, yeast, and British hops to shine.</p>
        </div>
    </div>

    <div class="drinks-table-card">
        <div class="table-header-title">
            <h2>Current Cellar & Tap Highlights</h2>
            <span class="updated-time">Updated Daily from Stillages</span>
        </div>

        <div class="drinks-list">
            <?php foreach ($drinks as $item): ?>
            <div class="drink-row">
                <div class="drink-main">
                    <div class="drink-title-line">
                        <h4 class="drink-name"><?= htmlspecialchars($item['name']) ?></h4>
                        <span class="drink-cat-tag"><?= htmlspecialchars($item['category']) ?></span>
                        <span class="drink-abv"><?= htmlspecialchars($item['abv']) ?> ABV</span>
                    </div>
                    <p class="drink-brewer"><?= htmlspecialchars($item['producer']) ?> · <em><?= htmlspecialchars($item['origin']) ?></em></p>
                    <p class="drink-notes"><?= htmlspecialchars($item['notes']) ?></p>
                </div>
                <div class="drink-pricing">
                    <span class="price-half">Half: <?= htmlspecialchars($item['price_half']) ?></span>
                    <span class="price-pint">Pint: <?= htmlspecialchars($item['price_pint']) ?></span>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>

    <!-- Cider & Perry Spotlight -->
    <div class="cider-banner">
        <div class="cider-content">
            <span class="section-kicker">NATURAL ORCHARD FERMENTS</span>
            <h3>Real Farmhouse Ciders & Cloudy Perries</h3>
            <p>Every collective pub carries a minimum of six traditional bag-in-box still ciders. Made from 100% freshly pressed bittersweet apples without artificial concentrates or added water.</p>
            <a href="pubs.php" class="btn-gold-sm">Find Your Nearest Taphouse</a>
        </div>
    </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
