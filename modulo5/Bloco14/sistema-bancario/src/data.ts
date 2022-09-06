export type User = {
    nome: string,
    cpf: number,
    dataDeNascimento: string,
    saldo: number,
    extrato: extrato[]
    
}

export type extrato = {
    valor: number ,
    dataDeTransação: string,
    descricao: string
}

export let users: User []= [
    {
        nome: "Fulanin Silva",
        cpf: 12345678910,
        dataDeNascimento: "30/11/1993",
        saldo: 560,
        extrato: [
            {
                valor: 75,
                dataDeTransação: "28/08/2022",
                descricao: "Lanche e açai"
            }
        ]
    },

    {
        nome: "Ciclanin Santos",
        cpf: 98765432101,
        dataDeNascimento: "09/10/1949",
        saldo: 2060,
        extrato: [
            {
                valor: 900,
                dataDeTransação: "21/02/2022",
                descricao: "Internet"
            },
        ]
    },
  {
    nome: "Beltranin Rosa",
    cpf: 61718192021,
    dataDeNascimento: "19/12/1972",
    saldo: 3068,
    extrato: [
        {
            valor: 250,
            dataDeTransação: "15/02/2022",
            descricao: "Fones de ouvido"
        },
        {
            valor: 25,
           dataDeTransação: "26/04/2022",
            descricao: "Bifinhos para os dogs"
        },
    ]
  },   
]

export const RealizarDeposito = (
    cpf: number,
    valor: number,
    dataDeTransação: string, 
    descricao: string
) => {
    users = users.map((conta) => {
        if(conta.cpf === cpf){
            conta.extrato.push({
                valor,
                dataDeTransação,
                descricao
            })
            return {
                ...conta,
                saldo: conta.saldo + valor
            }
        }else{
            return conta
        }
    })
}

export const RealizarPagamentos = (
    cpf: number,
    valor: number,
    dataDeTransação: string, 
    descricao: string
) => {
    users = users.map((conta) => {
        if(conta.cpf === cpf){
            conta.extrato.push({
                valor,
                dataDeTransação,
                descricao
            })
            return {
                ...conta,
                saldo: conta.saldo - valor
            }
        }else{
            return conta
        }
    })
}