  // Function for computer action rock/paper/scissors

  const action = ['rock','paper','scissors'];
  function computerPlay(action) {
      return action[Math.floor(Math.random()*action.length)];
  }
  let compMove;

  // Human input

  let humanMove;

  document.getElementById("rock").addEventListener("click", function() {
    humanMove = "rock";
    roundOnClick();
  });

  document.getElementById("paper").addEventListener("click", function() {
    humanMove = "paper";
    roundOnClick();
  });

  document.getElementById("scissors").addEventListener("click", function() {
    humanMove = "scissors";
    roundOnClick();
  });


  // Function that allows one round of play between human and computer
  // and award one point to the winner of the round
  let compScore = 0;
  let humanScore = 0;
  function playRound(playerSelection, computerSelection) {
      compMove = computerPlay(action);
      console.log(playerSelection);
      console.log(computerSelection);
      console.log(computerPlay(action));
      if (playerSelection === computerSelection) {
          return "You have tied! Try again";
      }
      else if (playerSelection === "rock" && computerSelection === "paper"){
          compScore++;
      return "You Lose! Paper beats Rock!";

      } else if (playerSelection === "paper" && computerSelection === "scissors"){
          compScore++;
          return "You Lose! Scissors beats Paper!";

      } else if (playerSelection === "scissors" && computerSelection === "rock") {
          compScore++;
          return "You Lose! Rock beats Scissors!";
      } else {
          humanScore++;
          return "You Win!";
      }
          
  
  }
  let displayedHumanScore = 0;
  let displayedCompScore = 0;

function roundOnClickTrue() {
    playRound(humanMove, compMove);
    displayedHumanScore = humanScore;
    displayedCompScore = compScore;
}

function gameOver() {
    console.log('Game over');
}


function roundOnClick() {
    if (displayedHumanScore >= 5 || displayedCompScore >= 5) {
       return gameOver();
        } else {
       return roundOnClickTrue();
    }}

// DOM Elements

const scoreContainer = document.querySelector("#scoreContainer");
const humanScoreBox = document.querySelector("#humanScore");
const compScoreBox = document.querySelector("#compScore");

scoreContainer.appendChild(humanScoreBox);
scoreContainer.appendChild(compScoreBox);

function scoreOnPage 
humanScoreBox.innerHTML = displayedHumanScore;