scene("game", (levelNumber) => {
    let levelScore = 0;

    // Punkte-Anzeige
    add([
        text(() => `Level ${levelNumber} - Punkte: ${levelScore}/3`),
        pos(12, 12),
    ]);

    // Funktion zum Erhöhen der Punkte
    function addPoint() {
        levelScore++;

        if (levelScore >= 3) {
            // Nächstes Level starten
            go("game", levelNumber + 1);
        }
    }


});

// Spiel mit Level 1 starten
go("game", 1);
