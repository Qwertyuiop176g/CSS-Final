
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form");

    if (!form) return; // Exit if form is not found

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Show success message
        alert(`Thank you, ${name}! Your message has been received.`);

        // Clear the form
        form.reset();
    });

    // Simple email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
