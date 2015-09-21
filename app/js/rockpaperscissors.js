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

function getPlayerMove() {
    var i = 0
    while(i < 5){
        var move = getInput();
        if(move == "paper"){
            console.log("player chose "+move);
        	i+=5
        }else if(move == "rock"){
            console.log("player chose "+move);
        	i+=5
        }else if(move == "scissors"){
            console.log("player chose "+move);
        	i+=5
        }else{
        	console.log(move+" is not a valid input");
        }
    }
    return move;
}

function getComputerMove() {
    // Write an expression that operates on a variable called `move`
    var move = null;
    var computerMove;
    // If a `move` has a value, your expression should evaluate to that value.
	(move !== null)? computerMove = move : computerMove = randomPlay();
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
	console.log('Let\'s play Rock Paper Scissors');
	var playerWins = 0;
	var computerWins = 0;

	while(count < 30){
    	console.log(playerWins+" "+computerWins);
		
        
        if(playerWins == 5){
            count+=31;
            console.log("Player wins!");
        }else if(computerWins){
        	count+=31;
            console.log("Computer wins!");
        }
	}
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
	return [playerWins, computerWins];
}

