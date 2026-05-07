// Maria Eduarda N31
// Kemilly Emanuelly N26

const leitor = require('node:fs');
const dados = leitor.readFileSync("estoque.txt", "utf-8")
                    .split("\r\n");

const produtos = [];
for(let i = 0; i < dados.length; i++){
    produtos.push(criarProduto(dados[i]));
}

console.log("Produtos com o estoque acima de 0: \n");

produtos.forEach((produto) => {
    if (produto.estoque > 0) {
        console.log(produto)
    }
});

function criarProduto(linha){
    const infos = linha.split("|");
    const produto = [];
    for(let i = 0; i < infos.length; i++){
        let atributos = infos[i].split(":");
        produto[atributos[0].trim()] = atributos[1].trim();
    }
    produto["estoque"] = Number.parseFloat(produto.estoque)
    return produto
}