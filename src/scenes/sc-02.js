import camCenter from "../components/camCenter";
import controller from "../components/controller";
import k from "../main";

export default function sc01() {

	let /** @type {GameObj} */ player = {
        choice: ""
    };
	let computerChoice = null;
	let result = null;

	k.onKeyPress("1", () => {
		player.choice = "feuer";
		playGame();
	});

	k.onKeyPress("2", () => {
		player.choice = "wasser";
		playGame();
	});

	k.onKeyPress("3", () => {
		player.choice = "erde";
		playGame();
	});

    k.onKeyPress("4", () => {
        player.choice = "luft";
        playGame();
    });

    k.onKeyPress("5", () => {
        player.choice = "blitz";
        playGame();
    });

}

const status = k.add([k.text(`Treffen Sie Ihre Wahl`), k.pos(320, 240), k.anchor("center")]);
function checkPlayerWins(playerChoice, computerChoice) {
return player.choice === "feuer" && computerChoice === "erde" ||
		(player.choice === "feuer" && computerChoice === "luft") ||
		(player.choice === "wasser" && computerChoice === "feuer") ||
		(player.choice === "wasser" && computerChoice === "blitz") ||
		(player.choice === "erde" && computerChoice === "wasser") ||
		(player.choice === "erde" && computerChoice === "blitz") ||
        (player.choice === "luft" && computerChoice === "erde") ||
        (player.choice === "luft" && computerChoice === "wasser") ||
        (player.choice === "blitz" && computerChoice === "feuer") ||
        (player.choice === "blitz" && computerChoice === "luft")
}

function playGame() {
	computerChoice = choose(["feuer", "wasser", "erde", "luft", "blitz"]);
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
	console.log(`Player: ${player.choice} vs Computer: ${computerChoice}`);
	console.log(result);
    k.wait(1, () => {
        status.text = "Treffen Sie Ihre Wahl";
        canSelect = true;
    });

}
