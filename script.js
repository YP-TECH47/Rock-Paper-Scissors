let userScore = 0;
let compScore = 0;
let choises = document.querySelectorAll(".choise");
let usr_rslt = document.getElementById("user-result");
let comp_rslt = document.querySelector("#comp-result");
let game_result = document.querySelector(".result-dec");

const showWinner = (userWin, userChoise, compChoise) => {
  if (userWin) {
    userScore++;
    usr_rslt.innerText = userScore;
    game_result.style.backgroundColor = "green";
    game_result.innerHTML = `You Won !!,${userChoise} Beats ${compChoise}`;
  } else {
    compScore++;
    comp_rslt.innerText = compScore;
    game_result.style.backgroundColor = "red";
    game_result.innerHTML = `You Lost !!,${compChoise} Beats ${userChoise}`;
  }
};
const getCompchoise = () => {
  let values = ["paper", "scissors", "rock"];
  let ranIndex = Math.floor(Math.random() * 3);
  return values[ranIndex];
};

function drawGame() {
  game_result.innerHTML = "The Game Was A Draw";
  game_result.style.backgroundColor = "black";
}
const playgame = (userChoise) => {
  let compChoise = getCompchoise();

  if (userChoise === compChoise) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoise === "scissors") {
      userWin = compChoise === "rock" ? false : true;
    } else if (userChoise === "paper") {
      userWin = compChoise === "scissors" ? false : true;
    } else {
      userWin = compChoise === "paper" ? false : true;
    }

    showWinner(userWin, userChoise, compChoise);
  }
};

choises.forEach((choise) => {
  choise.addEventListener("click", () => {
    let userChoise = choise.getAttribute("id");
    playgame(userChoise);
  });
});
