document.querySelectorAll(".btn-ver").forEach(botao => {
    botao.addEventListener("click", function() {
        const inputResposta = this.previousElementSibling;

        if (inputResposta.type === "password") {
            inputResposta.type = "text";
            this.textContent = "Ocultar";
        } else {
            inputResposta.type = "password";
            this.textContent = "Ver";
        }
    });
});

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.querySelectorAll(".dropdown-header")
.forEach(item => {

    item.addEventListener("click", () => {

        item.parentElement.classList.toggle("active");

    });

});
