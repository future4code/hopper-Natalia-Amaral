```function calculaNota(ex, p1, p2) {
   let conceitoFinal = (ex + p1 + p2) / 3
 if (conceitoFinal >= 9) {
   return 'A'
 } else if (conceitoFinal >= 7.5) {
   return 'B'
 } else if (conceitoFinal >= 6) {
   return 'C'
 } else {
   return 'D'
 }
}```