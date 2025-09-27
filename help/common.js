// Load common footer for all help pages
document.addEventListener('DOMContentLoaded', function() {
    // Create footer container if it doesn't exist
    var footerContainer = document.getElementById('footer-container');
    if (!footerContainer) {
        footerContainer = document.createElement('div');
        footerContainer.id = 'footer-container';
        document.body.appendChild(footerContainer);
    }

    // Just insert the footer HTML directly
    footerContainer.innerHTML = `
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div><a href="https://chat.xcf.ai" target="_blank" style="color: inherit;">Join the Discussion</a></div>
                    <div><a href="../index.html" style="color: inherit;">Back to InkPen</a></div>
                    <div>&copy; 2025 Logos InkPen</div>
                </div>
            </div>
        </footer>
    `;
});