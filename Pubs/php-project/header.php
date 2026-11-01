<?php
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
    <!-- Top Header -->
    <header class="site-header">
        <div class="header-inner">
            <!-- Brand Lockup -->
            <a href="index.php" class="brand-link">
                <div class="brand-crown">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
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

            <!-- Navigation Links -->
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
                <a href="index.php#news" class="nav-link">NEWS</a>
                <a href="contact.php" class="nav-link">CONTACT</a>
            </nav>

            <!-- Action Button -->
            <div class="header-cta">
                <a href="pubs.php" class="btn-find-pub">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    FIND A PUB
                </a>
                <button class="mobile-toggle" onclick="document.getElementById('mainNav').classList.toggle('active')">
                    ☰
                </button>
            </div>
        </div>
    </header>
