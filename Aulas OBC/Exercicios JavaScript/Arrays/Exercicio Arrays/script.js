const NavesEstacionadas = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]
let NavesSuperLotada = NavesEstacionadas.filter(naves => {return naves[1] >= 9}).map(
naves => {return naves[0]}   
)
//O Filtro filtra as naves com 9 ou mais pessoas e o map retorna o nome delas


let NaoEstacionada = NavesEstacionadas.findIndex(naves => {return naves[2] == false})
//Retornando o Indice dos Elementos que estão == false

let NomeMaisculo = NavesEstacionadas.map(naves =>{
    return naves[0].toUpperCase()
})
//Colocando o nome das naves em maisculo

let mensagem = "Naves SuperLotadas: " + NavesSuperLotada.join(", ")
//Retorna um string com os elementos do array concatenados separados com o que tiver entre parenteses
mensagem += "\nNaves não estacionadas: " + (NaoEstacionada + 1)
mensagem += "\n Espaços Naves Em Maisculo: " + NomeMaisculo.join(", ")
alert(mensagem)