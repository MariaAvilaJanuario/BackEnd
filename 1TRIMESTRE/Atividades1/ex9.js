// Faça um algoritmo que efetue o cálculo do salário líquido de um funcionário. 
// As informações fornecidas serão: valor bruto e percentual de desconto do INSS. 
// Imprima na tela o salário líquido final.

let salario_bruto = 5500;
let salario_liquido = (salario_bruto - (salario_bruto * 0.14))

console.log ("O salário líquido final é de: R$" + salario_liquido.toFixed(2))