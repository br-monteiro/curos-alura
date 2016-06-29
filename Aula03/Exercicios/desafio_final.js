/**
Você deve sortear 6 números distintos de 1 a 60 e guardar numa array. Depois peça para o usuário dizer 6 números, um de cada vez (pode usar um prompt ou um input) e guarde-os em uma outra array. Aí diga quantos números ele acertou. Sim, é a loteria certinha desta vez!

Está pronto? */

var arrNumerosSorteados = [];
var arrNumerosJogados = [];

// adciona numero nos arrays
var adicionaNumero = function (arr, numero) {
    arr.push(numero);
};

// retorna um número qualquer entre 0 e 60
var selecionaNumero = function () {
    var numero = Math.random() * 60;
    return Math.round(numero);
};

// verifica se o número indicado já existe no array
var verificaNumero = function (arr, numero) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == numero) {
            return true;
        }
    }
    return false;
};

// realiza o sorteio dos números
var sorteio = function () {
    var qtdNumerosParaSortear = 6;
    var i = 1;
    adicionaNumero(arrNumerosSorteados, selecionaNumero());
    do {
        var numeroSorteado = selecionaNumero();
        if (!verificaNumero(arrNumerosSorteados, numeroSorteado) && numeroSorteado != 0) {
            adicionaNumero(arrNumerosSorteados, numeroSorteado);
            i++;
        }
    } while (i < qtdNumerosParaSortear);
};

// pergunta os números ao usuário
var perguntaNumero = function () {
    return parseInt(window.prompt("Indique um número:"));
}

// inicia a rodada de jogadas do usuário
var jogada = function () {
    var qtdJogadas = 6;
    var i = 1;
        adicionaNumero(arrNumerosJogados, perguntaNumero());
    do {
        var numeroJogado = perguntaNumero();
        if (!verificaNumero(arrNumerosJogados, numeroJogado) && numeroJogado != 0) {
            adicionaNumero(arrNumerosJogados, numeroJogado);
            i++;
        }
    } while (i < qtdJogadas);
}

// inicia o jogo
var jogar = function () {
    
    sorteio();
    jogada();
    
    var numeroAcertos = 0;
    var msg;
    
    for (var i = 0; i < arrNumerosSorteados.length; i++) {
        if (verificaNumero(arrNumerosJogados, arrNumerosSorteados[i])) {
            numeroAcertos++;
        }
    }
    
    if (numeroAcertos > 0) {
        msg = 'Você acertou ' + numeroAcertos + ' numero(s).';
        document.write(msg);
        console.log(msg);
        return;
    }
    
    msg = 'Que pena! Você não acertou nenhum número...';
    document.write(msg);
    console.log(msg);
    
};

jogar();
console.log(arrNumerosSorteados);
console.log(arrNumerosJogados);