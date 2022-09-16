/* let nomenav = "" //String vazia

function navmod() {
    nomenav = "Andromeda" //Alterando o nome da variavel vazia dentra função
}

console.log(nomenav)

navmod() //Chamando a função

console.log(nomenav) */

function velocidade (){
    let velocidadenav = 0 //Isso é um Scope local, essa variavel só existe aqui dentro
} //O var é lido primeiro antes de todo o codigo
// O let só é lido quando é declarado
 
console.log(velocidadenav)