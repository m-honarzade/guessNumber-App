"use strict";
const randNum = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = randNum();
let score = 20;
let highScore = 0;

const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

document.querySelector(".check").addEventListener("click", function () {
  let guessNumber = Number(document.querySelector(".guess").value);
  // EMPTY GUESS (NO GUESS)
  if (!guessNumber) {
    displayMessage("⛔ No Number");
  } // CORRECT NUMBER
  else if (guessNumber === secretNumber) {
    displayMessage("🎉 Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } // WRONG NUMBER
  else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(guessNumber < secretNumber ? "📈 Too Low" : "📉 Too High");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      score = 0;
      document.querySelector(".score").textContent = score;
      displayMessage("💣 You Lose!");
    }
  }
});
//  RESET GAME
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = randNum();
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start Guessing....";
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").textContent = "?";
});
