let nave = {
  nome: "Andromeda",
  tipo: "Viagem",
  capacidademax: 20,
  ligar: function() { //Adicionando uma função anonima no objeto
    alert("Preparando Propulsores")
    alert("Ligando computador de bordo")
  }
}

nave.velocidade = 0 //Adicionando um objeto novo
nave.aumentarvelocidade = function(aceleracao) {
  this.velocidade += aceleracao
}

console.log(nave)
nave.aumentarvelocidade(15)