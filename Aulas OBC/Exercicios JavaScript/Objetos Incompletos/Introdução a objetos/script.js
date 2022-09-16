let naves = { //Um Objeto é em chaves ao contrario de Array que é em colchetes
  name: "Fenix" , 
  quantTripulantes: 9,
  type: "Batalha"
}
 naves.engatada = false //Colocando uma propriedade nova no Objeto
 naves["niveldeshield"] = 100 //Outra maneira de colocar uma propriedade

console.log(naves.name) //Acessando a propiedade nome
console.log(naves.quantTripulantes) //Acessando a propiedade quantTripulantes
console.log(naves.type) //Acessando a propriedade type
console.log(naves["engatada"]) //Acessando a propriedade nova
console.log(naves["niveldeshield"]) //Acessando a propriedade nova
