// Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos, meses e dias essa pessoa já viveu. 
// Leve em consideração o ano com 365 dias e o mês com 30 dias.

let nascimento = 2009;

let anos = (2026 - nascimento);
let meses = (anos * 12 );
let dias = (anos * 365);

console.log ("Você já viveu " + anos + " anos.");
console.log ("Você já viveu " + meses + " meses.");
console.log ("Você já viveu " + dias + " dias.");