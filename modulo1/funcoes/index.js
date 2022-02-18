// Exercício interpretação de código
// Exercício 01 a).
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// Exercício 01 b).
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }
// minhaFuncao(2)
// minhaFuncao(10) ----- O console retorna um erro!

// Exercício 02 a).

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta) ----- A função pergunta se dentro do texto do usuário existe a palavra "cenoura".

// Exercício 02 b).
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)
// -----------Testando o que da no console------------
// let cenoura0 = "Eu gosto de cenoura"
// let cenoura1 = "CENOURA é bom pra vista"
// let cenoura2 = "Cenouras crescem na terra"

// function mostraNoconsole(parametroCenoura){
//     console.log(parametroCenoura)
// }

// mostraNoconsole (cenoura0)
// mostraNoconsole (cenoura1)
// mostraNoconsole (cenoura2) ------Retorna no console as mensagem citadas acima!



// Exercício 01 de escrita de código

// let informacoesCaio = "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// let meuNome = "Natália"
// let minhaIdade = 26
// let minhaCidade = "Matão"
// let minhaProfissão = "auxiliar odontológica"

// function minhasInformacoes (nome, idade, cidade, profissao ) {
// console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, sou ${profissao}`)

// }

// minhasInformacoes(meuNome, minhaIdade, minhaCidade, minhaProfissão)

// Exercício 02 - Escreva as funções explicadas abaixo:
// a).
// function somaDosNumeros( number1 , number2) {
//     let somaDosNumeros = number1 + number2
//     let somarNumeros  = 100 + 35
//     console.log(somarNumeros)
//     return somaDosNumeros
// }
// console.log(somaDosNumeros(100 , 35))

//b).
// function maiorOuIgual (primeiroNumber,segundoNumero) {
//   let num1 = 5
//   let num2 = 10
//   return num1 >= num2
// }
// console.log(maiorOuIgual())

//c).
// function zeroOuDiferenteDeZero(sessenta) {
//     let numero = 60 !== 60
//     return numero
// }
// console.log(zeroOuDiferenteDeZero(60))

//d).
// function mensagemString(){

//     let frasezinha = "tu consegue"
//     let frasezinhaEmMaiusculo = frasezinha.toUpperCase()
//     let comprimentoDaFrasezinha = frasezinha.length
//     return (`${frasezinhaEmMaiusculo} , ${comprimentoDaFrasezinha}`)
// }

//     console.log(mensagemString())

// Exercício 03

// function adição(num1, num2){
//   return num1 + num2
// }

// function subtração(num1, num2){
//     return num1 - num2
// }

// function multiplicação(num1, num2){
//     return num1 * num2
// }

// function divisão(num1, num2){
//     return num1 / num2
// }

//     const numeroDoUsuário = Number (prompt("Digite um número!"))
//     const outroNumeroDoUsuario = Number (prompt("Digite outro número!"))
//     console.log(
//         adição(numeroDoUsuário , outroNumeroDoUsuario), 
//         subtração(numeroDoUsuário , outroNumeroDoUsuario), 
//         multiplicação(numeroDoUsuário , outroNumeroDoUsuario), 
//         divisão(numeroDoUsuário , outroNumeroDoUsuario)
//             )