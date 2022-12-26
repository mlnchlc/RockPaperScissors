function getComputerChoice() {
  let ch = Math.floor(Math.random() * 3);
  return choices[ch];
}

function playRound(e) {
  userChoice = e.target.textContent;
  computerChoice = getComputerChoice();
  if (userChoice === "Rock" && computerChoice === "Scissors" ||
    userChoice == "Paper" && computerChoice === "Rock" ||
    userChoice === "Scissors" && computerChoice === "Paper")
    wins++;
  else if (userChoice === computerChoice ||
    userChoice === computerChoice ||
    userChoice === computerChoice)
    draws++
  else
    losses++;

  userMoveDiv.innerText = `User played ${userChoice}`;
  pcMoveDiv.innerText = `Computer player ${computerChoice}`;
  winDiv.innerText = `wins = ${wins} losses = ${losses} draws = ${draws}`;
  console.log(winDiv.innerText);
}

let wins = 0, losses = 0, draws = 0;
const choices = ["Rock", "Paper", "Scissors"];
let winDiv = document.querySelector(".win-counter");
let userMoveDiv = document.querySelector(".user-move");
let pcMoveDiv = document.querySelector(".pc-move");

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);