import k from "../main";
export default function scEnde() {
	k.add([k.text("Game Over"), k.pos(320, 240), k.anchor("center")]);
    k.add([k.text("Restart Press Enter"), k.pos(320, 230), k.anchor("center")])
	k.onKeyPress("enter", () => {
		k.go("sc00");
	});
}
