function recebeString (nome:string, data:string){
    const dataSeparada= data.split("/",3)
    console.log(`Olá me chamo ${nome}, nasci no dia ${dataSeparada[0]}, no mês ${dataSeparada[1]} e no ano de ${dataSeparada[2]}`)
}
recebeString("Natália", "23/12/1995");