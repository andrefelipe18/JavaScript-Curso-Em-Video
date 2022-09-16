function doublevelocity(velocity, printer){ //Passando os parametros e declarando a função
    console.log("Estou na função DoubleVelocity")
    let newvelocity = velocity * 2
    printer(newvelocity) //Definindo o valor de printer
    return newvelocity
}

let anothervelocity = doublevelocity(50, (velocity) => { //Criando uma função dentro do parametro     
 console.log(`  Outra velocidade: ${velocity}`)

})