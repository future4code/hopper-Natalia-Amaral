import { pessoas } from "./pessoas.js";

const nameSearch = process.argv[2]
// const result = pessoas.find((nome) => nome === nameSearch )

const result = pessoas.filter((nome) => nome.toLowerCase().includes(nameSearch.toLowerCase()))

console.table(result)































// console.log("Boa noite!!")
// const nome = process.argv[2]
// console.log(`Olá ${nome}`)