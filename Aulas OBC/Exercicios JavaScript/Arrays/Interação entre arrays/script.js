let NavesParadas = ["Helmet", "Andromeda", "Phoenix", "Supernova", "Puller"]

NavesParadas.forEach(function(currentnave, index){
    console.log("Nave: " + currentnave + "\nIndice: " + index)
})
//Percorre o Array, o Currentnave mostra a nave que está atualmente e o index 
//Mostra a posição dela dentro do array

let UpperCaseNaves = NavesParadas.map(function(currentnave, index){
    let UpperCase = currentnave.toUpperCase() //Torna a current nave em maisculo
   return UpperCase //Retorna esse valor para a variavel principal
})
console.log(UpperCaseNaves)

let Caracteres7 = NavesParadas.filter(element => {return element.length >= 7})
//Percorre o array chama o filter e para cada elemento o filter verifica
//Se ele tem 7 ou mais caracteres e se tiver adicona ele na variavel Caracteres7
console.log(Caracteres7)
