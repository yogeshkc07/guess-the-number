const guess = Number((document.querySelector(".guess").value = 55));
console.log(guess);
const text = document.querySelector(".text");
console.log(text);

const check = document.querySelector(".check");

check.addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  if (!guess) {
    text.textContent = "⛔ No input";
  }
});
