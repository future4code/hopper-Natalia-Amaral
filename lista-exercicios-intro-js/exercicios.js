// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')
  console.log(mensagem)
}
// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
// EXERCÍCIO 01
function calculaAreaRetangulo() {
  //implemente sua lógica aqui
  let altura = (prompt("Digite a altura do retângulo!!"))
  let largura = (prompt("Digite a largura do retângulo!!"))
  let área = altura*largura
  console.log(área)
}
// EXERCÍCIO 02
function imprimeIdade() {
  //implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o atual!!"))
  let anoDeNascimento = Number(prompt("Digiteo o de nascimento!!"))
  let suaIdade = anoAtual - anoDeNascimento
  console.log(suaIdade)ui}
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  //implemente sua lógica aqui
    return peso / (altura*altura)
}
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  //implemente sua lógica aqui
  //"Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nomeUsuario = prompt("Qual seu nome??")
  let idadeUsuario = prompt ("Qual sua idade??")
  let emailUsuario = prompt ("Qual seu e-mai??")
  console.log (`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
  
}
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  //implemente sua lógica aqui
  let primeiraCor = prompt("Qual primeira cor preferida??")
  let segundaCor = prompt("Qual segunda cor preferida??")
  let terceiraCor = prompt("Qual sua terceira cor preferida??")
  array = [primeiraCor ,segundaCor ,terceiraCor]
 
  console.log(array)
}
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
   //implemente sua lógica aqui
  return string.toUpperCase(); implementesualógq
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
   //implemente sua lógica aqui
     return custo / valorIngresso

}// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
    return string1.length === string2.length
}
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
     return array[0]
}
//EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop([4] , [2])
}
//EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiraPosição = array[0]
  let últimaPosição = array [array.length - 1]
  let removerPrimeiraPosição = array.shift()
  let removerÚltimaPosição = array.pop()
  let adicionaÚltima = array.push(primeiraPosição)
  let adicionaPrimeira = array.unshift(últimaPosição)
  return array
}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let minusculaUm = string1.toLowerCase()
  let minusculaDois = string2.toLowerCase()
  return string1.toLowerCase() === string2.toLowerCase()
}
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}