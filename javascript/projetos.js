
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