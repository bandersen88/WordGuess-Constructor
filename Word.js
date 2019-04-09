const Letter = require("./Letter"); 

module.exports =  class Word {

    constructor(newWord) {
        this.letters = [];
        for(var i =0; i < newWord.length; i++){
            var object = new Letter(newWord.charAt(i));
            this.letters.push(object)
        }
        this.guessed = false;
    }

    checkGuess(letter) {
        this.letters.forEach(function(element) {
            element.check(letter)
        })
    }

    isGuessed() {
        let self = this;
        this.guessed = true;
        for(let letter of this.letters) {
            if(!letter.guessed){
                this.guessed = false;
            }
        }
        if(this.guessed){
            return true;
        } else {
            return false;
        }
    }

    display() {
        let displayWord = "";
        this.letters.forEach(function(element){
            displayWord += element.getGuessedLetter();
        })
        console.log(displayWord);

    }
}
