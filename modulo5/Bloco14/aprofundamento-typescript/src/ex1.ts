const minhaString: string = "Quero logo ser uma juninha!!"
console.log(minhaString)
// a) Ao tentar atribuir number na variável ele acusa um erro, dizendo que não é possivel atribuir number em string.

const meuNumero: number | string = 26
console.log(meuNumero)
// b) Para que possamos ter um retorno string ou number, usamos o Union Type. Onde entre os dois tipos usamos |.

// c)
type dadosUsuario = {
    nome: string;
    idade: number;
    corFavorita: string
}

const pessoa: dadosUsuario = {
    nome: "Natália",
    idade: 26,
    corFavorita: "Preto"
}

const pessoa1: dadosUsuario = {
    nome: "Natieli",
    idade: 24,
    corFavorita: "Roxo"
}

const pessoa2: dadosUsuario = {
    nome: "Jonas",
    idade: 17,
    corFavorita: "Nunhuma"
}

const pessoa3: dadosUsuario = {
    nome: "Aparecida",
    idade: 56,
    corFavorita: "Branco"
}
console.log(pessoa, pessoa1, pessoa2, pessoa3)

// d)
enum corFavorita {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

const minhaCorFavorita = {
    // name:"Red",
    class: corFavorita.VERMELHO
}
console.log(minhaCorFavorita)
