const leitor = require('node:fs');
const dados = leitor.readFileSync("alunos.txt", "utf-8")
                    .split("\r\n");
const alunos = [];
for(let i = 0; i < dados.length; i++){
    alunos.push(criarAluno(dados[i]));
}

alunos.forEach((aluno) => {
    console.log(`${aluno.nome} tem média ${(aluno.media).toFixed(1)} e está ${aluno.situacao}`);
});

function criarAluno(linha){
    const infos = linha.split("|");
    const aluno = {};
    for(let i = 0; i < infos.length; i++){
        let atributos = infos[i].split(":");
        aluno[atributos[0].trim()] = atributos[1].trim();
    }
    aluno["media"] = (Number.parseFloat(aluno.nota1) +
                    Number.parseFloat(aluno.nota2) +
                    Number.parseFloat(aluno.nota3));
    aluno.media /= 3;
    aluno["situacao"] = (aluno.media < 7) ? "Reprovado" : "Aprovado";
    return aluno
}
