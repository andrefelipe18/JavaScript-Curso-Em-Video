let nave = {
  name: "Andromeda",
  type: "Travel",
  tripulacao: ["Cap Silva", "Copiloto Almeida"] //Incluindo uma array a um objeto
}

nave.tripulacao.push("Ten Fernanda") //Adicionando mais um elemento na array dentro do objeto

console.log(nave["tripulacao"])