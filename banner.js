// Countdown Banner - Shared across pages
(function() {
    // Detect if in subdirectory
    const inHelp = window.location.pathname.includes('/help/');
    const homeLink = inHelp ? '../index.html' : 'index.html';
    const docsLink = inHelp ? 'index.html' : 'help/index.html';
    const statsLink = inHelp ? '../ip-stats.html' : 'ip-stats.html';

    // Insert banner HTML at start of body
    const bannerHTML = `
    <div class="countdown-banner">
        <div class="countdown-banner-content">
            <div class="countdown-label">INKPEN <span class="hide-mobile">BETA </span>RELEASE 1.0 BUILD 30</div>
            <div class="countdown-timer" id="countdown">
                <span class="countdown-segment">
                    <span class="countdown-number" id="days">00</span>
                    <span class="countdown-unit">DAYS</span>
                </span>
                <span class="countdown-segment">
                    <span class="countdown-number" id="hours">00</span>
                    <span class="countdown-unit">HRS</span>
                </span>
                <span class="countdown-segment">
                    <span class="countdown-number" id="minutes">00</span>
                    <span class="countdown-unit">MIN</span>
                </span>
                <span class="countdown-segment">
                    <span class="countdown-number" id="seconds">00</span>
                    <span class="countdown-unit">SEC</span>
                </span>
            </div>
            <div class="countdown-sponsor">Sponsor <a href="https://superbox64.com" target="_blank">SuperBox64.com</a> Retro Arcade Boxes</div>
        </div>
        <div class="banner-nav">
            <a href="${homeLink}">Home</a>
            <a href="https://chat.xcf.ai" target="_blank">Chat</a>
            <a href="${docsLink}">Docs</a>
            <a href="${statsLink}">Stat</a>
            <a href="https://superbox64.com" target="_blank">SBOX</a>
        </div>
    </div>`;

    // Insert banner CSS
    const bannerCSS = `
    .countdown-banner {
        background-color: #000;
        color: #fff;
        text-align: center;
        padding: 2px 0 0 0;
        font-family: 'Courier New', Courier, monospace;
        position: sticky;
        top: 0;
        z-index: 1000;
        width: 100%;
    }
    .countdown-banner-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px;
    }
    .countdown-label {
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        line-height: 1;
        text-align: center;
        width: 100%;
        font-family: 'Orbitron', monospace;
    }
    .countdown-timer {
        font-size: 2.468rem;
        font-weight: 900;
        color: #ff0000;
        letter-spacing: 0.1em;
        font-family: 'Orbitron', monospace;
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(255, 0, 0, 0.375);
        padding: 1px 4px 1px 6px;
        background: rgba(20, 0, 0, 0.5);
        border-radius: 5px;
        border: 1px solid #330000;
        line-height: 1;
    }
    .countdown-segment {
        display: inline-block;
        margin: 0 8px;
        line-height: 1;
    }
    .countdown-number {
        display: inline-block;
        width: 70px;
        text-align: center;
        line-height: 1;
        font-variant-numeric: tabular-nums;
    }
    .countdown-unit {
        font-size: 0.9rem;
        display: block;
        color: #ff6666;
        margin: 0;
        letter-spacing: 0.05em;
        line-height: 1;
        font-family: 'Orbitron', monospace;
        font-weight: 700;
    }
    .countdown-sponsor {
        font-size: 0.75rem;
        font-weight: 400;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #ccc;
        margin-top: 4px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }
    .countdown-sponsor a {
        color: #fff;
        text-decoration: none;
    }
    .countdown-sponsor a:hover {
        text-decoration: underline;
    }
    .banner-nav {
        display: flex;
        justify-content: center;
        gap: 31px;
        margin-top: 4px;
        padding: 6px 0;
        background-color: #666;
    }
    .banner-nav a {
        color: #fff;
        text-decoration: none;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        font-family: 'Orbitron', monospace;
        position: relative;
    }
    .banner-nav a:hover::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 1px;
        width: calc(100% - 0.15em);
        height: 1px;
        background-color: #fff;
    }
    @media (max-width: 768px) {
        .countdown-timer {
            font-size: 1.3rem;
        }
        .countdown-number {
            min-width: 35px;
        }
        .countdown-segment {
            margin: 0 4px;
        }
        .countdown-sponsor {
            font-size: 0.65rem;
        }
        .hide-mobile {
            display: none;
        }
    }`;

    // Insert CSS
    const style = document.createElement('style');
    style.textContent = bannerCSS;
    document.head.appendChild(style);

    // Insert HTML at start of body
    document.body.insertAdjacentHTML('afterbegin', bannerHTML);

    // Countdown Timer function
    function updateCountdown() {
        const targetDate = new Date('2026-02-15T18:00:00-05:00');
        const now = new Date();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        } else {
            document.getElementById('countdown').innerHTML = '<span style="color: #ff0000;">RELEASED!</span>';
        }
    }

    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
})();
