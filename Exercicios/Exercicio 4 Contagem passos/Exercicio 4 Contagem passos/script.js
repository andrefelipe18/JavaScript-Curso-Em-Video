function contar() {
var ini = document.getElementById("inicio")
var fim = document.getElementById("fim")
var passo = document.getElementById("passo")
var botao = document.getElementById("botao")
var res = document.getElementById("res")

if (ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
    res.innerHTML = `Impossivel contar, Faltam dados!`

} else {
    res.innerHTML = "Contando:"
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (i < f) {
         // CONTAGEM CRESCENTE
    for(var c = i; c <=f; c += p) {
        res.innerHTML += `${c}  \u{1F449}`
    }
    
    } else { //CONTAGEM REGRESSIVA
       for (c = i; c>= f; c -= p) {
        res.innerHTML += `${c}  \u{1F449}`

       }
      
    }       
    res.innerHTML += `\u{1F3C1}`  
 }
}
