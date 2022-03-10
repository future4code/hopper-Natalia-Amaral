// //Exercícios de interpretação de código:
// // 1. - Foi atribuido um valor 0 para a variável "valor" e dentro do for foi atribuido 0 à variável "i", porém
// // enquanto o valor de i for menor que 5, ele irá somar mais 1. No console retorna 10.
// // let valor = 0
// // for(let i = 0; i < 5; i = i + 1) {
// //   valor += i
// // }
// // console.log(valor)


// //2.a - Foi impresso no console os números da lista maiores que 18.
// // 2.b - É possivél utilizar somente o for..of porém,
// // para acessar o índice de cada elemente precisaríamos criar uma condicional e utilizar o indexOf(indice de)
// // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// // for (let numero of lista) {
// //   if (numero > 18) {
// // 		console.log(numero)
// // 	}
// // }

// //3. - Caso o usuário digite 4, no console é impresso quatro linhas com asteriscos.
// // Sendo que cada linha soma 1.
// // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// // let quantidadeAtual = 0
// // while(quantidadeAtual < quantidadeTotal){
// //   let linha = ""
// //   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
// //     linha += "*"
// //   }
// //   console.log(linha)
// //   quantidadeAtual++
// // }

// // -----------------------------------------------------------------------------------------------------------------------------------------------------------

// // Exercícios de escrita de código: 
// // 1.)
// let pets = Number(prompt("Quantos animais de estimação você possui?"))
// let numberDosPets = []

// if ( pets === 0 ) {
//     console.log("Que pena!! Pode adotar um pet.");
// }else {
//     while ( pets > 0 ) {
//         numberDosPets.push(prompt("Digite os nomes de seus pets!!"));
//         pets -= 1;
//     }
// }
// console.log(numberDosPets)

// // 2.)
// //a) - 
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let numero of arrayOriginal) {
//     if (numero > 0) {
//           console.log(numero)
//       }
//   }

// //b) - 
// for (let numero of arrayOriginal){
//     console.log(numero/10)
// }

// //c) -
// let arrayNovo = []
// for (let numero of arrayOriginal) {
//     if (( numero % 2 ) === 0) {
//         arrayNovo.push(numero)
//     }
// }
// console.log(arrayNovo)

// //d) -
// let arrayString = []
// for (let numero of arrayOriginal) {
//     arrayString.push(`O elemento do índex ${arrayOriginal.indexOf(numero)} é: ${numero}`)
// }
// console.log(arrayString)

// //e) -
// let valorMaior = 0; 
// for (let numero of arrayOriginal) {
//     if(numero > valorMaior) {
//         valorMaior = numero
//     }
// }
// let valorMenor = valorMaior
// for(let novoValor = 0; novoValor < arrayOriginal.length - 1; novoValor++){
//     if(valorMenor > arrayOriginal[novoValor])  {
//         valorMenor = arrayOriginal[novoValor]
//     }
// }
// console.log(`O maior número é ${valorMaior}, e o menor número é ${valorMenor}`)

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama"},
    { nome: "Bellsprout", tipo: "grama"},
    { nome: "Charmander", tipo: "fogo"},
    { nome: "Vulpix", tipo: "fogo"},
    { nome: "Squirtle", tipo: "água"},
    { nome: "Psyduck", tipo: "água"},
    
]

const callback = (pokemons, indice, array) => {
    if(pokemons.tipo === "grama"){
        return true
    } else {
        return false
    }
}

const algunsPokemons = pokemons.filter(callback)