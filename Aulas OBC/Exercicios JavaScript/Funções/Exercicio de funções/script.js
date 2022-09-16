function aula(){
    let velocidade = 0
    let acelerar = 5
    let desacelerar = -5

    let nome = prompt("Qual o nome da sua nave?")
    let opcao = prompt("Selecione uma opção \n 1- Acelerar \n 2- Desacelerar \n 3- Imprimir dados \n 4- Sair do progama")
    while(opcao == "1"){
        velocidade += acelerar
        alert("Acelerando 5Km/s")
        opcao = prompt("Selecione uma opção \n 1- Acelerar \n 2- Desacelerar \n 3- Imprimir dados \n 4- Sair do progama")
        if(opcao == "4"){
            break
        }
    }
    while(opcao == "2"){
        velocidade += desacelerar
        alert("Desacelerando 5 Km/s")
        opcao = prompt("Selecione uma opção \n 1- Acelerar \n 2- Desacelerar \n 3- Imprimir dados \n 4- Sair do progama")
        if(opcao == "4"){
            break
        }
    }
    while(opcao == "3"){
        alert(`A nave ${nome} teve a velocidade total de ${velocidade}`)
        opcao = prompt("Selecione uma opção \n 1- Acelerar \n 2- Desacelerar \n 3- Imprimir dados \n 4- Sair do progama")
        if(opcao == "4"){
            break
        }
    }
    
}
aula()



/*opcaoescolhida = prompt(`Deseja entrar em dobra espacial?\n 1 - Sim \n 2 - Não`) 
//Perguntandoa se deseja entrar na dobra e colocando o valor na variavel opcaoescolhida

while(opcaoescolhida == "1") {
    dobracountador += 1
   opcaoescolhida = prompt("Deseja realizar a proxima dobra? \n 1 - Sim \n 2 - Não")
}
alert(`O Numero de dobras realizadas pela nave ${nomenav} foi ${dobracountador}`) */

