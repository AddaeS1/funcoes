let carro = {
    ligado: true,
    velocidade: 0,
    desligar: function(){
        if(carro.ligado === false){
        console.log("Este carro já está desligado.")
    }else{
        carro.ligado = false;
    }
},

    ligar: function () {
        if(carro.ligado === true){
        console.log("Este carro já está ligado.")
    }else{
        carro.ligado = true;
    }
},

    acelerar: function () {
        if(carro.ligado === false){
        console.log("Não é possível acelerar um carro desligado.")
    }else{
        carro.ligado = true;
        carro.velocidade += 10;
    }
},

    desacelerar: function(){
        if(carro.ligado === false){
        console.log("Não é possível desacelerar um carro desligado.")
    }else{
        carro.ligado = true;
        carro.velocidade -= 10;
    }

},

}
carro.acelerar();
console.log(carro);
   