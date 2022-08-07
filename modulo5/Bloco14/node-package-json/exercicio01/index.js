//                                                        ------------------------ Exercício 01 --------------------------------------

// Para acessarmos os parâmetros passados basta usarmos process.argv[2], process.argv[3] e assim por diante.

const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = Number(process.argv[4])

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)