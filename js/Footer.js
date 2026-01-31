// Waits until the HTML document has fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // HTML markup for the footer stored as a template literal
    const navHTML = `
    <footer>
        <div id ="main-footer">
            <div class="footer-left">
                <!-- Author and contact information -->
                <h3>Author: Group 4</h3>
                <h3>Email: <a href="mailto:here@example.com">here@example.com</a></h3>
            </div>

            <div class="footer-right">
                <!-- Footer navigation links -->
                <h3><a href="Home.html">Home</a></h3>
                <h3><a href="Attractions.html">Attraction</a></h3>
                <h3><a href="TourGuide.html">Tour Guides</a></h3>
                <h3><a href="Aboutus.html">About Us</a></h3>
                <h3><a href="Planner.html">Planner</a></h3>
            </div>
        </div>
    </footer> 
    `;
    
    // Selects the container where the footer will be inserted
    const footerContainer = document.getElementById('footer-container');

    // Checks if the footer container exists before inserting the footer HTML
    if (footerContainer) {
        footerContainer.innerHTML = navHTML;
    }
});
