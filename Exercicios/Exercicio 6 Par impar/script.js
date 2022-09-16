function imppar() {
    var n1 = document.getElementById("id")
    var res = document.getElementById("res")
    var nn1 = Number(n1.value)
    if (nn1%2 == 0) {
        res.innerHTML = `Par`
  } else {
        res.innerHTML = `Impar`
 }





   
}