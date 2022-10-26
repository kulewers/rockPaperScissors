function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3) + 1;
    let choice;
    if (choiceNum == 1) {
        choice = 'rock';
    } else if (choiceNum == 2) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            div.textContent = 'Tie! Rock versus Rock';
        } else if (computerSelection === 'paper') {
            div.textContent = 'You Lose! Paper beats Rock';
        } else {
            div.textContent = 'You Win! Rock beats Scissors';
            runningScore.textContent = parseInt(runningScore.textContent) + 1;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            div.textContent = 'You Win! Paper beats Rock';
            runningScore.textContent = parseInt(runningScore.textContent) + 1;
        } else if (computerSelection === 'paper') {
            div.textContent = 'Tie! Paper versus Paper';
        } else {
            div.textContent = 'You Lose! Scissors beats Paper';
        }
    } else {
        if (computerSelection === 'rock') {
            div.textContent = 'You Lose! Rock beats Scissors';
        } else if (computerSelection === 'paper') {
            div.textContent = 'You Win! Scissors beats paper';
            runningScore.textContent = parseInt(runningScore.textContent) + 1;
        } else {
            div.textContent = 'Tie! Scissors versus Scissors';
        }
    }
}

const runningScore = document.querySelector('div.runningScore');
runningScore.textContent = 0;

const button1 = document.querySelector("#rock");
const button2 = document.querySelector("#paper");
const button3 = document.querySelector("#scissors");

const div = document.querySelector('div.roundResult');

button1.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
});
button2.addEventListener('click', function() {
    playRound('peper', getComputerChoice())
});
button3.addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
});




