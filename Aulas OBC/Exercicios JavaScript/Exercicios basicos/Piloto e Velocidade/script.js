function test() {
let vel = 0
let confi = document.getElementById("vel")
let conffi = Number(confi.value)
let veltrue = prompt(`Confirme novamente a velocidade desejada`)
if (veltrue <= 0){
    alert(`Veiculo parado`)
}
if (veltrue < 40){
  alert(`Velocidade baixa, considere aumentar`)
}
if (veltrue >= 40 && veltrue <= 79){
 alert(`Velocidade ideal`)
}
if (veltrue >= 80){
alert(`Velocidade alta, considere diminuir`)
}

}