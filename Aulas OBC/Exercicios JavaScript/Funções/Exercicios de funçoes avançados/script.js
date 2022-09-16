function dese(velocity, printer) {
    let deceleration = 20

    while (velocity > 0){
        printer(velocity)
        velocity -= deceleration
 }
 alert("Nave parada, comportas abertas") 
}

let navvelocity = 160 

dese(navvelocity, function(velocity){
    console.log(`Velocidade atual: ${velocity}`)
})