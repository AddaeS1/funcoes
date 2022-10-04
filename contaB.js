const contaBancaria = {
    nome: "Maria",
    saldo: 6.66,
    historicos: [],

    depositar: function(valor){
        contaBancaria.saldo = contaBancaria.saldo + valor;
        
    },
    
    sacar: function(valor){
        contaBancaria.saldo = contaBancaria.saldo - valor;
        
    },

    extrato: function(){
        console.log(contaBancaria.nome);
        console.log(contaBancaria.historicos);

    },
}

contaBancaria.depositar(371);
contaBancaria.sacar(55);
contaBancaria.extrato();
console.log(contaBancaria);