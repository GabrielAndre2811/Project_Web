
//objeto cachorro

const Cachorro = {
    nome : "Bob",
    raca : "Vira-Latinha",
    cor : "Amarelo",
    porte : ["Pequeno", "Médio", "Grande"]

}

let texto = JSON.stringify(Cachorro);

document.getElementById("objeto").innerHTML=texto.nome; //se fosse um atributo direto do objeto da certo sim, Exemplo Cachorro.nome;

//let objeto = JSON.parse(texto)
//console.log(objeto.porte[1]);