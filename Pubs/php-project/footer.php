    <!-- Site Footer -->
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-col brand-col">
                    <div class="brand-crown gold">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8">
                            <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
                        </svg>
                    </div>
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
                    <p class="hours-sub">Closed Mondays & Tuesdays for cellar conditioning & rest.</p>
                </div>

                <div class="footer-col newsletter-col">
                    <h4>THE TASTING CELLAR</h4>
                    <p>Subscribe for guest cask announcements, seasonal perry releases, and folk session dates.</p>
                    <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for subscribing to The Micropub Collective cellar dispatch!');">
                        <input type="email" placeholder="Your email address" required>
                        <button type="submit" class="btn-gold-sm">JOIN</button>
                    </form>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <?= $site_config['year'] ?> The MicroPub Collective Ltd. All rights reserved. Please drink responsibly.</p>
                <div class="bottom-links">
                    <a href="#">Cellar Invariants</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">CAMRA Charter</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
