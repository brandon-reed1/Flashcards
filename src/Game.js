const util = require('./util');

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor(thisRound) {
    this.currentRound = thisRound;
  }
  start(cards) {
    const stack = []
    cards.forEach(element => stack.push(element));
    const deck = new Deck(stack);
    const round = new Round(deck);
    const game = new Game(round);
    this.printMessage(deck)
    this.printQuestion(round)
    // this.printQuestion(game)
  }
  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
    util.main(round);
}
  // printQuestion(game) {
  //     util.main(game);
  // }
  // makeDeckFromIDs(game) {
  //   const incorrectStack = []
  //   game.currentRound.incorrectGuesses.forEach(guess =>
  //     game.currentRound.deck.stack.forEach(card =>
  //       if (card.id.includes(guess)) {
  //         incorrectStack.push(game.currentRound.deck.stack.card)
  //       }
  //     );
  //   );
  // }
}

module.exports = Game;