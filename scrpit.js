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
            console.log('Tie! Rock versus Rock');
            return 'tie';
        } else if (computerSelection === 'paper') {
            console.log('You Lose! Paper beats Rock');
            return 'loss';
        } else {
            console.log('You Win! Rock beats Scissors');
            return 'gain';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log('You Win! Paper beats Rock');
            return 'gain';
        } else if (computerSelection === 'paper') {
            console.log('Tie! Paper versus Paper');
            return 'tie';
        } else {
            console.log('You Lose! Scissors beats Paper');
            return 'loss';
        }
    } else {
        if (computerSelection === 'rock') {
            console.log('You Lose! Rock beats Scissors');
            return 'loss';
        } else if (computerSelection === 'paper') {
            console.log('You Win! Scissors beats paper');
            return 'gain';
        } else {
            console.log('Tie! Scissors versus Scissors');
            return 'tie';
        }
    }
}


function game () {
    let score;
    for(let count = 0; count < 5; count++) {
        let playerSelection = prompt("Choice: ");
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === 'gain') {
            score++;
        } else if (roundResult === 'tie') {
            count--;
        }
    }
    if (score > 2) {
        console.log("Victory!")
    } else {
        console.log("You Lost!")
    }
}

game();