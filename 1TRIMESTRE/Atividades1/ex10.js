// Crie um array de frutas. Adicione uma fruta no final, uma no início, e outra no meio. 
// Imprima o resultado final.

const lista = ["Morango", "Uva", "Laranja"];

lista.unshift("Maça");
lista.push("Banana");
lista.splice(2, 0, "Amora");

console.log(lista);