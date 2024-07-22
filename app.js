const prompt = require("prompt-sync")({ sigint: true });

const {menu, incluir, listar, deletar, sair, editar} = require("./funcao.js");

let dia, atividade;

menu();

