const countElem = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");

let count = Number(localStorage.getItem("count")) || 0;
countElem.textContent = count;

plusBtn.addEventListener("click", () => {
  count++;
  update();
});

minusBtn.addEventListener("click", () => {
  count--;
  update();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  update();
});

function update() {
  countElem.textContent = count;
  localStorage.setItem("count", count);
}