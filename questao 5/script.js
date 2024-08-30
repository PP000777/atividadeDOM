let randomNumber;
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const messageDiv = document.getElementById('message');
const restartButton = document.getElementById('restartButton');


function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    messageDiv.textContent = 'Faça sua aposta!';
    guessInput.value = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    restartButton.style.display = 'none';
}


function checkGuess() {
    const userGuess = parseInt(guessInput.value, 10);


    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDiv.textContent = 'Por favor, insira um número entre 1 e 100.';
        return;
    }


    if (userGuess < randomNumber) {
        messageDiv.textContent = 'Muito baixo! Tente novamente.';
    } else if (userGuess > randomNumber) {
        messageDiv.textContent = 'Muito alto! Tente novamente.';
    } else {
        messageDiv.textContent = `Parabéns! Você acertou o número ${randomNumber}!`;
        guessInput.disabled = true;
        guessButton.disabled = true;
        restartButton.style.display = 'inline';
    }
}


guessButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', startGame);


startGame();