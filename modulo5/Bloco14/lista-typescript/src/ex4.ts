enum SETOR{
    MARKETING="marketing",
    VENDAS= "vendas",
    FINANCEIRO="financeiro",
    }
    
    type PessoaColaboradora ={
        nome:string;
        salário:number;
        setor:SETOR;
        presencial: boolean;
    }
    
    const colaborador: Array<PessoaColaboradora>= [
        { nome: "Marcos", salário: 2500, setor:SETOR.MARKETING, presencial: true },
        { nome: "Maria" ,salário: 1500, setor:SETOR.VENDAS, presencial: false},
        { nome: "Salete" ,salário: 2200, setor:SETOR.FINANCEIRO , presencial: true},
        { nome: "João" ,salário: 2800, setor:SETOR.MARKETING, presencial: false},
        { nome: "Josué" ,salário: 5500, setor:SETOR.FINANCEIRO, presencial: true},
        { nome: "Natalia" ,salário: 4700, setor:SETOR.VENDAS, presencial: true},
        { nome: "Paola" ,salário: 3500, setor:SETOR.MARKETING, presencial: true }
    ] 
    
    
    function retornaPresencial (colaborador: Array<PessoaColaboradora>):Array<PessoaColaboradora> {
    
        return colaborador.filter((colaborador)=>{
            return colaborador.setor === SETOR.MARKETING && colaborador.presencial 
        })
    }
    console.log(retornaPresencial(colaborador))