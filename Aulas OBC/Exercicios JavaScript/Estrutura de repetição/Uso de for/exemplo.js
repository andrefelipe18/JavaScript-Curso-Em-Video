let nomenav = "Capacete" //Nome da nossa nave
let novanav = "" //String vazia

for(let i = 0; i < nomenav.length; i++){ 
   // console.log(nomenav[i]) //Escrevendo letra por letra da nomenav
  if(nomenav[i] == "e"){ //Sabendo se o valor i é igual a letra "e"
    novanav += "i" //Se for a letra "e" trocar por "i"
  }
  else {
    novanav += nomenav[i] 
  }

}
console.log(novanav)
