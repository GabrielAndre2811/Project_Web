class Carro{
    constructor(marca, modelo, ano){
       this.marca = marca;
       this.modelo = modelo;
       this.ano = ano;
       this.velocidade = 0;
    }
    exibirDetalhes() {
        return "Carro:" + this.marca +  " "+ this.modelo+ " "+ this.ano + " " + "Velocidade atual: " + this.velocidade ;
    }

    info(){ //templateString = método mais moderno
        console.log(`Marca:  ${this.marca}`);
        console.log(`Modelo:  ${this.modelo}`);
        console.log(`Ano:  ${this.ano}`);
        console.log(`Velocidade: ${this.velocidade}`);
        console.log("-----------------------------------");

    }

     // Método para acelerar o carro
     acelerar(incremento) {
        this.velocidade += incremento;
    }
    frear() {
        this.velocidade = 0;
    }
    getMarca(){
        return this.marca;
    }
    getModelo(){
        return this.modelo;
    }
    getVelocidade(){
        return this.velocidade;
    }
    setMarca(marca){
        this.marca = marca;
    }
    setModelo(modelo){
        this.modelo = modelo;
    }
    setVelocidade(velocidade){
        this.velocidade = velocidade;
    }

}

let Uno  = new Carro ("Fiat", "Uno", 2012);
let Corolla = new Carro('Toyota', 'Corolla', 2020);

console.log(Uno);
console.log(Corolla.exibirDetalhes());
Uno.info();

console.log(Corolla.getMarca());

//acelerar o Uno
Uno.acelerar(25);

Corolla.setMarca('Ford');//mudar atributo

//uma saida de texto
document.getElementById("objeto").innerHTML=" <b>Carro na classe</b>! " + Uno.exibirDetalhes();

//outra forma de fazer
function veiculo(marca, modelo, ano){
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano,

    this.info = function(){
        console.log(`Marca:  ${this.marca}`);
        console.log(`Modelo:  ${this.modelo}`);
        console.log(`Ano:  ${this.ano}`);
        console.log(`Velocidade: ${this.velocidade}`);
        console.log("-----------------------------------");


    }

}

const carro1 = new veiculo("Ford", "Ka", 2009);

console.log(carro1);