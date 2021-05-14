const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor(thisRound) {
    this.currentRound = thisRound;
  }
  start(cards) {
    const stack = [];
    cards.forEach(card => stack.push(card));
    const deck = new Deck(stack);
    const round = new Round(deck);
    const game = new Game(round);
    this.printMessage(deck);
    this.printQuestion(game);
  }
  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }
  printQuestion(game) {
    util.main(game);
  }
}

module.exports = Game;