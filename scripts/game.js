const keyboardDiv = document.querySelector(".letters");
const wordDisplay = document.getElementById('answer-section');
const hangmanContainer = document.querySelector(".hang"); 
let currentWord = ""; 
let guessedLetters = []; 
let wrongGuessCount = 0;
const maxGuess = 6;

// Hangman images array with there classes to be able to add them right with there style
const hangmanImages = [
  { src: "assets/head.svg", class: "head" },
  { src: "assets/body.svg", class: "body" },
  { src: "assets/left-hand.svg", class: "left-hand" },
  { src: "assets/right-hand.svg", class: "right-hand" },
  { src: "assets/left-leg.svg", class: "left-leg" },
  { src: "assets/right-leg.svg", class: "right-leg" },
  { src: "assets/hang.svg", class: "stand" } 
];

// This function used to create the hangman new Image when losing it will create a new Div Element
function createHangmanImageDiv(image) {
  const newDiv = document.createElement("div");
  newDiv.className = image.class; 

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = "Hangman Stage";
  
  newDiv.appendChild(img); 
  return newDiv; 
}

function getRandomWord() {
  const wordList = [
    "javascript", "programming", "hangman", "challenge", "function", 
    "variable", "array", "object", "developer", "frontend", 
    "backend", "algorithm", "debugging", "computer", "internet", 
    "syntax", "browser", "stylesheet", "document", "element"
  ];

  currentWord = wordList[Math.floor(Math.random() * wordList.length)];
  console.log(currentWord);

  wordDisplay.innerHTML = currentWord.split("").map(() => `<span>_</span>`).join(" ");
}

function initGame(clickedLetter) {
  if (currentWord.includes(clickedLetter)) {
    console.log(clickedLetter, "exists in the word");

    guessedLetters.push(clickedLetter);

    const updatedDisplay = currentWord.split("").map(letter => {
      return guessedLetters.includes(letter) ? letter : "_";
    }).join(" ");

    wordDisplay.innerHTML = updatedDisplay; 
  } else {
    wrongGuessCount++;
    if (wrongGuessCount <= maxGuess) {
      const hangmanImageDiv = createHangmanImageDiv(hangmanImages[wrongGuessCount - 1]);
      hangmanContainer.appendChild(hangmanImageDiv);
    }
    if (wrongGuessCount === maxGuess) {
      console.log("Game Over! The word was:", currentWord);
    }
  }
}


// I used this function to handle letter clicks and detect what letter I am clicking
function handleLetterClick(event) {
  const clickedLetter = event.target.textContent.toLowerCase(); 
  console.log(`You clicked on letter: ${clickedLetter}`);
  
  if (!guessedLetters.includes(clickedLetter)) {
    initGame(clickedLetter); 
  } else {
    console.log(`You have already guessed the letter: ${clickedLetter}`);
  }
}

const letterDivs = document.querySelectorAll(".letter");
letterDivs.forEach(letterDiv => {
  letterDiv.addEventListener("click", handleLetterClick);
});


getRandomWord();