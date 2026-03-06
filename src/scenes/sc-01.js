import camCenter from "../components/camCenter";
import controller from "../components/controller";
import k from "../main";

export default function sc01() {
	k.setGravity(1200);

	const player = k.add([
		k.circle(20),
		k.pos(320, 240),
		k.body(),
		k.area(),
		controller(320),
		camCenter(),
		"player",
	]);

	k.add([
		k.rect(640, 20),
		k.pos(0, 460),
		k.color(k.GREEN),
		k.body({ isStatic: true }),
		k.area(),
		"world",
	]);

	player.onKeyPress("space", () => {
		player.jump();
	});

	player.onCollide("world", () => {
		player.color = k.RED;
	});

	player.onCollideEnd("world", (obj) => {
		player.color = k.WHITE;
	});
}



const levels = {
    1: { options: ["schere", "stein", "papier"], title: "Alle Optionen" },
    2: { options: ["schere", "stein"], title: "Nur Schere & Stein" },
    3: { options: ["stein"], title: "Nur Stein!" }
};

scene("game", ({ level = 1 }) => {
    const config = levels[level];
    const computerOptions = ["schere", "stein", "papier"];

    add([
        text(`Level ${level}: ${config.title}`),
        pos(width() / 2, 50),
        anchor("center")
    ]);

    // Erstelle Buttons für verfügbare Optionen
    config.options.forEach((option, i) => {
        add([
            text(option),
            pos(width() / 2 - (config.options.length * 75) + i * 150, 200),
            anchor("center"),
            area(),
            "choice",
            { value: option }
        ]);
    });

    onClick("choice", (choice) => {
        const computerChoice = choose(computerOptions);
        // Prüfe Gewinner und wechsle ggf. Level
        if (checkWin(choice.value, computerChoice)) {
            go("game", { level: level + 1 });
        }
    });
});
