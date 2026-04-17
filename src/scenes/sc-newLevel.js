import k from "../main";
export default function newLevel() {
	k.add([k.text("Next Level!",{size: 60}), k.pos(320, 240), k.anchor("center")]);
    k.add([k.text("To Continue Press Enter",{ size: 24 }), k.pos(320, 300), k.anchor("center")])
	k.onKeyPress("enter", () => {
		k.go("lvl-02");
	});
}