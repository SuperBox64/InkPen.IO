// Cache Buster Version - Uses epoch timestamp
const CACHE_VERSION = Date.now();

// Apply cache buster to stylesheets immediately (before DOMContentLoaded)
// This prevents flash of unstyled content
function applyCacheBustToStylesheets() {
    document.querySelectorAll('link[data-cache-bust]').forEach(link => {
        link.href = link.getAttribute('data-cache-bust') + '?v=' + CACHE_VERSION;
    });
}

// Run immediately for any link tags that exist now
applyCacheBustToStylesheets();

// Also run on DOMContentLoaded for any dynamically added elements and images
document.addEventListener('DOMContentLoaded', function() {
    // Re-apply to stylesheets (catches any added after initial script run)
    applyCacheBustToStylesheets();

    // Update images with progressive loading fade-in
    document.querySelectorAll('img[data-cache-bust]').forEach(img => {
        // Add async decoding for non-blocking image decode
        img.decoding = 'async';

        // Start hidden for fade-in effect
        img.classList.add('img-loading');

        // Fade-in when image loads
        img.onload = function() {
            img.classList.remove('img-loading');
            img.classList.add('img-loaded');
        };

        // Set the source to start loading
        img.src = img.getAttribute('data-cache-bust') + '?v=' + CACHE_VERSION;

        // Handle already-cached images
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.remove('img-loading');
            img.classList.add('img-loaded');
        }
    });
});
