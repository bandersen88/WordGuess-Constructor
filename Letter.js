
module.exports = class Letter {
    constructor(letter) {
        this.letter = letter;
        this.guessed = false;
    }

    check(letter) {
        if(!this.guessed) {
            if(letter.toLowerCase() === this.letter.toLowerCase()) {
                this.guessed = true;
            } 
        }
    }

    getGuessedLetter(){
        if(this.guessed){
            return this.letter;
        } else {
            return "_ ";
        }
    }
}
