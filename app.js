let randomNumber = Math.floor(Math.random() * 100) + 1;
const guess = document.querySelector('.guess');
const finalResult = document.querySelector('.finalResult');
const rating = document.querySelector('.rating');
const submit = document.querySelector('.submit');
const field = document.querySelector('.field');
let guessCount = 1;
let resetButton;


function checkGuess() {
  let userGuess = Number(field.value);
  if (guessCount === 1) {
    guess.textContent = "Previous guess: ";
  }
  guess.textContent += userGuess + "," + " ";

  if (userGuess === randomNumber) {
    finalResult.textContent = "Congratulations, you are a genius!"
    rating.textContent = "";
    guess.textContent = "";
    setGameover1();
  } else if (guessCount === 10) {
    finalResult.textContent = "Oh no! You are better thah this!"
    guess.textContent = "";
    setGameover();
  } else {

    if (userGuess < randomNumber) {
      rating.textContent = "Too low!";
    } else if (userGuess > randomNumber) {
      rating.textContent = "Too high!";
    }

  }

  guessCount++;
  field.value = "";
  field.focus();

}

submit.addEventListener("click", checkGuess);

function setGameover() {
  field.disabled = true;
  submit.disabled = true;
  rating.textContent = "";
  const resetParas = document.querySelector('.result p');
  resetButton = document.createElement("button");
  resetButton.textContent = "Try again!";
  resetParas.appendChild(resetButton);
  resetButton.classList.add("reset-class");
  resetButton.addEventListener("click", resetGame);
}

function setGameover1() {
  field.disabled = true;
  submit.disabled = true;
  rating.textContent = "";
  const resetParas = document.querySelector('.result p');
  resetButton = document.createElement("button");
  resetButton.textContent = "Play again!";
  resetParas.appendChild(resetButton);
  resetButton.classList.add("reset-class");
  resetButton.addEventListener("click", resetGame);
}


function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelector('.result p');

  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);

  field.disabled = false;
  submit.disabled = false;
  field.value = "";
  finalResult.textContent = ""
  field.focus();
  randomNumber = Math.floor(Math.random() * 100) + 1;
}