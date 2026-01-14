const backToTop = document.getElementById("backToTop");
const glitterBg = document.querySelector(".glitter-bg");

/* Back to top visibility */
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

    /* Scroll-based gradient */
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const hue = Math.floor(scrollPercent * 360);

    glitterBg.style.background = `
        radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px),
        linear-gradient(120deg, hsl(${hue}, 80%, 75%), hsl(${(hue + 60) % 360}, 80%, 65%))
    `;
});

/* Scroll to top */
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* Disable custom cursor on touch devices */
if ("ontouchstart" in window) {
    document.body.style.cursor = "auto";
}
