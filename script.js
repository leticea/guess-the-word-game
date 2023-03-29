const inputs = document.querySelector(".word"),
  hintTag = document.querySelector(".hint span"),
  guessLeft = document.querySelector(".guess span"),
  mistakes = document.querySelector(".wrong span"),
  resetBtn = document.querySelector(".reset"),
  hintBtn = document.querySelector(".show-hint"),
  hintElement = document.querySelector(".hint"),
  typeInput = document.querySelector(".type-input");

// Initializing game variables
let word, incorrectLetters = [], correctLetters = [], maxGuesses;

// Select random word from word list and set up game
function startNewGame() {
  alert("New Game Started! Guess New Word :)");
  // Hide hint element
  hintElement.style.display = "none";
  hintElement.style.opacity = "0";

  // Choose random word from db and setup game
  
}