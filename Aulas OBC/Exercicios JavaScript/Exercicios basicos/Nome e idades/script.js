function clickkk() {
 let nome1 = document.getElementById("nome1")
 let nome2 = document.getElementById("nome2")
 let idade1 = document.getElementById("idade1")
 let idade2 = document.getElementById("idade2")

let idd1 = Number(idade1.value)
let idd2 = Number(idade2.value)
let nnome1 = String(nome1.value)
let nnome2 = String(nome2.value)

let dif = idd1 - idd2

alert(`O Nome da pessoa mais velha é ${nnome1} e ela tem ${idd1} anos`)
alert(`O Nome da pessoa mais nova é ${nnome2} e ela tem ${idd2} anos`)
alert(`A Diferença de idade entre elas são ${dif} anos`)
}