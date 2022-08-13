function recebeString (nome:string, nascimento:string){
    const data= nascimento.split("/")
    return console.log(` Olá me chamo ${nome}, nasci no dia ${data[0]}, no mês ${data[1]} e no ano de ${data[2]}`)
}
recebeString("Natália","23/12/1995")