
// Chama essas funões do documento HTML
const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');

//  Captura o tempo atual da música e o total de duração
const numeroCapitulos = 10;
let contadorAtual = 0;
let capituloAtual = 1;


//  Variável vazia para armazenar a posição atual do áudio
function playFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

//  Função que pausa a faixa
function pausarAudio() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPausar() {
    if (contadorAtual === 0) {
        playFaixa();
        contadorAtual = 1;
    } else {
        pausarAudio();
        contadorAtual = 0;
    }
}

function trocarNomeFaixa() {
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual;
}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    playFaixa();
    contadorAtual = 1;
    trocarNomeFaixa();
}


function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    playFaixa();
    contadorAtual = 1;
    trocarNomeFaixa();
}




//  Função play/pause
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);


