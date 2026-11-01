<?php
require_once __DIR__ . '/data.php';
$page_title = 'Artisan Pub Food & Snacks | The MicroPub Collective';
include __DIR__ . '/header.php';
?>

<div class="page-banner">
    <div class="banner-inner">
        <span class="section-kicker">SIMPLE & HONEST FARE</span>
        <h1 class="page-heading">Artisan Food & Bar Bites</h1>
        <p class="page-sub">Great British pub food designed to accompany exceptional real ales and cider.</p>
    </div>
</div>

<div class="content-container">
    <div class="food-hero-visual">
        <img src="images/food.jpg" alt="Scotch Eggs and Mustard on Oak Board">
        <div class="food-quote-overlay">
            <p>“No greasy fryers or microwave ready-meals. Just unpretentious British charcuterie, farmhouse cheeses, and hot artisan pies.”</p>
        </div>
    </div>

    <div class="menu-grid">
        <?php foreach ($food_items as $food): ?>
        <div class="menu-card">
            <div class="menu-header">
                <h3 class="item-name"><?= htmlspecialchars($food['name']) ?></h3>
                <span class="item-price"><?= htmlspecialchars($food['price']) ?></span>
            </div>
            <span class="item-cat"><?= htmlspecialchars($food['category']) ?></span>
            <p class="item-desc"><?= htmlspecialchars($food['description']) ?></p>
            <div class="item-pairing">
                <strong>Recommended Pairing:</strong> <?= htmlspecialchars($food['pairing']) ?>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
