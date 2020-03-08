  // Function for computer action rock/paper/scissors

  const action = ['rock','paper','scissors'];
  function computerPlay(action) {
      return action[Math.floor(Math.random()*action.length)];
  }
  let compMove = null;

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
    if (humanScore > compScore) {
       return gameOverHuman();
    } else {
       return gameOverComputer();
    }
}


function roundOnClick() {
    if (displayedHumanScore >= 6 || displayedCompScore >= 6) {
       return gameOver();
        } else {
            scoreOnPage()
       return roundOnClickTrue();
    }}

// DOM Elements

const scoreContainer = document.querySelector("#scoreContainer");
const humanScoreBox = document.querySelector("#humanScore");
const compScoreBox = document.querySelector("#compScore");
const compMoveContainer = document.querySelector("#compMoveContainer");
const compMoveBox = document.querySelector("#compMoveBox");
const gameOverContainer = document.querySelector("#gameOverContainer");
const gameOverBox = document.querySelector("#gameOver");

scoreContainer.appendChild(humanScoreBox);
scoreContainer.appendChild(compScoreBox);
compMoveContainer.appendChild(compMoveBox);
gameOverContainer.appendChild(gameOverBox);


function scoreOnPage() {
humanScoreBox.innerHTML = displayedHumanScore;
compScoreBox.innerHTML = displayedCompScore;
compMoveBox.innerHTML = compMove;
}

// click event for reset
document.getElementById("resetGame").addEventListener("click", function() {
    resetGame();
  });


function resetGame() {
    console.log("test");
    humanScore = 0;
    compScore= 0;
    displayedHumanScore = 0;
    displayedCompScore = 0
    compMove = null;
    humanScoreBox.innerHTML = 0;
    compScoreBox.innerHTML = 0;
    compMoveBox.innerHTML = "";
    gameOverBox.innerHTML ="";
}

function gameOverHuman() {
    gameOverBox.innerHTML = "GAME OVER. YOU WIN!"
}

function gameOverComputer(){
    gameOverBox.innerHTML = "GAME OVER. YOU LOSE!"
}

/* document.getElementById("rock").removeEventListener("click", playRound); {
    humanMove = "rock";
};
document.getElementById("paper").removeEventListener("click", playRound); {
        humanMove = "paper";
};
document.getElementById("scissors").removeEventListener("click", playRound); {
    humanMove = "scissors";
}; */