type dados={
    cliente: string;
    saldoTotal: number;
    debitos: number[];
}
const clientes: dados []=[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]
function negativados(clientes:dados[]){

    const saldos= clientes.map((cliente)=>{
        const somaDebitos = cliente.debitos.reduce((anteior,corrente)=>{
            return anteior+corrente
        },0)
        const saldoCliente= cliente.saldoTotal
        cliente.saldoTotal = saldoCliente - somaDebitos
        cliente.debitos= []
        return cliente 
    }).filter((item)=>{
        return item.saldoTotal < 0 
    })
    return saldos
}
console.log(negativados(clientes))