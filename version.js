// Cache Buster Version - Change this in one place
const CACHE_VERSION = '1.0b29';

// Apply cache buster to all elements with data-cache-bust attribute
document.addEventListener('DOMContentLoaded', function() {
    // Update stylesheet links
    document.querySelectorAll('link[data-cache-bust]').forEach(link => {
        link.href = link.getAttribute('data-cache-bust') + '?v=' + CACHE_VERSION;
    });

    // Update images
    document.querySelectorAll('img[data-cache-bust]').forEach(img => {
        img.src = img.getAttribute('data-cache-bust') + '?v=' + CACHE_VERSION;
    });
});
