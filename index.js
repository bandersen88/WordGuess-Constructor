const inquirer = require('inquirer');
const Word = require('./Word');

let wordStore = ["Alligator", "Rhinoceros","Elephant","Orangutan","Giraffe","Jellyfish","Spider","Racoon","Panda","Paltypus"];
let randomWord = wordStore[getRandomInt(10)];
let word = new Word(randomWord);

console.log("Your word to guess is: ");
word.display();

guessLoop();

function guessLoop() {
    inquirer
    .prompt([
        {
            type: "input",
            messsage: "Guess a Letter",
            name: "letter"
        }
    ])
    .then(function(res) {
        let guess = res.letter.charAt(0);

        console.log("You guessed: " + guess);
        word.checkGuess(guess);
        word.display();
        
        //Recurse through loop until the word is Guessed
        if(!word.isGuessed()){
            guessLoop();
        } else {
            console.log("Congratulations!");
        }

    })
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  } 
