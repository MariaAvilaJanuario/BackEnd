//Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa

let peso = 50;
let altura = 1.60;
let imc = (peso / (altura * altura));
console.log ("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Abaixo do peso :(")
}

if (imc>18.6 && imc<25) {
    console.log("Parabéns! Peso ideal :)")
}

if (imc>25 && imc<30) {
    console.log("Levemente acima do peso")
}

else if (imc > 30) {
    console.log("Acima do peso")
}