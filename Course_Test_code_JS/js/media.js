function calcularMedia() {
    // Obtendo os valores dos inputs
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);

    // Calculando a média
    var media = (num1 + num2 + num3) / 3;

    // Usando document.write para exibir os resultados
    document.write('<h3>Resultados utilizando document.write:</h3>');
    document.write('<p>Média simples: ' + media + '</p>');
    document.write('<p>Média arredondada: ' + media.toFixed(2) + '</p>');
    document.write('<p>Média formatada: ' + media.toLocaleString('pt-BR') + '</p>');
    document.write('<p><strong>Média em negrito:</strong> ' + media.toFixed(2) + '</p>');

    // Finaliza o script para evitar que o HTML seja reescrito
    document.close();
}