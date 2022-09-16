let nomenav = prompt("Qual o nome da sua nave?")
let proi = prompt("Qual o caractere proibido?")
let invertido = "" //String vazia

for (let i = nomenav.length - 1; i >= 0; i--) { //Comando para inverter a palavra
    if (nomenav[i] == proi){
        break
    }
    invertido += nomenav[i] //Declarando o nome invertido
}
alert(`O Nome da sua nave invertido é ${invertido}`)
