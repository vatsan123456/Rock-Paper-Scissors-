function computerPlay() {

	// These are the choices that the computer can choose from.
	let choices = ["Rock", "Paper", "Scissors"];

	// Randomly pick Rock, Paper, or Scissors, that will be the computer's choice.
	let choice = choices[Math.floor((Math.random() * 3) + 1) - 1];

	return choice;
}

function playRound(playerSelection, computerSelection) {

	// The result that will be displayed to the user.
	let roundResultMessage = "";

	// The result that the function will return will be contained in this variable. Either store won, or lost. If draw, the result wlil stay empty.
	let roundResult = "";

	// Check if player won.
	if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "SCISSORS" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "ROCK")) {

		// The user won the round, the function will have a return value with information that the user won.
		roundResult = "won";

		// Set the message indicating that the user won.
		roundResultMessage = "You won this round! " + playerSelection + " beats " + computerSelection;

		carrotIcon.textContent = ">";
	}

	// Check if player drew.
	else if (playerSelection == computerSelection) {

		// The draw message indicating that the user drew.
		roundResultMessage = "You drew this round! " + playerSelection + " ties with " + computerSelection;

		carrotIcon.textContent = "=";
	}

	// Check if player lost.
	else {

		// If neither of the above conditionals are true, then the user lost.
		roundResult = "lost";

		// The lose message indicating that the user lost.
		roundResultMessage = "You lose this round! " + computerSelection + " beats " + playerSelection;

		carrotIcon.textContent = "<";
	}
	
	const iconDict = { ROCK : "🪨", PAPER : "📜", SCISSORS : "✂️"};

	// Display user's choice and computer's choice
	userIcon.textContent = iconDict[playerSelection];
	computerIcon.textContent = iconDict[computerSelection];

	// Display to user the round result messsage...
	div.textContent = "Result: " + roundResultMessage;

	return roundResult;
}

function getGameResult(userTotalScore, computerTotalScore) {

	// If user won best of 5.
	if (userTotalScore > computerTotalScore) {

		// Indicate inside the game result message that the user won.
		gameResultMessage = "You won the game!";
	}

	// If game was a draw.
	else if (userTotalScore == computerTotalScore) {

		// Indicate inside the game result message that the user and computer drew.
		gameResultMessage = "The game is a draw!";
	}

	// If the above two conditions are not true, then the user lost the game.
	else {

		// Indicate inside the game result message that the user lost.
		gameResultMessage = "You lost the game!";
	}
	return gameResultMessage
}

// Query select relevant elements
const buttons = document.querySelectorAll('span');
const body = document.querySelector('body');
const div = document.querySelector('#round-result');
const userScoreDiv = document.querySelector('#user-score');
const computerScoreDiv = document.querySelector('#computer-score');
const roundNumberDiv = document.querySelector('#round-number')
const userIcon = document.querySelector('#user-icon');
const computerIcon = document.querySelector('#computer-icon');
const carrotIcon = document.querySelector('#carrot-icon');

function startGame() {
	// The user's total score.
	let userTotalScore = 0;

	// The computer's total score.
	let computerTotalScore = 0;

	// Keep track of how many times the button is pressed.
	buttonClickCounter = 0;

	// Number of rounds in the game.
	const NUMBER_OF_ROUNDS = 5;

	// Set text content for relevant divs
	userIcon.textContent = '?';
	computerIcon.textContent = '?';
	roundNumberDiv.textContent = `Round 1: `;
	userScoreDiv.textContent = "User score: 0";
	computerScoreDiv.textContent = "Computer score: 0";
	
	div.textContent = "Result: ";
	buttons.forEach((button) => {
		button.addEventListener('click', function (e) {
			if (buttonClickCounter == NUMBER_OF_ROUNDS) return;
			
			roundNumberDiv.textContent = `Round ${buttonClickCounter+1}.`;

			roundResult = playRound(e.target.id, computerPlay().toUpperCase());
			buttonClickCounter += 1;

			// If user won.
			if (roundResult == "won") {
				++userTotalScore;
				userScoreDiv.textContent = "User score: " + userTotalScore;
			}

			// If computer won.
			else if (roundResult == "lost") {
				++computerTotalScore;
				computerScoreDiv.textContent = "Computer score: " + computerTotalScore;
			}
			else buttonClickCounter = buttonClickCounter-1;
			if (buttonClickCounter == NUMBER_OF_ROUNDS) {
				// The message containing who won the game.
				let gameResultMessage = getGameResult(userTotalScore, computerTotalScore);
				div.textContent += "\r\n. " + gameResultMessage;
				// Game is over, create play again button.
				const playagainbutton = document.createElement('span');
				playagainbutton.textContent = "Play again.";
				playagainbutton.style.color = 'white';
				playagainbutton.style.margin = 'auto';
				playagainbutton.style.padding = '3em';
				body.appendChild(playagainbutton);
				playagainbutton.addEventListener('click', () => window.location.reload());
			}
		})

	})
}

startGame();