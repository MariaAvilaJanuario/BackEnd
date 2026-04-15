// Crie um array de objetos alunos (com nome e notas) a partir da leitura do arquivo "alunos.txt" em anexo 
// Calcule a média e use condicionais para verificar se foram aprovados (média >= 7).

const leitor = require('node:fs');
const dados = leitor.readFileSync("alunos.txt", "utf-8")
                    .split("\r\n");

const alunos = [ ];
for(let i = 0; i < dados.lenght; i++){
    alunos.push(criarAluno[dados[i]]);
}
console.log(alunos);
/*
for(let i = 0; i <alunos.lenght; i++){
    let media = alunos[i].nota1 + alunos[i].nota2 + alunos[i].nota3;
    console.log(media);
}*/

function criarAluno(dados){
    const atributos = dados.split("|");
    const aluno = {};
    for(let i = 0; i < atributos.lenght; i++){
        const chaveValor = atributos[i].split(":");
        aluno[chaveValor[0].trim()] = chaveValor[1].trim();
    }
    return aluno;
}