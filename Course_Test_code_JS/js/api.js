

//const ajax = new XMLHttpRequest(); //requisição ajax de um site sem acessalo diretamente
//ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/'); //get pega as informações do site
//ajax.send(); //send envia a requisição

//ajax.onload = function (){ //evento ao carregar...

    //document.getElementById('campo').innerHTML = this.responseText; //resposta de texto vindo da requisição
 
    //let obj = JSON.parse(this.responseText);
    //console.log(obj.localidade);
//}

function buscarcep(){
    let inputtext = document.getElementById('cep').value;
    const ajax = new XMLHttpRequest(); //requisição ajax de um site sem acessar
    ajax.open('GET', 'https://viacep.com.br/ws/'+inputtext+'/json/'); //get pega as informações do site
    ajax.send(); //send envia a requisição
    ajax.onload = function (){ //ao carregar...

    //document.getElementById('campo').innerHTML = this.responseText; //resposta de texto vindo da requisição
    //transformou em objeto

    let obj = JSON.parse(this.responseText); 

    //pegou os atributos

    let logradouro = obj.logradouro; 
    let localidade = obj.localidade;
    let bairro = obj.bairro;
    let uf = obj.uf;
    let ddd = obj.ddd;

    document.getElementById('campo').innerHTML = "Logradouro: " + logradouro + "<br> Cidade: " + localidade 
    + "<br> Bairro: " + bairro + "<br> Estado: " + uf + "<br> ddd: " + ddd;

 
    //let obj = JSON.parse(this.responseText);
    //console.log(obj.localidade);
}


}