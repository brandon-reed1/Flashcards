class Deck {
  constructor(cards) {
    this.stack = cards;
  }
  countCards() {
    return this.stack.length;
  }
}

module.exports = Deck;