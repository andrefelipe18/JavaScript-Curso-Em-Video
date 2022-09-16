function speedUp(velocity, acceleration){ //Definindo os parametros 
    novavelocidade = velocity + acceleration //Atribuindo os parametros
    console.log(`Sua velocidade é ${novavelocidade}`) //Imprimindo a velocidade
    return novavelocidade //Retornando a nova velocidade 
}

speedUp(100, 10)