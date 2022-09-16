nomenav = prompt("Qual o nome de usa Espaço-nave?")
qualcac = prompt("Qual o caractere que você deseja substituir") 
porqual = prompt("Por qual caractere você deseja substituir?")
let novanav = ""

console.log(`${nomenav} ${qualcac} ${porqual}`) //Saber as escolhas da pessoa

for (let i = 0; i < nomenav.length; i++) {
   if(nomenav[i]== qualcac){ //Descobrindo se a posição atual do I é igual o caractere escolhido
       novanav += porqual //Caso seja trocar o caractere pelo caractere novo
   }
  else {
      novanav += nomenav[i]
  }
}
console.log(novanav)