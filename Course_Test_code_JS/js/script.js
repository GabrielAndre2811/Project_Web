
function soma(valor2, valor1){
return valor1 + valor2;
}

var resultado = soma(10,30); //pode ser var, let, ou const

//uma saida de texto
document.getElementById("texto").innerHTML="Valor exibido da soma <b>JS</b>! " + resultado;

function alertando(){
    alert('Clicou');
}

let carro = {
    marca: "ford", 
    modelo: "ka", 
    ano:2015, 
    placa:"ABC-1234", 
    buzina: function() {alert('biiiiiii');},//função anonima dentro da variavel
    caracteristicas: function() {
        return "A marca é: " + this.marca + " " + "e o modelo é: " + this.modelo
    }
}; 

//uma saida de texto
document.getElementById("objeto").innerHTML=" <b>Mostrando somente o objeto sem classe</b>! " + carro.caracteristicas();
