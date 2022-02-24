// // Exercício 01 - interpretação de código.
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2]) -- // Retorna no console a primeira e a última posição do elenco. 
// //E abaixo retorna todo o objeto transmissoesHoje.

// // Exercício 02 - Interpretação de código.
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga) //- a) No console retorna que foram alterados os nomes porém, sem modificar o objeto.
// // b) Apenas faz alterações sem modificar o objeto.

// // Exercício 03 - Interpretação de código.
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura")) - // a) Retorna um boleano, false e retornou undefined para a altura, porque a mesma não foi definida.
// // b) Porque no objeto ja diz que Caio não é backender e porque a altura de Caio, não foi definida.


// // Exercício 01 - Escrita de código.
// // 01 - a)
// const pessoa = {
//     nome: "Natália", 
//     apelidos: ["Nah", "Nath", "Naty"]
//  }
// // 01- b)
// const novaPessoa = {
//     ...pessoa,
//     novosApelidos: [ "Natálinha", "Nazinha", "Helô" ]

// }

//  console.log(`Eu sou ${pessoa.nome} , mas pode me chamar de ${novaPessoa.novosApelidos}`)
 
// // Exercicio 02 a)
// const pessoa = {
// 	   nome: "Natieli",
//     idade: 23, 
// 	   profissao: "Vendedora"
// }
// const minhaFuncao = pessoa
// console.log([pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length])

    
// const pessoa2 = {
//     nome: "Sabrina",
//     idade: 32,
//     profissão: "Dentista"
// }
// const minhaFuncao2 = pessoa2
// console.log([pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissão, pessoa2.profissão.length])

// //Exercício 03 a)
// let carrinho = []

// let bolsa = [
//   {nome: "Maracujá", disponibilidade: true},
//   {nome: "Melão", disponibilidade: true},
//   {nome: "Pitaya", disponibilidade: true}
// ]

// function sacola(frutinhas){
//   carrinho.push(frutinhas)
// }

// sacola([bolsa])
// console.log(carrinho[0])

// Desafio 01
// function informacaoUsuario (nome, idade, profissao){
//     let nomeUsuario = prompt("Qual seu nome?")
//     let idadeUsuario = prompt("Qual sua idade?")
//     let profissaoUsuario = prompt("Qual sua profissao?")
// }

// let informacaoUsuario2 = {
//     nome: "Jonas",
//     idade: 18, 
//     profissao: "Estudante"
// }
// console.log([informacaoUsuario2.nome, informacaoUsuario2.idade, informacaoUsuario2.profissao])

// let novoObjeto = {
//     nome: "Jonas", idade: 18, profissao:"Estudante"
// }
// console.log(`Nome ${novoObjeto.nome},Idade ${novoObjeto.idade}, Profissão ${novoObjeto.profissao}`)

// Desafio 02
// Crie uma função que receba dois objetos que representam filmes.
// Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

// function filmes () {
//     const primeiroFilme = {
//         anoDeLançamento: 2013 ,
//         nome: "Carrie, a Estranha"
//     }
    
//     const segundoFilme = {
//     anoDeEstreia: 2013 ,
//         nome: "Invocação do Mal"
//     }
// }
// const frase1 = ("O primeiro filme foi lançado antes do segundo? False")
// const frase2 = ("O primeiro filme foi lançado no mesmo ano que o segundo?True")
// console.log(frase1)
// console.log(frase2)

// Desafio 03
// let carrinho = []

// let bolsa = [
//   {nome: "Maracujá", disponibilidade: true},
//   {nome: "Melão", disponibilidade: true},
//   {nome: "Pitaya", disponibilidade: true}
// ]

// function sacola(frutinhas){
//   carrinho.push(frutinhas)
// }
// return bolsa

// // sacola([bolsa])
// // console.log(carrinho[0]) - Não consegui dar o retorno!