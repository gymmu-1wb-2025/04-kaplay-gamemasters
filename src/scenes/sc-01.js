import camCenter from "../components/camCenter";
import controller from "../components/controller";
import k from "../main";

export default function sc01() {

	let /** @type {GameObj} */ player = {
		choice: ""
	};
	let computerChoice = null;
	let result = null;

	let status = "Wähle deine option"

	k.onKeyPress("1", () => {
		player.choice = "scissors";
		playGame();
	});

	k.onKeyPress("2", () => {
		player.choice = "rock";
		playGame();
	});

	k.onKeyPress("3", () => {
		player.choice = "paper";
		playGame();
	});

	k.add([k.text(`${status}`), k.pos(320, 240), k.anchor("center")])




function checkPlayerWins(playerChoice, computerChoice) {
	return (playerChoice === "scissors" && computerChoice === "paper") ||
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock")
}

function playGame() {
	let computerChoice = k.choose(["scissors", "rock", "paper"]);
	if (player.choice === computerChoice) {
		result = "Unentschieden!";
		status = "Unentschieden!";
	} else if (checkPlayerWins(player.choice, computerChoice)) {
		result = "Du hast gewonnen!";
		status = "Du hast gewonnen!";
	} else {
		result = "Du hast verloren!";
		status = "Du hast verloren!";
	}
	console.log(`Player: ${player.choice} vs Computer: ${computerChoice}`);
	console.log(result);

}
}
