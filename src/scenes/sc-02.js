import camCenter from "../components/camCenter";
import controller from "../components/controller";
import k from "../main";

export default function sc02() {

	let /** @type {GameObj} */ player = {
        choice: ""
    };
	let computerChoice = null;
	let result = null;

	let canSelect = true; // Sperre Variable

	k.onClick("b1", () => {
		if (!canSelect) return; // KI erstellt: Prompt in Scene 1.
		player.choice = "Feuer";
		playGame();
	});

	k.onClick("b2", () => {
		if (!canSelect) return;
		player.choice = "Wasser";
		playGame();
	});

	k.onClick("b3", () => {
		if (!canSelect) return;
		player.choice = "Erde";
		playGame();
	});

    k.onClick("b4", () => {
		if (!canSelect) return;
        player.choice = "Luft";
        playGame();
    });

    k.onClick("b5", () => {
		if (!canSelect) return;
        player.choice = "Blitz";
        playGame();
    });


	const status = k.add([k.text(`Treffen Sie Ihre Wahl`), k.pos(320, 240), k.anchor("center")]);

	const fireButton = k.add([
		k.text("Feuer"),
		k.area(),
		k.pos(75, 400),
		k.color(k.rgb(255, 255, 255)),
		k.anchor("center"),
		k.outline(5, k.WHITE),
		"b1",
		"button",
	]);

	const waterButton = k.add([
		k.text("Wasser"),
		k.area(),
		k.pos(200, 400),
		k.color(k.rgb(255, 255, 255)),
		k.anchor("center"),
		k.outline(5, k.WHITE),
		"b2",
		"button",
	]);

	const earthButton = k.add([
		k.text("Erde"),
		k.area(),
		k.pos(325, 400),
		k.color(k.rgb(255, 255, 255)),
		k.anchor("center"),
		k.outline(5, k.WHITE),
		"b3",
		"button",
	]);

	const airButton = k.add([
		k.text("Luft"),
		k.area(),
		k.pos(450, 400),
		k.color(k.rgb(255, 255, 255)),
		k.anchor("center"),
		k.outline(5, k.WHITE),
		"b4",
		"button",
	]);

	const lightningButton = k.add([
        k.text("Blitz"),
        k.area(),
        k.pos(575, 400),
		k.color(k.rgb(255, 255, 255)),
        k.anchor("center"),
        k.outline(5, k.WHITE),
        "b5",
        "button",
    ]);

	k.get("button").forEach(btn => {
    btn.onHoverUpdate(() => {
        btn.color = k.rgb(100, 200, 255); //  Ki erstellt: Prompt in Scene 1
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

    // zum Teil mi Ki erstellt: Promt in Scene 1,
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

	scoreDisplay.text = `${levelScore} : ${levelScoreComputer}`;
}

function checkPlayerWins(playerChoice, computerChoice) {
return player.choice === "Feuer" && computerChoice === "Erde" ||
		(player.choice === "Feuer" && computerChoice === "Luft") ||
		(player.choice === "Wasser" && computerChoice === "Feuer") ||
		(player.choice === "Wasser" && computerChoice === "Blitz") ||
		(player.choice === "Erde" && computerChoice === "Wasser") ||
		(player.choice === "Erde" && computerChoice === "Blitz") ||
        (player.choice === "Luft" && computerChoice === "Erde") ||
        (player.choice === "Luft" && computerChoice === "Wasser") ||
        (player.choice === "Blitz" && computerChoice === "Feuer") ||
        (player.choice === "Blitz" && computerChoice === "Luft")
}

function playGame() {
	canSelect = false;

	k.get("button").forEach(btn => {
		btn.hidden = true
	}); //Ki erstellt: Prompt in Scene 1.

	let computerChoice = k. choose(["Feuer", "Wasser", "Erde", "Luft", "Blitz"]);

	choicesText.text = `Spieler: ${player.choice} vs Computer: ${computerChoice}`;
	if (player.choice === computerChoice) {
		result = "Unentschieden!";
        status.text = "Unentschieden!"
	} else if (checkPlayerWins(player.choice, computerChoice)) {
		result = "Du hast gewonnen!";
        status.text = "Du hast gewonnen!"
	} else {
		result = "Du hast verloren!";
        status.text = "Du hast verloren!"
	}
	addPoints();

	console.log(`Player: ${player.choice} vs Computer: ${computerChoice}`);
	console.log(result);

    k.wait(2.5, () => {
        status.text = "Treffen Sie Ihre Wahl";
		choicesText.text = "";
        canSelect = true; //Ki erstellt: Prompt in Scene 1
		k.get("button").forEach(btn => btn.hidden = false); //Ki erstellt: Prompt in Scene 1,
    });
	if (levelScore >= 3) {
            k.go("Win");
			return;
        }

		if(levelScoreComputer >= 3) {
			k.go("Gameover")
			return;
		}

}
}
