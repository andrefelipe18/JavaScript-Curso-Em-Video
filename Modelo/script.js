function carregar() {
var msg = document.getElementById(`msg`) 
var foto = document.getElementById(`fotos`)
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()

msg.innerHTML = `Agora são ${hora}:${minuto}.`




if (hora >= 0 && hora < 12) {
    foto.src = "manhareal.png"
   document.body.style.background = "#87CEFA"
}
else if (hora >= 12 && hora < 18) {
    foto.innerHTML =  '<img src="manha.png">'  
    document.body.style.background = "#A0522D"
 
}
else {
    foto.innerHTML =  '<img src="noite.png">' 
    document.body.style.background = 	"#4682B4"
}
}