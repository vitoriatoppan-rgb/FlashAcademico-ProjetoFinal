function alternar() {
            let resposta = document.getElementById("resposta");

            if (resposta.style.display === "none") {
                resposta.style.display = "block";
            } else {
                resposta.style.display = "none";
            }
        }

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

// Abrir e fechar menu
menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");
    overlay.classList.toggle("active");

});

// Dropdowns do menu lateral
const dropdowns = document.querySelectorAll(".dropdown-header");

dropdowns.forEach(dropdown => {

    dropdown.addEventListener("click", () => {

        dropdown.parentElement.classList.toggle("active");

    });

});

// Fechar ao clicar fora
document.addEventListener("click", (event) => {

    const clicouNoMenu = menu.contains(event.target);
    const clicouNoBotao = menuToggle.contains(event.target);
    const clicouNoOverlay = overlay.contains(event.target);

    if (
        !clicouNoMenu &&
        !clicouNoBotao &&
        !clicouNoOverlay
    ) {

        menu.classList.remove("active");
        overlay.classList.remove("active");

    }

});