import k from "../main";
export default function win() {
	k.add([k.text("You Win!",{size: 60}), k.pos(320, 240), k.anchor("center")]);
    k.add([k.text("Restart Press Enter",{ size: 24 }), k.pos(320, 300), k.anchor("center")])
	k.onKeyPress("enter", () => {
		k.go("init");
	});
}
