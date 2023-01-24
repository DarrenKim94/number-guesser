let ranNum = Math.floor(Math.random() * 100);
let message = document.getElementById('messageText');
let guessCounter = 3
    
function checkNum() {
    let userGuess = document.getElementById('numGuess').value;
    if (userGuess > ranNum) {
        guessCounter -= 1;
        message.innerHTML = `Your number is too high. You have ${guessCounter} guess left.`;
    }
    if (userGuess < ranNum) {
        guessCounter -= 1;
        message.innerHTML = `Your number is too low. You have ${guessCounter} guess left.`;
    }
    if (userGuess == ranNum && guessCounter <= 3) {
        message.innerHTML = 'That is correct!'
    }
    if (isNaN(userGuess) || userGuess ==='' || userGuess === null) {
        message.innerHTML = 'Not a number'
    }
    if (guessCounter === 0) {
        message.innerHTML = `You have no more guess left, loser. The number was ${ranNum}`
    }
}