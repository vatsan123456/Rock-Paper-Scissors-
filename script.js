function computerPlay() {

	// These are the choices that the computer can choose from.
	let choices = ["Rock", "Paper", "Scissors"];

	// Randomly pick Rock, Paper, or Scissors, that will be the computer's choice.
	let choice = choices[Math.floor((Math.random() * 3) + 1) - 1];

	return choice;
}

function playRound(playerSelection, computerSelection) {

	// The result that will be displayed to the user.
	roundResultMessage = "";

	// This result the function will return will be contained in this variable, it wll be a single word: won, lost, or drew.
	let roundResult = "";

	// Check whether player won.
	if ((playerSelection == "ROCK" && computerSelection == "SCISSORS")
		|| (playerSelection == "SCISSORS" && computerSelection == "PAPER")
		|| (playerSelection == "PAPER" && computerSelection == "ROCK")) {

		// The user won the round, the function will have a return value with information that the user won.
		roundResult = "won";

		// Set the message indicating that the user won.
		roundResultMessage = "You won! " + playerSelection + " beats " + computerSelection;
	}

	// Check whether player drew.
	else if (playerSelection == computerSelection) {

		// The user and computer drew the round, the function will have a return value with information that the user drew.
		roundResult = "drew";

		// The draw message indicating that the user drew.
		roundResultMessage = "You drew! " + playerSelection + " ties with " + computerSelection;
	}
	else {

		// If neither of the above conditionals are true, then the user lost.
		roundResult = "lost";

		// The lose message indicating that the user lost.
		roundResultMessage = "You lose! " + computerSelection + " beats " + playerSelection;
	}

	// Display to user the round result messsage.
	console.log(roundResultMessage);

	return roundResult;
}

function updateScore(score, roundResult, isUser) {

	// Determine whether to increment score by 1.
	// If user won.
	if (roundResult == "won" && isUser) {

		// Add 1 to user's total score.
		score++;
	}
	// If user lost.
	else if (roundResult == "lost" && !isUser) {

		// Add 1 to computer's total score.
		score++;
	}
	// If the two above conditions are not true, then user and computer drew, no need to do anything.
	return score;
}

function getGameResult(userTotalScore, computerTotalScore) {

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
	return gameResultMessage
}

function getUserChoice() {

	// Prompt user for choice and convert it to uppercase, for simplicity with later conditionals.
	let userChoice = prompt("Enter your choice (rock, paper, scissors): ").toUpperCase();

	// Verify choice from user is: rock, paper, or scissors, otherwise keep prompting user to input appropriate choice.
	while (userChoice != "ROCK" && userChoice != "SCISSORS" && userChoice != "PAPER") {

		// Prompt user for choice and convert it to uppercase, for simplicity with the conditional in this loop, and later ones.
		userChoice = prompt("Not appropriate choice. Please enter your choice (rock, paper, scissors): ").toUpperCase();
	}

	return userChoice;
}

function game() {

	// The number of rounds the game will have.
	const NUMBER_OF_ROUNDS = 5;

	// The former of the 2 constants will be passed to a fn later as an argument for updating user score, and the latter for computer score.
	const IS_USER = true;
	const IS_NOT_USER = false;

	// The user's total score.
	let userTotalScore = 0;

	// The computer's total score.
	let computerTotalScore = 0;

	// The message containing who won the game.
	let gameResultMessage = "";

	// Play for 5 rounds
	for (let roundNumber = 1; roundNumber <= NUMBER_OF_ROUNDS; ++roundNumber) {

		// Get user's choice.
		let userChoice = getUserChoice();

		// Get computer's choice, and convert computer's selection to uppercase, for simplicity in determining winner and loser.
		let computerChoice = computerChoice.toUpperCase();		

		// Play the round, function returns round result message.
		let roundResult = playRound(userChoice, computerChoice);

		// Update scores of user and computer.
		userTotalScore = updateScore(userTotalScore, roundResult, IS_USER);
		computerTotalScore = updateScore(computerTotalScore, roundResult, IS_NOT_USER);
	}
	// Calculate who won the best of 5.
	gameResultMessage = getGameResult(userTotalScore, computerTotalScore);

	// Display to the user the result.
	console.log(gameResultMessage);
}
game();