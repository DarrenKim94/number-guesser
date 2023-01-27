const ranNum = Math.floor(Math.random() * 100);
let guessCounter = 3

function checkNum() {
    guessCounter --;
    const message = document.getElementById('messageText');
    const userGuess = parseInt(document.getElementById('numGuess').value);
    if (isNaN(userGuess) || userGuess ==='' || userGuess === null) {
        message.innerHTML = 'Not a number'
    }
    if (userGuess > ranNum) {
        message.innerHTML = `Your number is too high. You have ${guessCounter} guess left.`;
    }
    if (userGuess < ranNum) {
        message.innerHTML = `Your number is too low. You have ${guessCounter} guess left.`;
    }
    if (userGuess === ranNum && guessCounter <= 3) {
        message.innerHTML = 'That is correct!'
    }
    if (guessCounter === 0) {
        message.innerHTML = `You have no more guess left, loser. The number was ${ranNum}`;
    }
    if (guessCounter < 0) {
        resetGame();
    }
    return false;
}

function resetGame() {
    checkNum();
}

