const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desselcionarBotao();
        botao.classList.add('selecionado');

        desselcionarPersonagem();
        personagens[indice].classList.add('selecionado');
    });
});

function desselcionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove('selecionado');
}

function desselcionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove('selecionado');
}