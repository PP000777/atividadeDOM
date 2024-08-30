document.getElementById('calcular').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var operacao = document.getElementById('operacao').value;
    var resultado = document.getElementById('resultado');


    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = 'Por favor, insira números válidos.';
        return;
    }


    var resultadoCalculo;


    switch (operacao) {
        case 'soma':
            resultadoCalculo = num1 + num2;
            break;
        case 'subtracao':
            resultadoCalculo = num1 - num2;
            break;
        case 'multiplicacao':
            resultadoCalculo = num1 * num2;
            break;
        case 'divisao':
            if (num2 === 0) {
                resultado.textContent = 'Divisão por zero não é permitida.';
                return;
            }
            resultadoCalculo = num1 / num2;
            break;
    }


    resultado.textContent = 'Resultado: ' + resultadoCalculo;
});