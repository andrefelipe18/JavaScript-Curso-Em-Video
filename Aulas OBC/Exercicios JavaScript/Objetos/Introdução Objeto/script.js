let spaceship = {
    name: "Fenix",
    quanTripulantes: 7,
    type: "Battle"
}
console.log(spaceship.type) //acessando uma propriedade no objeto
console.log(spaceship["name"]) //Outra maneira de acessar no objeto

spaceship.IsHitched = false //Criando uma nova propriedade no objeto 
spaceship["NiveldeEscudo"] = 100 //Outra maneira de criar uma propriedade

console.log(spaceship["IsHitched"])
console.log(spaceship.NiveldeEscudo)