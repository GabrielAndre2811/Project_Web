 class Conta { constructor() { 
    this.saldo = 0; } 
    deposita(valor) { this.saldo += valor; } } 

class ContaPoupanca extends Conta { 
    atualiza(indice) { this.saldo += this.saldo * indice; } }

var contaPoupanca = new ContaPoupanca();
 contaPoupanca.deposita(1000); 
 contaPoupanca.saldo; //1000 
 contaPoupanca.atualiza(0.05); 
 contaPoupanca.saldo; //1050
 
