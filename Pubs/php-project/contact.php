<?php
require_once __DIR__ . '/data.php';

$feedback = null;
$error = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $pub_selected = trim($_POST['pub_selected'] ?? '');
    $party_size = intval($_POST['party_size'] ?? 2);
    $date = trim($_POST['date'] ?? '');
    $message = trim($_POST['message'] ?? '');

    if (empty($name) || empty($email) || empty($pub_selected)) {
        $error = 'Please provide your name, email, and choose a micropub.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Please enter a valid email address.';
    } else {
        // In a production server: mail($to, $subject, $body, $headers);
        $feedback = "Cheers {$name}! Your booking enquiry for {$party_size} guests at {$pub_selected} on {$date} has been dispatched to the cellar master. We will confirm your snug table within 12 hours.";
    }
}

$preselected_pub = $_GET['pub'] ?? '';
$page_title = 'Contact & Snug Bookings | The MicroPub Collective';
include __DIR__ . '/header.php';
?>

<div class="page-banner">
    <div class="banner-inner">
        <span class="section-kicker">GET IN TOUCH</span>
        <h1 class="page-heading">Reserve a Snug or Say Hello</h1>
        <p class="page-sub">Whether planning a gathering of cask ale enthusiasts or seeking a quiet corner by the fire.</p>
    </div>
</div>

<div class="content-container">
    <div class="contact-layout">
        <div class="contact-form-pane">
            <?php if ($feedback): ?>
                <div class="alert alert-success">
                    <h3>✅ Booking Enquiry Received</h3>
                    <p><?= htmlspecialchars($feedback) ?></p>
                </div>
            <?php endif; ?>

            <?php if ($error): ?>
                <div class="alert alert-danger">
                    <p>⚠️ <?= htmlspecialchars($error) ?></p>
                </div>
            <?php endif; ?>

            <form method="POST" action="contact.php" class="booking-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">Your Full Name *</label>
                        <input type="text" id="name" name="name" required placeholder="e.g. Eleanor Vance">
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required placeholder="eleanor@example.co.uk">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="pub_selected">Select Micropub *</label>
                        <select id="pub_selected" name="pub_selected" required>
                            <option value="">-- Choose a Venue --</option>
                            <?php foreach ($pubs as $p): ?>
                                <option value="<?= htmlspecialchars($p['name']) ?>" <?= $preselected_pub === $p['id'] ? 'selected' : '' ?>>
                                    <?= htmlspecialchars($p['name']) ?> (<?= htmlspecialchars($p['town']) ?>)
                                </option>
                            <?php endforeach; ?>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="party_size">Party Size (Micropubs are intimate)</label>
                        <select id="party_size" name="party_size">
                            <option value="1">1 Person (Quiet corner)</option>
                            <option value="2" selected>2 People (Table for two)</option>
                            <option value="4">4 People (Snug booth)</option>
                            <option value="6">6 People (Maximum recommended)</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="date">Preferred Date & Session Time</label>
                    <input type="text" id="date" name="date" placeholder="e.g. Friday 14th November, 18:30">
                </div>

                <div class="form-group">
                    <label for="message">Special Requests / Ale Preferences</label>
                    <textarea id="message" name="message" rows="4" placeholder="Let us know if you're bringing a dog, celebrating an occasion, or keen on a specific cask style..."></textarea>
                </div>

                <button type="submit" class="btn-hero-gold full-w">SUBMIT RESERVATION ENQUIRY →</button>
            </form>
        </div>

        <div class="contact-info-pane">
            <div class="info-card">
                <h3>Direct Inquiries</h3>
                <p><strong>Cellar Dispatch:</strong> <?= $site_config['email'] ?></p>
                <p><strong>Phone:</strong> <?= $site_config['phone'] ?></p>
                <hr class="gold-hr">
                <h4>Micropub Etiquette</h4>
                <ul class="etiquette-list">
                    <li>📵 Keep phone calls outside — we value real conversation.</li>
                    <li>🐕 Well-behaved dogs on leads are warmly greeted.</li>
                    <li>🍻 Ask for a taster before ordering — our landlords love sharing cellar stories.</li>
                    <li>💰 Card & cash both gladly accepted.</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
