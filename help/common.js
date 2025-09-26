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
                <div class="footer">
                    <p><a href="https://www.paypal.com/ncp/payment/3DTH3S7XARK98">Donate</a> | <a href="mailto:logos@inkpen.io">Contact</a> | <a href="https://chat.xcf.ai">Chat</a></p>
                    <p>© 2025 Logos InkPen LLC. All Rights Reserved.</p>
                    <p>Inventor: Todd Bruss</p>
                </div>
            `;
        });
});