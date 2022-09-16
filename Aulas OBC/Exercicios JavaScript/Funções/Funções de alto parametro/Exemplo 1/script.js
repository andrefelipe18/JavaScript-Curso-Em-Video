function doublevelocity(velocity, printer){ //Passando os parametros e declarando a função
    console.log("Estou na função DoubleVelocity")
    let newvelocity = velocity * 2
    printer(newvelocity) //Definindo o valor de printer
    return newvelocity
}

let printvelocity = velocity => { //Usando uma arrow Function
    console.log(`Nova velocidade: ${velocity} Km/s`)
}

let newvelocity = doublevelocity(60, printvelocity) //Criando uma variavel que usa uma função e um parametro

console.log(newvelocity)
