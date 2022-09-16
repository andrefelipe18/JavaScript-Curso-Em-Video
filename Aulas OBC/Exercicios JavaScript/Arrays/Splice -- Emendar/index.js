let  NomeNavs = ["Andromeda", "Helmet", "Phoenix", "Supernova"]

NavsRemovidas = NomeNavs.splice(1, 2, "Demeter", "Puller") 
//⏫⏫ Removendo o elemento 1 e 2 e adicionando 2 em seguida
console.log(NavsRemovidas) //Dando print nos elementos removidos
console.log(NomeNavs[1])//Mostrando os novos elementos
console.log(NomeNavs[2])//Mostrando os novos elementos