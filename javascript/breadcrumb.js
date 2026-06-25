document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('breadcrumb');
    if (!container) return;

    var path = window.location.pathname.replace(/\/+$/, '');
    var filename = path.substring(path.lastIndexOf('/') + 1);

    // Mapeamento de nomes das disciplinas (arquivo -> nome completo)
    var disciplineNames = {
        'ica': 'Introdução ao Curso de ADS',
        'cli': 'Comunicação e Linguagem',
        'llpr': 'Lógica e Linguagem de Programação',
        'fmat': 'Fundamentos de Matemática',
        'ing': 'Inglês Instrumental',
        'tweb': 'Tecnologias Web',
        'esa': 'Ética Socioambiental',
        'peed': 'Programação Estruturada e Estrutura de Dados',
        'emp': 'Empreendedorismo',
        'pes': 'Probabilidade e Estatística',
        'sop': 'Sistemas Operacionais',
        'rgce': 'Relações de Gênero, Classe e Etnia',
        'bda': 'Banco de Dados',
        'poo': 'Programação Orientada a Objetos',
        'ens': 'Engenharia de Software',
        'ihc': 'Interface Humano-Computador',
        'red': 'Redes de Computadores',
        'fsi': 'Fundamentos de Segurança da Informação',
        'arqs': 'Arquitetura de Sistemas',
        'prso': 'Projeto Social',
        'aps': 'Análise e Projeto de Sistemas',
        'pdm': 'Programação para Dispositivos Móveis',
        'pweb-i': 'Programação Web I',
        'gep': 'Gestão de Projetos',
        'cida': 'Ciência de Dados',
        'pin': 'Projeto Integrador',
        'dev': 'DevOps',
        'pweb-ii': 'Programação Web II',
        'tqs': 'Teste e Qualidade de Software',
        'eita': 'Educação Especial, Inclusiva e Tecnologias Assistivas',
        'lib': 'Libras',
        'ppr': 'Padrões de Projeto',
        'bdnr': 'Banco de Dados Não Relacional',
        'gti': 'Governança de TI',
        'ia': 'Inteligência Artificial',
        'mpn': 'Modelagem de Processos de Negócio',
        'sdis': 'Sistemas Distribuídos',
        'rpd': 'Reconhecimento de Padrões',
        'dig': 'Direito Digital',
        'edf': 'Educação Física',
        'iot': 'Internet das Coisas'
    };

    // Mapeamento das páginas principais
    var pageMap = {
        'home.html': [{ label: 'Inicio', href: 'home.html', active: true }],
        'curso.html': [{ label: 'Inicio', href: 'home.html' }, { label: 'Sobre o Curso', active: true }],
        'disciplinas.html': [{ label: 'Inicio', href: 'home.html' }, { label: 'Sobre o Curso', href: 'curso.html' }, { label: 'Disciplinas', active: true }],
        '1-semestre.html': [{ label: 'Inicio', href: 'home.html' },  { label: 'Sobre o Curso', href: 'curso.html' }, { label: '1º Semestre', active: true }],
        '2-semestre.html': [{ label: 'Inicio', href: 'home.html' },  { label: 'Sobre o Curso', href: 'curso.html' }, { label: '2º Semestre', active: true }],
        '3-semestre.html': [{ label: 'Inicio', href: 'home.html' },  { label: 'Sobre o Curso', href: 'curso.html' }, { label: '3º Semestre', active: true }],
        '4-semestre.html': [{ label: 'Inicio', href: 'home.html' },  { label: 'Sobre o Curso', href: 'curso.html' }, { label: '4º Semestre', active: true }],
        '5-semestre.html': [{ label: 'Inicio', href: 'home.html' },  { label: 'Sobre o Curso', href: 'curso.html' }, { label: '5º Semestre', active: true }],
        'colacao-grau.html': [{ label: 'Inicio', href: 'home.html' },  { label: 'Sobre o Curso', href: 'curso.html' }, { label: 'Colação de Grau', active: true }],
        'caads.html': [{ label: 'Inicio', href: 'home.html' },  { label: 'Sobre o Curso', href: 'curso.html' }, { label: 'Centro Acadêmico', active: true }],
        'mercado.html': [{ label: 'Inicio', href: 'home.html' }, { label: 'Mercado de Trabalho', active: true }],
        'projetos.html': [{ label: 'Inicio', href: 'home.html' }, { label: 'Projetos', active: true }],
        'contato.html': [{ label: 'Inicio', href: 'home.html' }, { label: 'Contato', active: true }],
        'extensao.html': [{ label: 'Inicio', href: 'home.html' },  { label: 'Sobre o Curso', href: 'curso.html' }, { label: 'Extensão', active: true }],
        'lisa.html': [{ label: 'Inicio', href: 'home.html' }, { label: 'Sobre o Curso', href: 'curso.html' }, { label: 'Laboratório LiSA', active: true }]
    };

    var isInDisciplinasFolder = path.indexOf('/disciplinas/') !== -1;
    var breadcrumbs;

    if (isInDisciplinasFolder) {
        var htmlMatch = filename.match(/^(.+)\.html$/);
        if (htmlMatch) {
            var disciplineKey = htmlMatch[1];
            var disciplineName = disciplineNames[disciplineKey] || disciplineKey.toUpperCase();
            breadcrumbs = [
                { label: 'Inicio', href: '../home.html' },
                { label: 'Sobre o Curso', href: '../curso.html' },
                { label: 'Disciplinas', href: '../disciplinas.html' },
                { label: disciplineName, active: true }
            ];
        }
    } else {
        breadcrumbs = pageMap[filename] || [{ label: 'Inicio', active: true }];
    }

    if (!breadcrumbs) return;

    var html = '<nav class="breadcrumb" aria-label="Breadcrumb"><div class="breadcrumb-container">';
    for (var i = 0; i < breadcrumbs.length; i++) {
        var crumb = breadcrumbs[i];
        if (i > 0) {
            html += '<span class="breadcrumb-separator">›</span>';
        }
        if (crumb.active) {
            html += '<span class="breadcrumb-current">' + crumb.label + '</span>';
        } else {
            html += '<a href="' + crumb.href + '" class="breadcrumb-link">' + crumb.label + '</a>';
        }
    }
    html += '</div></nav>';

    container.innerHTML = html;
});
