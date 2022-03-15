// Exercícios de interpretação de código:
// 01.a) O código mapeia os nomes e apelidos dando dentro da função.

// 02.a) Imprime no console os nomes listados e a quantidade de arrays que tem na função.

// 03.a) É impresso no console apenas os nomes Amanda e Laís. Foi excluido o nome da Letícia.

//----------------------------------------------------------------------------------------------------//

// Exercícios de escrita de código:
// 1.) a:
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  let nomePets = pets.map ((ordemNome) => {
//      console.log(ordemNome.nome)
//  })

// // b:
// let racaPet = pets.filter ((pets , indice, array) => {
//     return pets.raca === "Salsicha"
// })
// console.log(racaPet)

// // // c:
// let descontoPet = pets.filter((pets) => {
//     return pets.raca === "Poodle";
// }).map((pets) => {
//     let array = [];
//     array.push(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`)
//     return array;
// });
// console.log(descontoPet)
// ----------------------------------------------------------------------------------------------------------------------------

// Exercícios de escrita de código:
// 2.a)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

let nomeProdutos = produtos.map ((ordemNome) => {
         console.log(ordemNome.nome)
})


let precoProdutos = produtos.map((produtos) => {
        let novoObjeto = {
            nome: produtos.nome,
            preco: produtos.preco * 0.95
        }
        return novoObjeto;
})
console.log(precoProdutos)


let produtosBebidas = produtos.filter ((produto , indice, array) => {
    return produto.categoria === "Bebidas"
})
console.log(produtosBebidas)


let novoProduto = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
})
console.log(novoProduto)


let frasesArrays = produtos.filter((item) => {
    if (item.nome.includes("Ypê")){
        return `Compre ${item.nome} por ${item.preco}`;
    }
})
console.log(frasesArrays)
  
