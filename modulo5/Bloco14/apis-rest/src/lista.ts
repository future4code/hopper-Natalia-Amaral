// Exercício 01.a) Usaria o método get.
// 01.b) usaria a entidade "/usuarios"

// Exercício 02.a) Foi passado a key e o value. Porque não informando esses dados ele retorna o erro 422.
// b) Sim, fazendo alguma validação.

// Exercício 03.a) Foi usado o id como parâmetro.

// Exercício 04.a) Apenas atualizou a lista mas, nada mudou. Criei um novo usuário por esse método e além de criar, adicionou o novo usuário criado.
// b) Acho uma boa utilizar esse método para caso, haja algum imprevisto.


export enum USUARIO_TYPE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type Usuarios = {
    id:number,
    name:string,
    email:string,
    type:USUARIO_TYPE,
    age:number
}


export let users: Usuarios[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: USUARIO_TYPE.ADMIN, 
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: USUARIO_TYPE.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: USUARIO_TYPE.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: USUARIO_TYPE.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: USUARIO_TYPE.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: USUARIO_TYPE.ADMIN,
        age: 60
    }
]