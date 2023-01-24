let ranNum = Math.floor(Math.random() * 100);
let message = document.getElementById('messageText');

    
function checkNum() {
    let userGuess = document.getElementById('numGuess').value;
    if (userGuess > ranNum) {
        message.innerHTML = 'Your number is too high';
    }
    if (userGuess < ranNum) {
        message.innerHTML = 'Your number is too low';
    }
    if (userGuess == ranNum) {
        message.innerHTML = 'That is correct!'
    }
    if (userGuess === NaN) {
        message.innerHTML = 'Not a number'
    }
}