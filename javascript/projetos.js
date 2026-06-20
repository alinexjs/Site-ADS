
const modal = document.getElementById('modal-projeto');
const modalImg = document.getElementById('modal-img');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescricao = document.getElementById('modal-descricao');
const modalLink = document.getElementById('modal-link');

document.querySelectorAll('.btn-ler-mais').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.hasAttribute('disabled')) return;

        modalTitulo.textContent = btn.dataset.titulo;
        modalDescricao.textContent = btn.dataset.descricao;
        modalImg.src = btn.dataset.img;

        if (modalLink && btn.dataset.link) {
            modalLink.href = btn.dataset.link;
            modalLink.target = "_blank";
            modalLink.style.display = "inline-flex";
        } else if (modalLink) {
            modalLink.style.display = "none";
        }

        modal.classList.add('ativo');
        document.body.style.overflow = 'hidden';
    });
});

function fecharModal() {
    modal.classList.remove('ativo');
    document.body.style.overflow = 'auto';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        fecharModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('ativo')) {
        fecharModal();
    }
});

// ================= LÓGICA DO MODAL DO FORMULÁRIO =================
const modalForm = document.getElementById('modal-formulario');
const btnAbrirForm = document.getElementById('btn-abrir-formulario');
const btnFecharForm = document.getElementById('btn-fechar-formulario');
const formProjeto = document.getElementById('form-enviar-projeto');

// Abrir modal do formulário
if (btnAbrirForm) {
    btnAbrirForm.addEventListener('click', (e) => {
        e.preventDefault(); // Evita comportamento de link caso mude a tag
        modalForm.classList.add('ativo');
        document.body.style.overflow = 'hidden';
    });
}

// Função para fechar o modal do formulário
function fecharModalFormis() {
    modalForm.classList.remove('ativo');
    // Só devolve o scroll para a página se o outro modal também estiver fechado
    if (!document.getElementById('modal-projeto').classList.contains('ativo')) {
        document.body.style.overflow = 'auto';
    }
}

// Fechar ao clicar no 'X'
if (btnFecharForm) {
    btnFecharForm.addEventListener('click', fecharModalFormis);
}

// Fechar ao clicar fora do modal (na overlay)
modalForm.addEventListener('click', (e) => {
    if (e.target === modalForm) {
        fecharModalFormis();
    }
});

// Fechar com a tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalForm.classList.contains('ativo')) {
        fecharModalFormis();
    }
});

// Evento de envio do formulário (submissão)
if (formProjeto) {
    formProjeto.addEventListener('submit', (e) => {
        e.preventDefault();

        // Captura dos dados inseridos
        const dadosProjeto = {
            nome: document.getElementById('nome-projeto').value,
            autores: document.getElementById('autores-projeto').value,
            email: document.getElementById('email-contato').value,
            url: document.getElementById('url-projeto').value,
            descricao: document.getElementById('descricao-projeto').value
        };

        // Aqui você faria a requisição AJAX / Fetch para o seu backend.
        console.log("Dados prontos para envio:", dadosProjeto);
        
        // Exemplo simples de feedback para o aluno:
        alert(`Obrigado! O projeto "${dadosProjeto.nome}" foi enviado para análise.`);
        
        // Reseta o formulário e fecha o modal
        formProjeto.reset();
        fecharModalFormis();
    });
}