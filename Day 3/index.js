import { films } from "/data.js";

// Game State
let availableFilms = [...films];
let currentFilm = null;
let remainingGuesses = 3;

// Useful elements
const guessInput = document.getElementById("guess-input");
const messageContainer =
  document.getElementsByClassName("message-container")[0];
const emojiCluesContainer = document.getElementsByClassName(
  "emoji-clues-container"
)[0];
const submitButton = document.getElementById("submit-button");

// Helper: Pick a random film
function pickRandomFilm() {
  if (availableFilms.length === 0) {
    showMessage("That's all folks!");
    disableGame();
    return;
  }
  const randomIndex = Math.floor(Math.random() * availableFilms.length);
  currentFilm = availableFilms.splice(randomIndex, 1)[0];
  displayClues(currentFilm.emoji);
}

// Display emoji clues
function displayClues(emoji) {
  emojiCluesContainer.innerHTML = emoji.join(" ");
}

// Show messages to the player
function showMessage(message) {
  messageContainer.textContent = message;
}

// Disable form during pauses or when the game ends
function disableGame(disabled = true) {
  guessInput.disabled = disabled;
  submitButton.disabled = disabled;
}

// Reset guesses and pick the next film
function resetGame() {
  remainingGuesses = 3;
  pickRandomFilm();
  disableGame(false);
}

// Check similarity between two strings
function isSimilar(answer, correctAnswer) {
  const normalize = (str) => str.toLowerCase().trim();
  return normalize(answer) === normalize(correctAnswer);
}

// Handle the player's guess
function handleGuess() {
  const playerGuess = guessInput.value;
  guessInput.value = ""; // Clear input
  if (!playerGuess.trim()) return;

  if (isSimilar(playerGuess, currentFilm.name)) {
    showMessage("Correct!");
    disableGame();
    setTimeout(resetGame, 3000);
  } else {
    remainingGuesses--;
    if (remainingGuesses > 0) {
      showMessage(
        `Incorrect! You have ${remainingGuesses} more guesses remaining.`
      );
    } else {
      showMessage(`The film was "${currentFilm.name}"!`);
      disableGame();
      setTimeout(resetGame, 3000);
    }
  }
}

// Event Listener
submitButton.addEventListener("click", handleGuess);

// Initialize the Game
pickRandomFilm();
