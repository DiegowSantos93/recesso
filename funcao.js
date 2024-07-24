const prompt = require("prompt-sync")({ sigint: true });

let atividades = [];

function incluir(dia, atividade){
    atividades.push({dia, atividade});
    console.log('Atividade adicionada...');
}

function menu(){
    console.log('Programa de férias! O que deseja fazer?\n1.Incluir\n2.Editar\n3.Listar\n4.Deletar\n5.Sair');
    let resposta = prompt (`Escolha uma opção: `);
    resposta = parseInt(resposta);
    return resposta;
}

function listar(){
    atividades.forEach((data, index) => {
        console.log(`${index + 1}. ${data.dia} - ${data.atividade}.`);
    });
}

function editar (indice, dia, atividade){
    if (indice < atividades.length){
        atividades[indice] = {dia, atividade};
        console.log('Atividade atualizada com sucesso.');
    } else {
        console.log('Índice inválido.');
    }
}

function deletar(indice){
    if (indice < atividades.length){
        atividades.splice(indice, 1);
        console.log('Atividade deletada.');
    } else {
        console.log('Índice inválido.');
    }
}

function sair(){
    console.log('Até mais!');
    process.exit();
}

module.exports = {menu, incluir, listar, deletar, sair, editar};
