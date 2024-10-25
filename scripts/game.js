const keyboardDiv = document.querySelector(".letters"); 

const wordList = [
  "javascript", "programming", "hangman", "challenge", "function", 
  "variable", "array", "object", "developer", "frontend", 
  "backend", "algorithm", "debugging", "computer", "internet", 
  "syntax", "browser", "stylesheet", "document", "element"
];

let currentWord;

let winCount = 0; 
let count = 0; 

// This Function is used to get the random word from word list then initilizing the current word to word
const getRandomWord = () => {
  word = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word
  console.log("Random Word:", word); 
};

// I used this function to test the letters I clicked
const handleLetterClick = (event) => {
  const letter = event.target.innerText; 
  console.log("Letter clicked:", letter); 
  initGame(letter)
};

const letterButtons = document.querySelectorAll(".letter");
letterButtons.forEach(button => {
  button.addEventListener("click", handleLetterClick);
});

const initGame = (letter) => {
    if (currentWord.includes(letter.toLowerCase())) {
      console.log(letter, "exists in the word");
    } else {
      console.log(letter, "does not exist in the word");
    }
}

getRandomWord();
