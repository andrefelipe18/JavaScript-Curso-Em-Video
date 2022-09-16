let dobracountador = 0 //Declarando o numero de dobras
let opcaoescolhida = "" //A Opção que o usuario escolheu

let nomenav = prompt("Digite o nome de sua nave") //Recebendo o nome da nave

opcaoescolhida = prompt(`Deseja entrar em dobra espacial?\n 1 - Sim \n 2 - Não`) 
//Perguntandoa se deseja entrar na dobra e colocando o valor na variavel opcaoescolhida

while(opcaoescolhida == "1") {
    dobracountador += 1
   opcaoescolhida = prompt("Deseja realizar a proxima dobra? \n 1 - Sim \n 2 - Não")
}
alert(`O Numero de dobras realizadas pela nave ${nomenav} foi ${dobracountador}`)

