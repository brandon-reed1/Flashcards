const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  let card1, card2, card3, deck;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', 
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    
    card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 
      'playing with bubble wrap');
    
    deck = new Deck([card1, card2, card3]);
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should store an array of Card objects', () => {
    expect(deck.stack).to.deep.equal([card1, card2, card3]);
  }); 

  it('countCards should return the number of cards in the deck', () => {
    expect(deck.countCards()).to.equal(3);
  }); 

  it('countCards should return the correct number of cards in the deck', () => {
    expect(deck.countCards()).to.deep.equal(3);
    expect(deck.countCards()).to.not.equal(4);
  }); 
});