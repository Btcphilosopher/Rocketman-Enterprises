<?php
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
    <!-- Region Filter Bar -->
    <div class="filter-bar">
        <span class="filter-label">Filter by Region:</span>
        <div class="filter-buttons">
            <a href="pubs.php" class="filter-btn <?= $selected_region === 'all' ? 'active' : '' ?>">All UK Regions (<?= count($pubs) ?>)</a>
            <a href="pubs.php?region=Yorkshire" class="filter-btn <?= $selected_region === 'Yorkshire' ? 'active' : '' ?>">Yorkshire & East</a>
            <a href="pubs.php?region=Kent" class="filter-btn <?= $selected_region === 'Kent' ? 'active' : '' ?>">Kent & South East</a>
            <a href="pubs.php?region=Cotswolds" class="filter-btn <?= $selected_region === 'Cotswolds' ? 'active' : '' ?>">Cotswolds & West</a>
        </div>
    </div>

    <!-- Pubs List Grid -->
    <div class="pubs-catalog-grid">
        <?php foreach ($filtered_pubs as $pub): ?>
        <article class="pub-card-full">
            <div class="pub-image-container">
                <img src="<?= htmlspecialchars($pub['image']) ?>" alt="<?= htmlspecialchars($pub['name']) ?>">
                <span class="award-pill"><?= htmlspecialchars($pub['camra_award']) ?></span>
            </div>
            <div class="pub-card-details">
                <div class="pub-header-row">
                    <div>
                        <span class="pub-loc-tag"><?= htmlspecialchars($pub['region']) ?> · <?= htmlspecialchars($pub['county']) ?></span>
                        <h2 class="pub-name"><?= htmlspecialchars($pub['name']) ?></h2>
                    </div>
                    <span class="cask-counter"><?= $pub['cask_lines'] ?> Casks on Tap</span>
                </div>

                <p class="pub-tagline-quote">“<?= htmlspecialchars($pub['tagline']) ?>”</p>
                <p class="pub-bio"><?= htmlspecialchars($pub['description']) ?></p>

                <div class="pub-attributes-strip">
                    <div class="attr"><strong>Address:</strong> <?= htmlspecialchars($pub['address']) ?>, <?= htmlspecialchars($pub['town']) ?>, <?= htmlspecialchars($pub['postcode']) ?></div>
                    <div class="attr"><strong>Phone:</strong> <a href="tel:<?= $pub['phone'] ?>"><?= $pub['phone'] ?></a></div>
                    <div class="attr"><strong>Dog Friendly:</strong> <?= $pub['dog_friendly'] ? 'Yes, well-behaved dogs welcome' : 'No' ?></div>
                    <div class="attr"><strong>Beer Garden:</strong> <?= $pub['beer_garden'] ? 'Yes, courtyard seating' : 'Snug interior only' ?></div>
                </div>

                <div class="hours-box">
                    <strong>Weekly Service Hours:</strong>
                    <div class="hours-columns">
                        <?php foreach ($pub['hours'] as $day => $h): ?>
                            <span><em><?= $day ?>:</em> <?= $h ?></span>
                        <?php endforeach; ?>
                    </div>
                </div>

                <div class="pub-footer-action">
                    <a href="contact.php?pub=<?= urlencode($pub['id']) ?>" class="btn-hero-gold">Reserve Table / Snug</a>
                    <a href="drinks.php" class="btn-subtle">View Cellar Taps →</a>
                </div>
            </div>
        </article>
        <?php endforeach; ?>
    </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
