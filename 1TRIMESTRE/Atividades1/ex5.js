// Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das nota obtidas
// imprima na tela o nome do aluno e se o aluno foi aprovado ou reprovado. 
// Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7.

let aluno = "Lucas";

let nota1 = 5.0;
let nota2 = 3.0;
let nota3 = 6.0;
let nota4 = 5.5;

let media = ((nota1 + nota2 + nota3 + nota4) / 4)

if (media > 7) {
    console.log (aluno + ", você foi aprovado :)")
} else {
    console.log (aluno + ", você foi reprovado :(")
}