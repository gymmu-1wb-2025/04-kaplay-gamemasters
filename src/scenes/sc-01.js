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



	k.onClick("b3", () => {
		if (!canSelect) return;// Blockiere wenn gesperrt
		player.choice = "Scissors";
		playGame();

	});

	k.onClick("b2", () => {
		if (!canSelect) return; // Blockiere wenn gesperrt
		player.choice = "Rock";
		playGame();

	});

	k.onClick("b1", () => {
		if (!canSelect) return; // Blockiere wenn gesperrt
		player.choice = "Paper";
		playGame();
	});

	const status = k.add([k.text(`Treffen Sie Ihre Wahl`), k.pos(320, 240), k.anchor("center")])

	const scissorsButton = k.add([
    k.text("Schere"),
    k.area(),
    k.pos(125, 400),
	k.color(k.rgb(255, 255, 255)),
    k.anchor("center"),
    k.outline(5, k.WHITE),
    "b3",
	"button",
	]);

	const paperButton = k.add([
    k.text("Papier"),
    k.area(),
    k.pos(325, 400),
	k.color(k.rgb(255, 255, 255)),
    k.anchor("center"),
    k.outline(5, k.WHITE),
    "b1",
	"button",
	]);
	const rockButton = k.add([
    k.text("Stein"),
    k.area(),
    k.pos(525, 400),
	k.color(k.rgb(255, 255, 255)),
    k.anchor("center"),
    k.outline(5, k.WHITE),
    "b2",
	"button",
	]);

	k.get("button").forEach(btn => {
    btn.onHoverUpdate(() => {
        btn.color = k.rgb(100, 200, 255); // Hellblau beim Hovern
    });

    btn.onHoverEnd(() => {
        btn.color = k.rgb(255, 255, 255); // Zurück zu Weiß
    });
});


	const choicesText = k.add([
    k.text("",{ size: 24 }),
    k.pos(320, 300),
    k.anchor("center")]);

	 let levelScore = 0;
	let levelScoreComputer= 0;

    // Punkte-Anzeige
    const scoreDisplay = k.add([
        k.text( `${levelScore} : ${levelScoreComputer}`),
        k.pos(320, 35),
		k.anchor("center"),
    ]);



function addPoints() {
	if (result === "Du hast gewonnen!") {
		levelScore++;
	} else if (result === "Du hast verloren!") {
		levelScoreComputer++;

	}
	scoreDisplay.text = `${levelScore} : ${levelScoreComputer}`;// Aktualisiere die Punkte-Anzeige
}


function checkPlayerWins(playerChoice, computerChoice) {
	return (playerChoice === "Scissors" && computerChoice === "Paper") ||
		(playerChoice === "Rock" && computerChoice === "Scissors") ||
		(playerChoice === "Paper" && computerChoice === "Rock")
}

function playGame() {
	canSelect = false; // Sperre aktiviert

	k.get("button").forEach(btn => {
		btn.hidden = true
}); // Verstecke die Buttons nach der Auswahl


	let computerChoice = k.choose(["Scissors", "Rock", "Paper"]);

	choicesText.text = `Spieler: ${player.choice} vs Computer: ${computerChoice}`;
	if (player.choice === computerChoice) {
		result = "Unentschieden!";
		status.text = "Unentschieden!";
	} else if (checkPlayerWins(player.choice, computerChoice)) {
		result = "Du hast gewonnen!";
		status.text = "Du hast gewonnen!";

	} else{
		result = "Du hast verloren!";
		status.text = "Du hast verloren!";


	}
	addPoints(); // Punkte aktualisieren

	console.log(`Player: ${player.choice} vs Computer: ${computerChoice}`);
	console.log(result);

	k.wait(2.5, ()=> {
		status.text = "Treffe eine neue Wahl"
		 choicesText.text = ""; // Lösche die Wahlen
		canSelect = true; //Sperre aufheben
		k.get("button").forEach(btn => btn.hidden = false); // Verstecke die Buttons nach der Auswahl

	})
	if (levelScore >= 3) {
		 // Nächstes Level starten
            k.go("newLevel");
			return;
        }

		if(levelScoreComputer >= 3) {
			k.go("Gameover")
			return;
		}
}



};
