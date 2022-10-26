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
    if (winner.textContent === 'Victory!' || winner.textContent === 'You lost!') {
        return;
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            div.textContent = 'Tie! Rock versus Rock';
        } else if (computerSelection === 'paper') {
            div.textContent = 'You Lose! Paper beats Rock';
            addScore('loss');
        } else {
            div.textContent = 'You Win! Rock beats Scissors';
            addScore('win');
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            div.textContent = 'You Win! Paper beats Rock';
            addScore('win');
        } else if (computerSelection === 'paper') {
            div.textContent = 'Tie! Paper versus Paper';
        } else {
            div.textContent = 'You Lose! Scissors beats Paper';
            addScore('loss')
        }
    } else {
        if (computerSelection === 'rock') {
            div.textContent = 'You Lose! Rock beats Scissors';
            addScore('loss');
        } else if (computerSelection === 'paper') {
            div.textContent = 'You Win! Scissors beats paper';
            addScore('win');
        } else {
            div.textContent = 'Tie! Scissors versus Scissors';
        }
    }
}

const runningScore = document.querySelector('div.runningScore');
runningScore.textContent = '0 - 0';

function addScore(roundResult) {
    let newScore = runningScore.textContent.split(' - ');
    if (roundResult === 'win') {
        newScore[0]++;
    } else {
        newScore[1]++;
    }
    if (newScore[0] == '5') {
        winner.textContent = 'Victory!';
    } else if (newScore[1] == '5') {
        winner.textContent = 'You lost!';
    }
    runningScore.textContent = newScore.join(' - ');
}

const button1 = document.querySelector("#rock");
const button2 = document.querySelector("#paper");
const button3 = document.querySelector("#scissors");

const winner = document.querySelector('div.winnerAnnouncement');
const div = document.querySelector('div.roundResult');

button1.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
});
button2.addEventListener('click', function() {
    playRound('paper', getComputerChoice())
});
button3.addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
});

