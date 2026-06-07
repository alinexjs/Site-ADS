const header = document.getElementById("header");

// Escuta o evento de rolagem da página
window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        // Adiciona a classe "scrolled"
        header.classList.add("scrolled");

    } else {
        // Remove a classe "scrolled"
        header.classList.remove("scrolled");
    }
});
//botão hamburguer em telas menores
const botaoMenu = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

console.log(botaoMenu);
console.log(menu);

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    body.classList.toggle('menu-aberto');
});