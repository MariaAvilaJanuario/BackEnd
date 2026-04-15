// Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

let numero = 16;
console.log("Número: " + numero);

if (numero % 2 == 0) {
    console.log ("Número par")
} else {
    console.log ("Número impar")
}

if (numero == 0) {
    console.log ("Número nulo")
} 
else if (numero < 0) {
    console.log ("Número negativo")
} else {
    console.log ("Número positivo")
}