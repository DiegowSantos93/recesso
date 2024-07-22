let atividades = [];

function incluir(dia, atividade){
    atividades.push({dia, atividade});
    console.log('Atividade adicionada...')
}

function menu(){
    while (true) {
        console.log('Programa de férias. O que deseja fazer? 1.Incluir 2.Editar 3.Listar 4.Deletar 5.Sair')
    }
    let resposta = prompt (`Escolha uma opção: `)
    resposta = parseInt(resposta);
    return resposta;
}

function listar(){
    atividades.forEach((data, index) => {
        console.log(`${index + 1}. ${atividades.dia} - ${atividades.atividade}.`)
    });
}

function editar (dia, indice){
    if (indice <= atividades.lenght){
        atividades.splice(++index,1);
    }
    atividades[indice] = atividade;    
    console.log('Atividade atualizada com sucesso.')
}

function deletar(indice){
    atividades.splice(indice + 1,1)
    console.log('Atividade deletada.')
}

function sair(){
    process.exit();
    console.log('Até mais!');
}




module.exports = {menu, incluir, listar, deletar, sair, editar};