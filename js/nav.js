document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
        <nav>
            <a href="Home.html" class="logo">
                <img src="images/logo.png" alt="Singapore Attractions Logo">
            </a>

            <button class="hamburger" aria-label="Toggle menu">
                ☰
            </button>

            <div class="nav-links">
                <a href="Home.html">Home</a>
                <a href="Attractions.html">Attractions</a>
                <a href="TourGuide.html">Travel Guide</a>
                <a href="Aboutus.html">About Us</a>
                <a href="Planner.html">Planner</a>
            </div>
        </nav>
    `;

    const navContainer = document.getElementById('nav-container');
    if (navContainer) {
        navContainer.innerHTML = navHTML;
    }

    // Hamburger toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});

