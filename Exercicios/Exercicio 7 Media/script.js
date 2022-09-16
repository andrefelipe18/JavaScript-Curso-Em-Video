function smm() {
  
var nb1 = document.getElementById("b1")
var nb2 = document.getElementById("b2")
var nb3 = document.getElementById("b3")
var nb4 = document.getElementById("b4")
var ntf = document.getElementById("nfff")
var nff = document.getElementById("nff")
var apr = document.getElementById("apr")
var body = document.getElementById("body")
var b1 = Number(nb1.value)
var b2 = Number(nb2.value)
var b3 = Number(nb3.value)
var b4 = Number(nb4.value)
var conta = b1+b2+b3+b4               
var contaa = Number(conta.value)
var ress = conta/4
//window.alert(`${ress}`)
ntf.innerHTML += `  ${ress}`
if (ress >= 6){
    apr.innerHTML = "Aprovado"
    nff.style.backgroundColor = "#1E90FF"
}
else if (ress <=5) {
    apr.innerHTML = "Reprovado"
    nff.style.backgroundColor = "#FF6347"
}
// nff.style.backgroundColor = "blue"
}   