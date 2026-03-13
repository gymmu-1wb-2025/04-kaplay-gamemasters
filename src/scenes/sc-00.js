import k from "../main";

export default function sc00() {
	k.add([k.text("Enter to start"), k.pos(320, 240), k.anchor("center")]);
	k.onKeyPress("enter", () => {
		k.go("sc-01");
	});
}
