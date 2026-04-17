'use strict';


let secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 10;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent =
    message;
}
document.querySelector('.score').textContent= 10;

document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        displayMessage('😜No Number!');


    }
    else if (guess === secretNumber) {

        // Player Wins


        displayMessage('Correct Guess 🎉');

        document.querySelector('body').style.
        backgroundColor = '#60b347';

        document.querySelector('.number').style.width = 
        '30rem';

        document.querySelector('.number').textContent =
secretNumber;

    if (highScore < score) {
        highScore = score;
    document.querySelector('.highscore').textContent
    = highScore ;
    }
    }

    // When guess is wrong 
    else if (guess !== secretNumber){

        if (score > 0){

            // High

        displayMessage(guess > secretNumber ? 'Too High 😌⬆️' 
        :'Too Low 😌⬇️') ;
        score=score -1;
        document.querySelector('.score').textContent=
        score;
        }
        else{
            displayMessage('You Lost  😵') ;
            document.querySelector('body').style.
        backgroundColor = '#fc0707ff';
        }
    }

});


document.querySelector('.again').addEventListener
('click', function () 
{
    score = 10;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value =  '';

    document.querySelector('body').style.
    backgroundColor = '#222';
    document.querySelector('.number').style.
    width = '15rem';
    
    displayMessage('Start guessing...') ;
    document.querySelector('.score').textContent =
    score;

    const guess = Number(document.querySelector('.guess').value);
    console.log();

});


