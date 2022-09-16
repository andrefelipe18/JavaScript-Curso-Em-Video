function verificar() {
 var data = new Date
 var ano = data.getFullYear()
 var fano = document.getElementById(`ano`)
 var res = document.getElementById(`res`)
 if (fano.value.length == 0 || fano.value > ano) {
    window.alert("Verifique os dados e tente novamente")

 } else {
     var fsex = document.getElementsByName(`radf`)
     var idade = ano - Number(fano.value)
     var gen = " "
     var img = document.createElement(`img`)
     img.setAttribute('id', 'foto')
     if(fsex[0].checked) {
         gen = `Homem`
         if(idade >= 0 && idade <= 12) {
             //Criança 
             img.setAttribute(`src`, `foto-bebe-m.png`) 
         } else if (idade < 22) {
             //Jovem
             img.setAttribute("src", "foto-jovem-m.png") 
         } else if (idade < 50) {
             //adulto
             img.setAttribute(`src`, `foto-adulto-m.png`) 
         }
         else {
             //idoso
             img.setAttribute(`src`, `foto-idoso-m.png`) 
         }
         
     }
     else if (fsex[1].checked) {
         gen = `Mulher`
         if(idade >= 0 && idade <= 12) {
            //Criança
            img.setAttribute(`src`, `foto-bebe-f.png`) 
        } else if (idade < 22) {
            //Jovem
            img.setAttribute(`src`, `foto-jovem-f.png`) 
        } else if (idade < 50) {
            //adulto
            img.setAttribute(`src`, `foto-adulto-f.png`) 
        }
        else {
            //idoso
            img.setAttribute(`src`, `foto-idoso-f.png`) 
        }
     }
     res.style.textAlign = `Center`
    res.innerHTML = `${gen} com ${idade} anos.`
    res.appendChild(img)
     
 }

}