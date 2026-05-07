// Maria Eduarda N31
// Kemilly Emanuelly N26

const lista = ['lápis', 'caderno', 'papel', 'tesoura', 'borracha', 'cola'];

const termo = 'lapiseira';

for (let i = 0; i < lista.length; i++) {
    if (lista[i] == termo) {
        console.log("O item já está na nossa lista de materiais")
        break
    } else {
        console.log("O item não está na nossa lista de materiais")
        break
    }
}