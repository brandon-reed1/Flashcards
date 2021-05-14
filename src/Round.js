const Turn = require('../src/Turn');

class Round {
  constructor(thisDeck) {
    this.deck = thisDeck.stack;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    this.deck.shift();
    this.turns++;
    const turn = new Turn(guess, this.currentCard);
    if (guess === this.currentCard.correctAnswer) {
      this.incorrectGuesses = this.incorrectGuesses.filter(answer => answer !== this.currentCard.id);
      this.currentCard = this.deck[0];
      return turn.giveFeedback(true);
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
      this.currentCard = this.deck[0];
      return turn.giveFeedback(false);
    }
  }
  calculatePercentCorrect() {
    if (!this.turns) {
      return `You haven't made a guess yet!`;
    } else {
      return ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
    }
  }
  endRound() {
    if (this.deck.length) {
      return `There are still cards left in the round!`;
    } else {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect().toFixed(0)}% of the questions correctly!`);
      return `** Round over! ** You answered ${this.calculatePercentCorrect().toFixed(0)}% of the questions correctly!`;
    }
  }
}

module.exports = Round;