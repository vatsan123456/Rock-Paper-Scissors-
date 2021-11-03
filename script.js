function computerPlay() {

	// These are the choices that the computer can choose from.
	let choices = ["Rock", "Paper", "Scissors"];

	// Randomly pick Rock, Paper, or Scissors, that will be the computer's choice.
    let choice = choices[Math.floor((Math.random() * 3) + 1) - 1];
	
	return choice;
}

function playRound(playerSelection, computerSelection) {

	// Convert the player's and computer's selection to uppercase, for simplicity in determining winner and loser.
	playerSelection = playerSelection.toUpperCase();
	computerSelection = computerSelection.toUpperCase();
	
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

	// The number of rounds the game will have.
	const NUMBER_OF_ROUNDS = 5;

	// The user's total score.
	let userTotalScore = 0;

	// The computer's total score.
	let computerTotalScore = 0;

	// The message containing who won the game.
	let gameResultMessage = "";

	// Play for 5 rounds
	for (let roundNumber = 1; roundNumber <= NUMBER_OF_ROUNDS; ++roundNumber) {
		
		// Before playing each round, get choice from user.
		let userChoice = prompt("Enter your choice (rock, paper, scissors): ");
		
		// Get computer's choice.
		let computerChoice = computerPlay();
		
		// Play the round, function returns result message.
		let roundResultMessage = playRound(userChoice, computerChoice);
		
		// Display the results of the round.
		console.log(roundResultMessage);

		// Get 4th character of the round result message, this will be either "l" or "w": l = user lost, w = user won.
		const STARTING_INDEX_FOR_RESULT = 4;
		const ENDING_INDEX_FOR_RESULT = 5;
		let roundResultCharacter = roundResultMessage.substring(STARTING_INDEX_FOR_RESULT, ENDING_INDEX_FOR_RESULT);

		// Determine whether to increment userScore or computerScore, by 1.
		// If user won.
		if (roundResultCharacter == "w") {
			
			// Add 1 to user's total score.
			userTotalScore++;
		}
		// If user lost.
		else if (roundResultCharacter == "l") {

			// Add 1 to computer's total score.
			computerTotalScore++;
		}
		// If the two above conditions are not true, then user and computer drew, no need to do anything.
	}
	// Calculate who won the best of 5.
	// If user won best of 5.
	if (userTotalScore > computerTotalScore) {

		// Indicate in game result message that user won.
		gameResultMessage = "You won the game!";
	} 
	// If game was a draw.
	else if (userTotalScore == computerTotalScore) {

		// Indicate in game result message that user and computer drew.
		gameResultMessage = "The game is a draw!";
	}
	// If the above two conditions are not true, then the user lost the game.
	else {

		// Indicate in game result message that user lost.
		gameResultMessage = "You lost the game!";
	}
	// Display to the user the result.
	console.log(gameResultMessage);
}
game();