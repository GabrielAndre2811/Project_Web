class Pessoa{
   nome //string
   _cpf //long
   email //string
   _senha //string
}

let pessoa_1 = new Pessoa();
let pessoa_2 = new Pessoa();


//atribuindo valores aos atributos
pessoa_1.nome = "Edson";
pessoa_1._cpf = "01453302135";
pessoa_1.email = "edinho23@gmail.com";
pessoa_1._senha = "Edson113438";

pessoa_2.nome = "Jessica";
pessoa_2._cpf = "03250306112";
pessoa_2.email = "jes19silva@gmail.com";
pessoa_2._senha = "Jejess0123";



console.log(pessoa_1);
console.log(pessoa_2);