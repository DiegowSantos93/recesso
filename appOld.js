const prompt = require("prompt-sync")({ sigint: true });

const {menu, incluir, listar, deletar, sair, editar} = require("./funcao.js");

let dia, atividade;

let respostaMenu = menu();

switch (respostaMenu) {
    case 1:
        listar();
        break;

    default:
        break;
}


menu();