let nomenav = prompt("Qual o nome da sua nave?")


for(let i = 0; i < nomenav.length; i++){ 
    // console.log(nomenav[i]) //Escrevendo letra por letra da nomenav
    if(nomenav[i] == "o") { //Sabendo se a letra atual é "o"
        break //Parar o for
    }
    console.log(nomenav[i])
}