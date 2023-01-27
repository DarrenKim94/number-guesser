let ranNum = Math.floor(Math.random() * 10);
const message = document.getElementById('messageText');
let guessCounter = 3

function checkNum() {
    let userGuess = parseInt(document.getElementById('numGuess').value);
    guessCounter --;
    if (isNaN(userGuess) || userGuess ==='' || userGuess === null) {
        message.innerHTML = 'Not a number'
    }
    if (userGuess > ranNum) {
        message.innerHTML = `Your number is too high. You have ${guessCounter} guesses left.`;
    }
    if (userGuess < ranNum) {
        message.innerHTML = `Your number is too low. You have ${guessCounter} guesses left.`;
    }
    if (userGuess === ranNum && guessCounter <= 3) {
        message.innerHTML = 'That is correct!'
    }
    if (guessCounter === 0 && userGuess != ranNum) {
        message.innerHTML = `You have no more guesses left, loser. The number was ${ranNum}`;
    }
    if (guessCounter < 0) {
        resetGame();
    }
    return false;
}

function resetGame() {
    guessCounter = 3;
    ranNum = Math.floor(Math.random() * 10);
    document.getElementById('messageText').innerHTML = 'Choose Again';
    document.getElementById('numGuess').value = '';
}