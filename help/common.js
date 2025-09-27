// Load common footer for all help pages
document.addEventListener('DOMContentLoaded', function() {
    // Create footer container if it doesn't exist
    var footerContainer = document.getElementById('footer-container');
    if (!footerContainer) {
        footerContainer = document.createElement('div');
        footerContainer.id = 'footer-container';
        document.body.appendChild(footerContainer);
    }

    // Load footer HTML
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            // Fallback footer if loading fails
            footerContainer.innerHTML = `
                <footer>
                    <div class="container">
                        <div class="footer-content">
                            <div>InkPen, Vector Art Reimagined</div>
                            <div><a href="../index.html">Back to InkPen</a></div>
                            <div>Copyright 2025 Logos InkPen LLC</div>
                        </div>
                    </div>
                </footer>
            `;
        });
});