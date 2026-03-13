import camCenter from "../components/camCenter";
import controller from "../components/controller";
import k from "../main";

export default function sc01() {

	let /** @type {GameObj} */ player = null;
	let computerChoice = null;
	let result = null;

	onKeyPress("1", () => {
		player.Choice = "scissors";
		playGame();
	});

	onKeyPress("2", () => {
		player.Choice = "rock";
		playGame();
	});

	onKeyPress("3", () => {
		player.Choice = "paper";
		playGame();
	});




}

const computerChoice = choose(["scissors", "rock", "paper"]);

function playGame() {
	computerChoice = choose(["scissors", "rock", "paper"]);
	if (player.Choice === computerChoice) {
		result = "Unentschieden!";
	} else if ((player.Choice === "scissors" && computerChoice === "paper") ||
		(player.Choice === "rock" && computerChoice === "scissors") ||
		(player.Choice === "paper" && computerChoice === "rock")) {
		result = "Du hast gewonnen!";
	} else {
		result = "Du hast verloren!";
	}
	console.log(`Player: ${player.Choice} vs Computer: ${computerChoice}`);
	console.log(result);

}
k.add([k.text("Press 1 for Scissors, 2 for Rock, 3 for Paper"), k.pos(100, 100)]);