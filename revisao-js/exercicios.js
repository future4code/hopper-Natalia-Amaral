// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) { 
    return array.length
}

//EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

//EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort( function (a,b){
      return a - b
  })
}
console.log(retornaArrayOrdenado(array))

//EXERCÍCIO 04
let arrays = [1, 2, 3, 4, 5, 6]
function retornaNumerosPares(array, index) {
    return array.filter( function (apenasPares) {
        return apenasPares % 2 === 0
    })
}
console.log(retornaNumerosPares)

//EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((item => item % 2 === 0)).map((item => item ** 2 ))
}

//EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numeroMaior = Math.max(...array)
    return numeroMaior 
}
retornaMaiorNumero([1, 5, 3, 7, 5, 2])


//EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1 > num2) {
        maior = num1
        let objeto = {
            maiorNumero: maior,
            maiorDivisivelPorMenor: (maior % num2) === 0,
            diferenca: maior - num2
        }
        return objeto
    }else {
        maior = num2
        let objeto1 = {
            maiorNumero: maior,
            maiorDivisivelPorMenor: (maior % num1) === 0,
            diferenca: maior - num1
        }
        return objeto1
    } 
    
}

//EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    for (let i = 0; i <= ((n*2) - 1); i++){
        array[i] = i
    }
    let b = 0
    let novoArray = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            novoArray[b] = array[i] 
            b++
            }   
        }
        return novoArray
   
}

//EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"  

    }else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles"

        }else {
            return "Escaleno"
            }
}

//EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let maiorValor = 0
    let maiorValor1 = 0
    let maiorValor2 = 0
    let menorValor = array[0]
    let menorValor1 
    let novoArray = []
    for (let i = 0; i <= array.length - 1; i++){
        if ( array[i] < menorValor){
          menorValor = array[i]
        }
    }
    maiorValor = menorValor
    for (let i = 0; i <= array.length - 1; i++){
        if(array[i] > maiorValor){
            maiorValor = array[i]
        }
    }    
    maiorValor1 = menorValor
    for (let i = 0; i <= array.length - 1; i++){
        if((array[i] > menorValor) && (array[i] != maiorValor)){
          menorValor = array[i]
          maiorValor1 = menorValor
        }
    
    }
    menorValor = maiorValor
    for (let i = 0; i <= array.length - 1; i++){
      if (array[i] < menorValor){
        menorValor = array[i]
      }
  }
    menorValor1 = maiorValor
    for (let i = 0; i <= array.length - 1; i++){
      if ((array[i] < menorValor1) && (array[i] != menorValor)){
        menorValor1 = array[i]
      }
  }    
    novoArray[0] = maiorValor1
    novoArray[1] = menorValor1
    return novoArray
}

//EXERCÍCIO 11
function retornaChamadaDeFilme (filme) {
    let array = []
    for(i = 0; i <= filme.atores.length - 1; i++){
        array[i] = " " + filme.atores[i]
    }
   let chamada = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por${array}.`
   
   return chamada
}

//EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let anonimaPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return anonimaPessoa
}

//EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter((pessoa) => {
        return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60
    })
    return pessoasAutorizadas
}

//EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    function PessoasSemPermissao (pessoas) {
        return (pessoas.altura < 1.50 || pessoas.idade < 15 || pessoas.idade > 60)
          }
    function imprimePessoas (pessoas) {
        return pessoas
          }
    
    const pessoasNaoAutorizadas = pessoas.filter(PessoasSemPermissao).map(imprimePessoas)
    return pessoasNaoAutorizadas
}

//EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((conta) => {
        let totalDeCompra = 0
        conta.compras.forEach((compra) => {
          totalDeCompra += compra
        })
      conta.compras = []
      conta.saldoTotal -= totalDeCompra
      })
  
    return contas
}

//EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    function consultasNovas (a,b) {
        if (a.nome < b.nome)
           return -1;
        if (a.nome > b.nome)
          return 1;
        return 0;
      }
      consultas.sort(consultasNovas)
      return consultas
    }

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    function alterarDataConsulta (a, b){
        return new Date(a.dataDaConsulta.split("/").reverse()).getTime() - new Date(b.dataDaConsulta.split("/").reverse()).getTime()
    }        
    consultas.sort(alterarDataConsulta)
    return consultas
}

