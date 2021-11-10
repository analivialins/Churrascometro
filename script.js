let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular(){
    console.log("cl");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas)
    console.log(qtdTotalCarne);

    let qtdTotalCerveja = cervejaPP(duracao) * adultos
    console.log(qtdTotalCerveja);

    let qtdTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao)/2 * criancas)
    console.log(qtdTotalBebida);

    resultado.innerHTML = `<p>${(qtdTotalCarne / 1000).toFixed(1)}Kg de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida / 2000)} garrafas(2L) de Refrigerante</p>`;
};

function carnePP(duracao){
    if (duracao>=6){
        return 650;
    }
    else{
        return 400;
    }
};

function cervejaPP(duracao){
    if (duracao>=6){
        return 2000;
    }
    else{
        return 1200;
    }
};

function bebidaPP(duracao){
    if (duracao>=6){
        return 1500;
    }
    else{
        return 1000;
    }
};