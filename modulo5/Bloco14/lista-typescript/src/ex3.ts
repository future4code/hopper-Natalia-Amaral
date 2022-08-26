type filme ={
    nomeFilme: string,
    anoLancamento:number,
    genero: GENERO,
    pontuacao?: number
    }
    
    enum GENERO{
        ACAO="ação",
        DRAMA="drama",
        COMEDIA="comédia",
        ROMANCE="romance",
        TERROR="terror"
    }
    const Horror:filme ={
        nomeFilme: "A Frera",
        anoLancamento: 2018,
        genero: GENERO.TERROR,
        pontuacao: 98
    }
    console.log(Horror)