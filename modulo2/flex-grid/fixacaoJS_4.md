```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let ocorrencias = arrayDeNumeros.filter( x =>
    x === numeroEscolhido).length;
  if (ocorrencias !== 0) {
    return "O número " + numeroEscolhido + " aparece " + ocorrencias + "x"
  } else if (ocorrencias === 0) {
    return "Número não encontrado"
  }
}```