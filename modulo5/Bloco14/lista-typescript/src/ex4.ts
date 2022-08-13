enum setores{
    MARKETING="marketing",
    VENDAS= "vendas",
    FINANCEIRO="financeiro",
    }
    
    type PessoaColaboradora ={
        nome:string;
        salário:number;
        setor:setores;
        presencial: boolean;
    }
    
    const colaborador: Array<PessoaColaboradora>= [
        { nome: "Marcos", salário: 2500, setor:setores.MARKETING, presencial: true },
        { nome: "Maria" ,salário: 1500, setor:setores.VENDAS, presencial: false},
        { nome: "Salete" ,salário: 2200, setor:setores.FINANCEIRO , presencial: true},
        { nome: "João" ,salário: 2800, setor:setores.MARKETING, presencial: false},
        { nome: "Josué" ,salário: 5500, setor:setores.FINANCEIRO, presencial: true},
        { nome: "Natalia" ,salário: 4700, setor:setores.VENDAS, presencial: true},
        { nome: "Paola" ,salário: 3500, setor:setores.MARKETING, presencial: true }
    ] 
    
    
    function retornaPresencial (colaborador: Array<PessoaColaboradora>):Array<PessoaColaboradora> {
    
        return colaborador.filter((colaborador)=>{
            return colaborador.setor === setores.MARKETING && colaborador.presencial 
        })
    }
    console.table(retornaPresencial(colaborador))