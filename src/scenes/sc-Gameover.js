import k from "../main";
export default function scEnde() {
	k.add([k.text("Game Over"), k.pos(320, 240), k.anchor("center")]);
    k.add([k.text("Restart Press Enter"), k.pos(320, 230), k.anchor("center")])
	k.onKeyPress("enter", () => {
		k.go("sc00");
	});
}
const k = kaplay({
	height: 480,
	width: 640,
	canvas: document.getElementById("game-canvas"),
	background: "#ff0000",
	global: false,
	debug: true,
	debugKey: "r",
});