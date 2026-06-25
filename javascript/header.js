const header = document.getElementById("header");
const footer = document.getElementById("footer");

// Importação do header e do footer em todas as paginas
    
const codeHeader = `
    <div class="container">
        <nav class="cabecalho">

            <div class="marca">
                <img src="/images/logosmall-branca.png" class="logo" alt="Mascote ADS">
                <span>IT'S ADS</span>
            </div>

            <button class="menu-mobile">
                <span class="material-icons">menu</span>
            </button>

            <div class="menu">
                <a href="home.html">Inicio</a>

                <div class="dropdown">
                    <a href="#">Sobre o Curso</a>

                    <ul class="dropdown-content">
                        <li><a href="/curso.html">Como Cursar</a></li>
                        <li><a href="/extensao.html">Extensão</a></li>
                        <li><a href="/disciplinas.html">Disciplinas</a></li>
                        <li><a href="/1-semestre.html">Semestres</a></li>
                        <li><a href="/colação-grau.html">Colação de Grau</a></li>
                        <li><a href="/caads.html">Centro Acadêmico</a></li>
                        <li><a href="/faq.html">FAQ</a></li>
                    </ul>
                </div>

                <a href="/mercado.html">Mercado de Trabalho</a>
                <a href="/projetos.html">Projetos</a>
                <a href="/contato.html">Contato</a>

            </div>

            <a href="https://novo.qacademico.ifce.edu.br/webapp/public/autenticacao" target="_blank"
                class="botao-portal">
                Portal do Aluno
            </a>

        </nav>
    </div>
`;

header.innerHTML = codeHeader;

const codeFooter = `
    <div class="footer-top">
        <div class="container" style="display: flex;gap:10px;padding: 12px 0px;">
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p>it's-ads@ifce-bv:~</p>
        </div>
    </div>
    <div class="container" style="padding: 0;">
        <div class="footer-content">
            <div class="footer-brand">
                <div class="marca">
                    <img src="/images/logosmall-branca.png" class="logo" alt="Mascote ADS">
                    <h3>IT'S ADS</h3>
                </div>
                <p>
                    Portal do curso de Análise e Desenvolvimento de Sistemas
                    do IFCE Campus Boa Viagem.
                </p>

                <div class="terminal">
                    <p>$ whoami</p>
                    <span>
                        Formando profissionais para o mercado de tecnologia.
                    </span>
                </div>
            </div>

            <div>
                <h4>Links Rápidos</h4>
                <ul>
                    <li><a href="/curso.html">Sobre o ADS</a></li>
                    <li><a href="/projetos.html">Projetos</a></li>
                    <li><a href="/mercado.html">Mercado de Trabalho</a></li>
                    <li><a href="/contato.html">Contato</a></li>
                </ul>
            </div>

            <div>
                <h4>Instituição</h4>
                <ul>
                    <li> <a href="https://portal.ifce.edu.br/campus/boaviagem/" target="_blank">IFCE - Campus Boa
                            Viagem</a></li>
                    <li><a href="contato.html">cca.boaviagem@ifce.edu.br</a></li>
                    <li><a href="contato.html">(85) 3401-2236</a></li>
                </ul>
            </div>

            <div>
                <h4>Redes Sociais</h4>
                <div class="social">
                    <a href="cca.boaviagem@ifce.edu.br" target="_blank"><span class="material-icons">mail</span></a>
                    <a href="contato.html"><span class="material-icons">call</span></a>
                    <a href="https://www.instagram.com/ifceboaviagemoficial/" target="_blank"><i
                            class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© 2026 ADS IFCE Boa Viagem</p>
            <a href="https://portal.ifce.edu.br/campus/boaviagem/" target="_blank"><img
                    src="images/logoIfceBranca.png" alt="Logo do Instituto Federal do Ceará - Cor Branca"
                    class="imagem-footer"></a>
        </div>
    </div>
`;

footer.innerHTML = codeFooter;


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

// console.log(botaoMenu);
// console.log(menu);

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    body.classList.toggle('menu-aberto');
});