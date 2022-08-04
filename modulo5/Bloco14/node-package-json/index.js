//                                                        ------------------------ Exercício 01 --------------------------------------
// Para acessarmos os parâmetros passados basta usarmos process.argv[2], process.argv[3] e assim por diante.
// const nome = process.argv[2]
// const idade = Number(process.argv[3])
// const novaIdade = Number(process.argv[4])
// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)

//                                                       ------------------------ Exercício 02 --------------------------------------

// const num1 = Number(process.argv[2])
// const num2 = Number(process.argv[3])
// const num3 = Number(process.argv[4])
// const num4 = Number(process.argv[5])

// console.log(`A soma é: ${num1 + num2}`)
// console.log(`A subtração é: ${num1 - num2}`)
// console.log(`A divisão: ${num3 / num4}`)
// console.log(`A multiplicação é: ${num3 * num4}`)

// -------------- Tentei rodar desse jeito porém, sem sucesso. O anterior dando o comando npm run calculadora funcionou. --------------------
// switch (calculadora) {
    //     case "soma":
    //         const num1 = Number(process.argv[2])
    //         const num2 = Number(process.argv[3])
    //         console.log(`A soma é: ${num1 + num2}`)
    //         break;
    //     case "subtração":
    //         const num3 = Number(process.argv[2])
    //         const num4 = Number(process.argv[3])
    //         console.log(`A subtração é: ${num3 - num4}`)
    //         break;
    //     case "divisão":
    //         const num5 = Number(process.argv[4])
    //         const num6 = Number(process.argv[5])
    //         console.log(`A divisão: ${num5 / num6}`)
    //         break;
    //     case "multiplicação":
    //         const num7 = Number(process.argv[4])
    //         const num8 = Number(process.argv[5])
    //         console.log(`A multiplicação é: ${num7 * num8}`)
    //         break;
    // }
    // console.table(calculadora).
    
    //                                                        ----------------------------- Exercício 03 --------------------------------------
    
    import { tarefas } from "./tarefas.js";

    const newTaref = process.argv[2]

    const adicionaTarefa = tarefas.filter((news) => news === newTaref).push(...tarefas)
    console.table([adicionaTarefa])

