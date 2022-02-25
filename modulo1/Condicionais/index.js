// ----- Exercício 01 de interpretação de código -------

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// } // - A.) O teste verifica se o número que o usuário digitou seria ímpar ou par.
// B.) Se o resultado for 0 ou igual a 0, ele é true, então passa no teste. C.) Se retornar diferente de 0, ele não passa!

// ----- Exercício 02 de interpretação de código -------

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) // A.) O código acima serve para listar as frutas do mercado e informar os valores dessas frutas.
// b.) Ele retorna que o valor da fruta maçã é de $ 2,25.
// c.) Ele retorna que o valor da fruta pêra é de $ 5,00.

// ----- Exercício 03 de interpretação de código -------

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem) // A.) Na primeira linha retorna que passou no teste. Sendo que eu como usuário inseri 20.
// B.) Caso o usuario digite 10 retorna que passou no teste. Ja o -10, ele da um erro na linha 47 e diz que a mensagem não foi definida.
// C.) Da um erro dizendo que a mensagem não foi definida, até porque dentro do if a mensagem está como secreta.

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ----- Exercício 01 de escrita de cógigo -------

// let idade = Number(prompt("Qual sua idade?"))
// console.log(idade)

// let idadeUsuario = 26
// console.log(idadeUsuario)

// if(idade > 18){
//   console.log("Você pode dirigir.")
// }else{
//   console.log("Você não pode dirigir.")
// }

// ---- Exercício 02 de escrita de código -----

// let manha = prompt("Digite M se seu periodo for matutino!").toUpperCase()
// console.log(manha)

//  function periodoEscolar (periodoManha) {
//     if (periodoManha) {
//         console.log("Bom dia")
//      } else {
//         console.log("Não é do período da manhã")
//     }
// } 
// periodoEscolar(manha)

  
// let tarde = prompt("Digite V se seu periodo for vespertino!").toUpperCase()
// console.log(tarde)

//  function periodoEscolar (periodoDaTarde) {
//     if (periodoDaTarde){
//         console.log("Boa tarde")
//      } else {
//         console.log("Não é do período da tarde!")
//     }
// } 
// periodoEscolar(tarde)
 
// let noite = prompt("Digite N se seu periodo for noturno!").toUpperCase()
// console.log(noite)

//  function periodoEscolar(peridoDNoite){
//     if (peridoDNoite){
//         console.log("Boa noite!")
//      } else {
//         console.log("Não é do período da noite!")
//     }
// } 
// periodoEscolar(noite)

// ------Exercício 03 de escrita de código -------

// let periodoTurmas = prompt(" Qual seu horário? M = manhã V = tarde N = noturno").toUpperCase()
//     switch (periodoTurmas) {
//       case 'M': 
//        console.log("Bom dia!")
//        break

//      case 'V':
//       console.log("Boa tarde!")
//       break

//      case 'N':
//         console.log("Boa noite!")
//         break
//   }

// ------Exercício 04 de escrita de código ---------

// let resposta1 = prompt("Quanto custa o ingresso? Apenas números!")
// let valorIngresso = Number(resposta1)

// let resposta2 = prompt("Qual o gênero?")
// let generoFilme = (resposta2)

// if (generoFilme === "fantasia" && valorIngresso < 15) {
//   console.log("Bom filme!");
// } else {
//   console.log("Escolha outro filme :(");
// }