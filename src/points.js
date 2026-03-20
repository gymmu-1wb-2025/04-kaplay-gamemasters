import k from "./main";

k.scene("game", (levelNumber) => {

    let levelScore = 0;

    // Punkte-Anzeige
    k.add([
        k.text(() => `Level ${levelNumber} - Punkte: ${levelScore}/3`),
        k.pos(12, 12),
    ]);

    // Funktion zum Erhöhen der Punkte
    function addPoint() {
        levelScore++;

        if (levelScore >= 3) {
            // Nächstes Level starten
            k.go("game", levelNumber + 1);
        }
    }

});
k.go("game", 1);
