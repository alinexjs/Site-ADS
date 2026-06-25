// Texto que será digitado na animação
const codeText = `
Olá! Tenho interesse em cursar Análise e Desenvolvimento de Sistemas. Gostaria de saber mais sobre a grade curricular e as oportunidades de estágio.
`;

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
        deleting ? 15 : 35 //15 - apagando 35 - digitanto 
    );
}

// Inicio da animação
animateCode();