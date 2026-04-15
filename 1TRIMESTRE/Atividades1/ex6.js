// Faça um algoritmo que leia o valor de um produto e mostre os valores finais, conforme a forma de pagamento.

let produto = 34.99;

let preço_final1 = (produto - (produto * 0.15));
let preço_final2 = (produto - (produto * 0.10));
let preço_final4 = (produto + (produto * 0.10));

console.log ("FORMA DE PAGAMENTO!");
console.log ("À vista em dinheiro ou pix: R$" + preço_final1.toFixed(2));
console.log ("À vista no cartão de crédito: R$" + preço_final2.toFixed(2));
console.log ("Parcelado no cartão em duas vezes: R$" + produto);
console.log ("Parcelado no  cartão em três vezes ou mais: R$" + preço_final4.toFixed(2));