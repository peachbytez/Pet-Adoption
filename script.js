
// MOBILE NAVIGATION MENU
function toggleMenu() {
    let nav = document.getElementById("navLinks");

    nav.classList.toggle("show");
}

// FADE-IN ANIMATION WHEN PAGE LOADS
window.addEventListener("load", function() {
    document.body.style.opacity = "1";
});
