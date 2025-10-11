const textElem = document.getElementById("text");
const buttonElem = document.getElementById("textchange");

const changeElem = [
	 "ボタンを押して見て"
	 ,"ボタンが押された！"
	 ,"バイバイ!"
];

let current = 0;

function change() {
	current = (current + 1) % changeElem.length;
	textElem.textContent = changeElem[current];
}

buttonElem.addEventListener("click", change);
