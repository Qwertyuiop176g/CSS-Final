// Keeps track of the current slide index
let slideIndex = 0;

// Starts the slideshow when the script loads
showSlides();

function showSlides() {
    // Gets all elements with the class name "slide"
    let slides = document.getElementsByClassName("slide");

    // Hides all slides first
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Moves to the next slide
    slideIndex++;

    // Resets slide index if it exceeds the total number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Displays the current slide
    slides[slideIndex - 1].style.display = "block";

    // Automatically changes the slide every 3 seconds
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
