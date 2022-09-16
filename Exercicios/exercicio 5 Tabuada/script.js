function gerar() {
 var num = document.getElementById("number")
var tab = document.getElementById("tabuada")
 if(num.value.length == 0) {
    window.alert("Não Existe")
 } else { 
var n = Number(num.value)
var c = 1
tab.innerHTML = `   `
while (c <= 10) {
   var item = document.createElement(`option`)
    item.text = `${n} x ${c} = ${n*c}`
    tab.appendChild(item)   
    c++
}




}








}