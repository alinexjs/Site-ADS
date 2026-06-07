function alternarAba(tipoIngresso) {
    // Remove o estado ativo de todos os botões seletores
    document.querySelectorAll('.btn-aba').forEach(botao => {
        botao.classList.remove('active');
    });

    // Oculta todos os blocos de conteúdo de abas
    document.querySelectorAll('.conteudo-aba').forEach(conteudo => {
        conteudo.classList.remove('active');
    });

    // Ativa o botão clicado com base no evento
    event.currentTarget.classList.add('active');

    // Exibe o respectivo contêiner correspondente
    document.getElementById('aba-' + tipoIngresso).classList.add('active');
}