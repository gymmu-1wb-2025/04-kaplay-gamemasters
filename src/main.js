import kaplay from "kaplay";
import sc00 from "./scenes/sc-00";
import sc01 from "./scenes/sc-01";
import sc02 from "./scenes/sc-02";
import gameover from "./scenes/sc-Gameover"
import win from "./scenes/sc-win"
import newLevel from "./scenes/sc-newLevel"

const k = kaplay({
	height: 480,
	width: 640,
	canvas: document.getElementById("game-canvas"),
	background: "#4f7474",
	global: false,
	debug: true,
	debugKey: "r",
});

k.scene("init", sc00);
k.scene("lvl-01", sc01);
k.scene("Gameover", gameover)
k.scene("lvl-02", sc02)
k.scene("Win", win)
k.scene("newLevel", newLevel)

k.go("init");

export default k;
