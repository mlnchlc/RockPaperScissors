function getUserChoice() {
  let uc = prompt("enter rock, paper or scissors").toLowerCase();
  if (uc === "rock" || uc === "paper" || uc === "scissors")
    return uc;
  else {
    alert("wrong input");
    return getUserChoice();
  }
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let ch = Math.floor(Math.random() * 3);
  return choices[ch];
}

function playRound(userChoice, computerChoice) {
  if (userChoice == "rock" && computerChoice == "scissors" ||
    userChoice == "paper" && computerChoice == "rock" ||
    userChoice == "scissors" && computerChoice == "paper")
    return 1;
  else if (userChoice === computerChoice ||
    userChoice === computerChoice ||
    userChoice === computerChoice)
    return 0;
  else
    return -1;
}

for (let i = 0; i < 5; i++) {
  let roundRes = playRound(getUserChoice(), getComputerChoice());
  if (roundRes === 1)
    console.log("you win!")
  else if (roundRes === -1)
    console.log("you lose");
  else
    console.log("it's a tie");
}