document.getElementById('botao').addEventListener('click', function() {
    var texto = document.getElementById('texto').value;
    var mensagem = document.getElementById('mensagem');


    if (texto.trim() === '') {
        mensagem.textContent = 'Por favor, digite algo!';
    } else {
        mensagem.textContent = 'Você digitou: ' + texto;
    }
});