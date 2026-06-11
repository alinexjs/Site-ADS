// Controle de Turno

document.addEventListener("DOMContentLoaded", () => {
    const switchTurno = document.getElementById("switch-turno");
    const pooPrereqCells = document.querySelectorAll(".poo-prereq-value");
    const turnoAtualBadges = document.querySelectorAll(".turno-atual-value");
    const colEadElements = document.querySelectorAll(".col-ead");
    const conteudosDiurno = document.querySelectorAll(".conteudo-turno-diurno");
    const conteudosNoturno = document.querySelectorAll(".conteudo-turno-noturno");

    const turnoSalvo = localStorage.getItem("ads-turno") || "diurno";

    if (switchTurno) {
        switchTurno.checked = (turnoSalvo === "noturno");
    }

    aplicarTurno(turnoSalvo);

    if (switchTurno) {
        switchTurno.addEventListener("change", (e) => {
            const novoTurno = e.target.checked ? "noturno" : "diurno";
            localStorage.setItem("ads-turno", novoTurno);
            aplicarTurno(novoTurno);
        });
    }

    function aplicarTurno(turno) {
        if (turno === "noturno") {
            pooPrereqCells.forEach(cell => {
                cell.innerHTML = `<a href="1-semestre.html" class="prereq-link" title="Lógica e Linguagem de Programação">LLPR</a>`;
            });
            turnoAtualBadges.forEach(badge => {
                badge.innerHTML = `<i class="material-icons">nights_stay</i> Noturno`;
            });
            colEadElements.forEach(el => {
                el.classList.remove("oculto");
            });
            conteudosDiurno.forEach(el => {
                el.classList.add("oculto");
            });
            conteudosNoturno.forEach(el => {
                el.classList.remove("oculto");
            });
        } else {
            pooPrereqCells.forEach(cell => {
                cell.innerHTML = `<a href="2-semestre.html" class="prereq-link" title="Programação Estruturada e Estrutura de Dados">PEED</a>`;
            });
            turnoAtualBadges.forEach(badge => {
                badge.innerHTML = `<i class="material-icons">wb_sunny</i> Matutino / Vespertino`;
            });
            colEadElements.forEach(el => {
                el.classList.add("oculto");
            });
            conteudosDiurno.forEach(el => {
                el.classList.remove("oculto");
            });
            conteudosNoturno.forEach(el => {
                el.classList.add("oculto");
            });
        }
    }
});
