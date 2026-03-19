import camCenter from "../components/camCenter";
import controller from "../components/controller";
import k from "../main";

export default function sc01() {

	let /** @type {GameObj} */ player = {
		choice: ""
	};
	let computerChoice = null;
	let result = null;

	let canSelect = true; // Sperre Variable

	k.onKeyPress("1", () => {
		if (!canSelect) return;// Blockiere wenn gesperrt
		player.choice = "scissors";
		playGame();

	});

	k.onKeyPress("2", () => {
		if (!canSelect) return; // Blockiere wenn gesperrt
		player.choice = "rock";
		playGame();

	});

	k.onKeyPress("3", () => {
		if (!canSelect) return; // Blockiere wenn gesperrt
		player.choice = "paper";
		playGame();
	});

	const status = k.add([k.text(`Treffen Sie Ihre Wahl`), k.pos(320, 240), k.anchor("center")])




function checkPlayerWins(playerChoice, computerChoice) {
	return (playerChoice === "scissors" && computerChoice === "paper") ||
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock")
}

function playGame() {
	canSelect = false; // Sperre aktiviert

	let computerChoice = k.choose(["scissors", "rock", "paper"]);
	if (player.choice === computerChoice) {
		result = "Unentschieden!";
		status.text = "Unentschieden!";
	} else if (checkPlayerWins(player.choice, computerChoice)) {
		result = "Du hast gewonnen!";
		status.text = "Du hast gewonnen!";
	} else {
		result = "Du hast verloren!";
		status.text = "Du hast verloren!";
	}
	console.log(`Player: ${player.choice} vs Computer: ${computerChoice}`);
	console.log(result);

	k.wait(1, ()=> {
		status.text = "Treffe eine neue Wahl"
		canSelect = true; //Sperre aufheben

	})

}
}
