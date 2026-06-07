// Texto que será digitado na animação
const codeText = `#include <stdio.h>

int main() {
char nome[] = "ADS";
char futuro[] = "Tecnologia";
char area[] = "Desenvolvimento";

printf("Nome: %s\n", nome);
printf("Futuro: %s\n", futuro);
printf("Area: %s\n", area);
printf("Construindo o futuro\n");

return 0;
}`;
const typingElement = document.getElementById("typing-code");
// Controla a posição atual da animação
let index = 0;
// Define se o texto está sendo apagado ou digitado
let deleting = false;

// Função principal da animação
function animateCode() {
    if (!deleting) {
        typingElement.textContent =
            codeText.substring(0, index);

        // Avança uma posição
        index++;

        if (index > codeText.length) {
            // Inicia o modo apagar
            deleting = true;
            setTimeout(animateCode, 2500);
            return;
        }

    } else {
        // Mostra o texto até o índice atual
        typingElement.textContent =
            codeText.substring(0, index);

        // Remove um caractere por vez
        index--;

        // Quando apagar tudo
        if (index < 0) {
            deleting = false;
            // Reinicia o índice
            index = 0;
        }
    }
    // Define a velocidade da animação
    setTimeout(
        animateCode,
        deleting ? 15 : 35
    );
}

// Inicio da animação
animateCode();



//respostas do FAQ
const botoes = document.querySelectorAll(".faq-btn");
const titulo = document.querySelector(".faq-conteudo h3"); //adiciona texto no h3
const texto = document.querySelector(".faq-conteudo p"); //adiciona texto no p
const faqConteudo = document.querySelector(".faq-conteudo"); //adiciona ambos no conteudo do card

function animarFaq() {
    faqConteudo.classList.remove("animar");
    void faqConteudo.offsetWidth;   //reinicia a animação
    faqConteudo.classList.add("animar");
}

botoes[0].addEventListener("click", () => {
    document.querySelector(".faq-btn.ativo").classList.remove("ativo");
    botoes[0].classList.add("ativo");

    titulo.textContent = "Qual é a duração do curso?";
    texto.textContent = "O curso de Tecnologia em Análise e Desenvolvimento de Sistemas possui duração mínima de 2,5 anos, organizados em 5 semestres letivos, combinando formação teórica e prática voltada para o mercado de tecnologia."
});

botoes[1].addEventListener("click", () => {
    document.querySelector(".faq-btn.ativo").classList.remove("ativo"); //remove o estilo ativo do antigo botao
    botoes[1].classList.add("ativo");//adiciona no botao clicado

    titulo.textContent = "Como ingressar?";
    texto.textContent = "O ingresso ocorre principalmente por meio do SISU, utilizando a nota do ENEM. Também existem formas de ingresso por transferência, vagas remanescentes, diplomados e matrícula especial, conforme os editais do IFCE.";
});

botoes[2].addEventListener("click", () => {
    document.querySelector(".faq-btn.ativo").classList.remove("ativo");
    botoes[2].classList.add("ativo");

    titulo.textContent = "O curso é gratuito?";
    texto.textContent = "Sim. O curso é ofertado pelo Instituto Federal do Ceará de forma totalmente gratuita, garantindo acesso ao ensino superior público, gratuito e de qualidade para a formação de profissionais da área de Tecnologia da Informação.";
});

botoes[3].addEventListener("click", () => {
    document.querySelector(".faq-btn.ativo").classList.remove("ativo");
    botoes[3].classList.add("ativo");

    titulo.textContent = "Mercado de Trabalho";
    texto.textContent = "A demanda por profissionais de Tecnologia da Informação cresce constantemente. O tecnólogo em ADS pode atuar em empresas de software, consultorias, órgãos públicos, desenvolvimento web e mobile, suporte técnico, empreendedorismo e projetos de inovação tecnológica.";
});

botoes[4].addEventListener("click", () => {
    document.querySelector(".faq-btn.ativo").classList.remove("ativo");
    botoes[4].classList.add("ativo");

    titulo.textContent = "Possui Estágio?";
    texto.textContent = "Sim, mas é totalmente opcional. O IFCE incentiva a realização de estágios supervisionados e atividades práticas, aproximando os estudantes do mercado de trabalho e contribuindo para sua formação profissional.";
});