import camCenter from "../components/camCenter";
import controller from "../components/controller";
import k from "../main";

export default function sc02() {
	let /** @type {GameObj} */ player = {
			choice: "",
		};
	let computerChoice = null;
	let result = null;

	let canSelect = true; // Sperre Variable

	k.onKeyPress("1", () => {
		if (!canSelect) return; // Blockiere wenn gesperrt
		player.choice = "Feuer";
		playGame();
	});

	k.onKeyPress("2", () => {
		if (!canSelect) return; // Blockiere wenn gesperrt
		player.choice = "Wasser";
		playGame();
	});

	k.onKeyPress("3", () => {
		if (!canSelect) return; // Blockiere wenn gesperrt
		player.choice = "Erde";
		playGame();
	});

	k.onKeyPress("4", () => {
		if (!canSelect) return; // Blockiere wenn gesperrt
		player.choice = "Luft";
		playGame();
	});

	k.onKeyPress("5", () => {
		if (!canSelect) return; // Blockiere wenn gesperrt
		player.choice = "Blitz";
		playGame();
	});

	const status = k.add([
		k.text(`Treffen Sie Ihre Wahl`),
		k.pos(320, 240),
		k.anchor("center"),
	]);

	const choicesText = k.add([
		k.text("", { size: 24 }),
		k.pos(320, 300),
		k.anchor("center"),
	]);

	let levelScore = 0;
	let levelScoreComputer = 0;

	// Punkte-Anzeige
	const scoreDisplay = k.add([
		k.text(`${levelScore} : ${levelScoreComputer}`),
		k.pos(320, 35),
		k.anchor("center"),
	]);

	function addPoints() {
		if (result === "Du hast gewonnen!") {
			levelScore++;
		} else if (result === "Du hast verloren!") {
			levelScoreComputer++;
		}

		scoreDisplay.text = `${levelScore} : ${levelScoreComputer}`; // Aktualisiere die Punkte-Anzeige
	}

	function checkPlayerWins(playerChoice, computerChoice) {
		return (
			(player.choice === "Feuer" && computerChoice === "Erde") ||
			(player.choice === "Feuer" && computerChoice === "Luft") ||
			(player.choice === "Wasser" && computerChoice === "Feuer") ||
			(player.choice === "Wasser" && computerChoice === "Blitz") ||
			(player.choice === "Erde" && computerChoice === "Wasser") ||
			(player.choice === "Erde" && computerChoice === "Blitz") ||
			(player.choice === "Luft" && computerChoice === "Erde") ||
			(player.choice === "Luft" && computerChoice === "Wasser") ||
			(player.choice === "Blitz" && computerChoice === "Feuer") ||
			(player.choice === "Blitz" && computerChoice === "Luft")
		);
	}

	function playGame() {
		canSelect = false; // Sperre aktiviert

		let computerChoice = k.choose(["Feuer", "Wasser", "Erde", "Luft", "Blitz"]);

		choicesText.text = `Spieler: ${player.choice} vs Computer: ${computerChoice}`;
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
		addPoints(); // Punkte aktualisieren

		console.log(`Player: ${player.choice} vs Computer: ${computerChoice}`);
		console.log(result);

		k.wait(2.5, () => {
			status.text = "Treffen Sie Ihre Wahl";
			choicesText.text = "";
			canSelect = true;
		});
		if (levelScore >= 3) {
			// Nächstes Level starten
			k.go("Win");
			return;
		}

		if (levelScoreComputer >= 3) {
			k.go("Gameover");
			return;
		}
	}
}
