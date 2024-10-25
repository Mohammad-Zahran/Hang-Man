

const wordList = [
    "javascript", "programming", "hangman", "challenge", "function", 
    "variable", "array", "object", "developer", "frontend", 
    "backend", "algorithm", "debugging", "computer", "internet", 
    "syntax", "browser", "stylesheet", "document", "element"
  ];

  const getRandomWord = () => {
    const word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word)
}

getRandomWord();

  
  let winCount = 0;
  let count = 0;

  let chosenWord = ""

  