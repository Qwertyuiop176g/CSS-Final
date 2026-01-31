document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
    <footer>
        <div id ="main-footer">
            <div class="footer-left">
                <h3>Author: Group 4</h3>
                <h3>Email: <a href="mailto:here@example.com">here@example.com</a></h3>
            </div>

            <div class="footer-right">
                <h3><a href="Home.html">Home</a></h3>
                <h3><a href="Attractions.html">Attraction</a></h3>
                <h3><a href="TourGuides.html">Tour Guides</a></h3>
                <h3><a href="Aboutus.html">About Us</a></h3>
                <h3><a href="Planner.html">Planner</a></h3>
            </div>
        </div>
    </footer> 
    `;
    
    
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = navHTML;
    }
});
