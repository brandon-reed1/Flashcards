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
    cards.forEach(card => stack.push(card));
    const deck = new Deck(stack);
    const round = new Round(deck);
    const game = new Game(round);
    this.printMessage(deck)
    // this.printQuestion(round)
    this.printQuestion(game)
  }
  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
//   printQuestion(round) {
//     util.main(round);
// }
  printQuestion(game) {
      util.main(game);
  }
  // makeDeckFromIDs(game) {
  //   const incorrectStack = game.currentRound.deck.reduce((acc, item) => {
  //     if(game.currentRound.incorrectGuesses.includes(item.id)){
  //       acc.push(item)
  //     }
  //     return acc;
  //   }, [])
  //   game.start(incorrectStack)
  // }
}

module.exports = Game;