class Turn {
  constructor(guess, thisCard) {
    this.guess = guess;
    this.card = thisCard;
  }
  returnGuess() {
    return this.guess
  }
  returnCard() {
    return this.card
  }
  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true
    } else {
      return false
    }
  }
  giveFeedback(boolean) {
    if (boolean) {
      return `correct!`
    } else {
      return `incorrect!`
    }
  }
}

module.exports = Turn;