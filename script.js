const check = document.querySelector(".check");
const again = document.querySelector(".again");
let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = "?";

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ NO input";
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "🏆 You win";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "25rem";
    document.querySelector(".guess").value = "";

    if (score > highscore) {
      highscore = score;

      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess != secretNumber && score > 1) {
    if (guess > secretNumber) {
      score--;
      document.querySelector(".message").textContent = "📈 Guess too high";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "📉 Guess too low";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "💥 Game Over";
    document.querySelector(".score").textContent = 0;
  }
});
again.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".message").textContent = "Start guessing ...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
