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
	var move = null;
	if(move === null){
    	var i = 0
    	while(i < 5){
        	move = getInput();
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
	}
    return move;
}

function getComputerMove() {
    // Write an expression that operates on a variable called `move`
    var computerMove = null;
    // If a `move` has a value, your expression should evaluate to that value.
	if(computerMove === null){
		computerMove = randomPlay();
	}
	// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    console.log("computer choses "+computerMove);
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
	var count = 0;
	while(count < 30){
		var atmwinner = getWinner(getPlayerMove(),getComputerMove())
		console.log(atmwinner+" wins this round");
        
		if(atmwinner === "player"){
			playerWins+=1;
		}else if(atmwinner === "computer" ){
			computerWins+=1;
		}
		console.log("player "+playerWins+"|"+"computer "+computerWins);

        if(computerWins == 5){
        	console.log("computer wins the match!");
        	count += 31;
        }else if(playerWins == 5){
        	console.log("player wins the match!");
        	count += 31;
        }
	}
 
	return [playerWins, computerWins];
}

