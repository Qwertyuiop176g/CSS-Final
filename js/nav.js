document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
        <nav>
            <a href="Home.html">Home</a>
            <a href="Attractions.html">Attractions</a>
            <a href="TourGuide.html">Tour Guides</a>
            <a href="AboutUs.html">About Us</a>
        </nav>
    `;
    
    
    const navContainer = document.getElementById('nav-container');
    if (navContainer) {
        navContainer.innerHTML = navHTML;
    }
});
