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
    var userMove;
    // If a `move` has a value, your expression should evaluate to that value.
    (move !== null)? userMove = move : userMove = getInput();
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return userMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    var move = null;
    var compsMove;
    // If a `move` has a value, your expression should evaluate to that value.
	(move !== null)? compsMove = move : compsMove = getInput();
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return compsMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    if (userMove == "rock" && compsMove == "paper"){
    	winner = "computer";
    }else if (userMove == "rock" && compsMove == "scissors"){
    	winner = "player";
    }else if (userMove == compsMove){
    	winner = "tie";
    }else if (userMove == "paper" && compsMove == "scissors"){
    	winner = "computer";
    }else if (userMove == "paper" && compsMove == "rock"){
    	winner = "player";
    }else if (userMove == "scissors" && compsMove == "rock"){
    	winner = "computer";
    }else if (userMove == "scissors" && compsMove == "paper"){
    	winner = "player";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

