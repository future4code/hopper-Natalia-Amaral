// a) A entrada seria um array de números e a saída seria um objeto de números.
// b) Essa função é composta por: "numerosOrdenados" que seria um array de números, "soma" que seria somente number e "estatisticas" que seria um objeto de números. 

function obterEstatisticas(numeros: number[]): object {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: { maior: number, menor: number, media: number } = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([0,1,2,3,4,5,6,7,8,9,20]))


// c)
type amostra = {
    numeros: [15, 10, 55, 18, 26, 35],
    obterEstatisticas: (numeros: number[]) => {
      maior: number,
      menor: number,
      media: number
    }
  }