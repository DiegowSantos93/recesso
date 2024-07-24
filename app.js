const prompt = require("prompt-sync")({ sigint: true });

const {menu, incluir, listar, deletar, sair, editar} = require("./funcao.js");

let dia, atividade;

while (true) {
    let respostaMenu = menu();

    switch (respostaMenu) {
        case 1:
            dia = prompt('Informe o dia: ');
            atividade = prompt('Informe a atividade: ');
            incluir(dia, atividade);
            break;
        
        case 2:
            listar();
            let atividadeEditar = parseInt(prompt('Informe a atividade que deseja editar: ')) - 1;
            dia = prompt('Informe o novo dia: ');
            atividade = prompt('Informe a nova atividade: ');
            editar(atividadeEditar, dia, atividade);
            break;

        case 3:
            listar();
            break;

        case 4:
            listar();
            let atividadeDeletar = parseInt(prompt('Informe a atividade que deseja deletar: ')) - 1;
            deletar(atividadeDeletar);
            break;

        case 5:
            sair();
            break;

        default:
            console.log('Opção inválida.');
            break;
    }
}
