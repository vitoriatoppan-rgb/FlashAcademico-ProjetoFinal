const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});

const dropdown = document.querySelector(".dropdown-item");

dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});