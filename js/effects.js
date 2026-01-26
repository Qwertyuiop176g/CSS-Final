const backToTop = document.getElementById("backToTop");

/* Back to top visibility */
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

/* Scroll to top */
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* Disable custom cursor on touch devices */
if ("ontouchstart" in window) {
    document.body.style.cursor = "auto";
}
