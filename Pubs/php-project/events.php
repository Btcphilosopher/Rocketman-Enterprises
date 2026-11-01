<?php
require_once __DIR__ . '/data.php';
$page_title = 'Events & Acoustic Sessions | The MicroPub Collective';
include __DIR__ . '/header.php';
?>

<div class="page-banner">
    <div class="banner-inner">
        <span class="section-kicker">WHAT'S ON</span>
        <h1 class="page-heading">Live Sessions & Community Gatherings</h1>
        <p class="page-sub">Unplugged folk jams, pub quizzes, tap takeovers, and brewer tastings across the UK.</p>
    </div>
</div>

<div class="content-container">
    <div class="events-split-grid">
        <div class="events-list-pane">
            <h2>Upcoming Gatherings</h2>
            <?php foreach ($events as $event): ?>
            <article class="event-card">
                <div class="event-date-box">
                    <span class="event-pub-tag"><?= htmlspecialchars($event['pub']) ?></span>
                    <span class="event-date-text"><?= htmlspecialchars($event['date']) ?></span>
                </div>
                <div class="event-body">
                    <h3><?= htmlspecialchars($event['title']) ?></h3>
                    <p class="event-location">📍 <?= htmlspecialchars($event['location']) ?></p>
                    <p class="event-desc"><?= htmlspecialchars($event['description']) ?></p>
                    <a href="contact.php?event=<?= urlencode($event['title']) ?>" class="btn-rsvp">Reserve Seat / RSVP →</a>
                </div>
            </article>
            <?php endforeach; ?>
        </div>

        <div class="events-sidebar">
            <div class="event-policy-card">
                <img src="images/events.jpg" alt="Acoustic Folk Performance">
                <div class="policy-inner">
                    <h3>The Unplugged Tradition</h3>
                    <p>In keeping with micropub heritage, our musical gatherings are strictly acoustic and intimate. No stadium amplification, just soulful singing, acoustic guitars, folk fiddles, and great company around wooden tables.</p>
                    <hr class="gold-hr">
                    <h4>Host an Event or Book a Snug</h4>
                    <p>Have an acoustic folk group, a poetry collective, or a CAMRA tasting club? Contact any of our member pubs to reserve an evening.</p>
                    <a href="contact.php" class="btn-hero-gold full-w">Contact Event Host</a>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
