const textElem = document.getElementById("text");
const buttonElem = document.getElementById("textchange");

const changeElem = {
	1: "ボタンを押して見て",
	2: "ボタンが押された！"
	3: "バイバイ!"
};

let current = changeElem.1;

function change() {
	current === changeElem.1
	? changeElem.2
	:current === changeElem.2
	? change.Elem.3
	: current.3
}

buttonElem.addEventListener("click", () =>
	


