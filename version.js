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

    // Update images
    document.querySelectorAll('img[data-cache-bust]').forEach(img => {
        img.src = img.getAttribute('data-cache-bust') + '?v=' + CACHE_VERSION;
    });
});
