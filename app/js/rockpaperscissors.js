////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    var move = null;
    var playerMove;
    // If a `move` has a value, your expression should evaluate to that value.
    (move !== null)? playerMove = move : playerMove = getInput();
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return playerMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    var move = null;
    var computerMove;
    // If a `move` has a value, your expression should evaluate to that value.
	(move !== null)? computerMove = move : computerMove = getInput();
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    if (playerMove == "rock" && computerMove == "paper"){
    	winner = "computer";
    }else if (playerMove == "rock" && computerMove == "scissors"){
    	winner = "player";
    }else if (playerMove == computerMove){
    	winner = "tie";
    }else if (playerMove == "paper" && computerMove == "scissors"){
    	winner = "computer";
    }else if (playerMove == "paper" && computerMove == "rock"){
    	winner = "player";
    }else if (playerMove == "scissors" && computerMove == "rock"){
    	winner = "computer";
    }else if (playerMove == "scissors" && computerMove == "paper"){
    	winner = "player";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 || computerWins < 5){
    	getPlayerMove
    	getComputerMove
    	getWinner
    	if(winner = "player"){
    		playerWins+=1
    	}else if(winner = "computer"){
    		computerWins +=1
    	}

    } 
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    return [playerWins, computerWins];
}

