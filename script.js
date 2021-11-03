function computerPlay() {
	// These are the choices that the computer can choose from.
	let choices = ["Rock", "Paper", "Scissors"];

	// Randomly pick Rock, Paper, or Scissors, that will be the computer's choice.
    let choice = choices[Math.floor((Math.random() * 3) + 1) - 1];
	
	return choice;
}

function playRound(playerSelection, computerSelection) {

	// Convert the player's and computer's selection to lower case for simplicity in checking their choices.
	playerSelection = playerSelection.toUpperCase();
	computerSelection = computerSelection.toUpperCase();

	// Check whether player won, lost, or drew to computer.
	
	// Check whether player won.
	if ((playerSelection == "ROCK" && computerSelection == "SCISSORS")
	|| (playerSelection == "SCISSORS" && computerSelection == "PAPER")
	|| (playerSelection == "PAPER" && computerSelection == "ROCK")) {
		// The victory message indicating that the user won.
		let victoryMessage = "You won! " + playerSelection + " beats " + computerSelection;
		return victoryMessage;
	} 
	// Check whether player drew.
	else if (playerSelection == computerSelection) {
		// The draw message indicating that the user drew.
		let drawMessage = "You drew! " + playerSelection + " ties with " + computerSelection;
		return drawMessage;
	} 
	// If neither of the conditionals are true, then the user lost.

	// The lose message indicating that the user lost.
	let loseMessage = "You lose! " + computerSelection + " beats " + playerSelection;
	
	return loseMessage;
}

function game() {
	
}