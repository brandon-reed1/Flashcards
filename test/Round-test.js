const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {

  let card1, card2, card3, deck, round;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', 
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    
    card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 
      'playing with bubble wrap');
    
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should store current deck', () => {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  }); 

  it('currentCard should be the first Card in the Deck at the start of the Round', () => {
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('returnCurrentCard returns the current card being played', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  }); 

  it('takeTurn updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
    expect(round.turns).to.deep.equal(0);
    
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.returnCurrentCard()).to.deep.equal(card2);
    expect(round.turns).to.deep.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([]);

    expect(round.takeTurn('spleen')).to.equal('incorrect!');
    expect(round.returnCurrentCard()).to.deep.equal(card3);
    expect(round.turns).to.deep.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([card2.id]);
  }); 

  it('calculatePercentCorrect returns the percentage of correct guesses', () => {
    expect(round.calculatePercentCorrect()).to.deep.equal(`You haven't made a guess yet!`);
    
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.calculatePercentCorrect()).to.deep.equal(100);

    expect(round.takeTurn('spleen')).to.equal('incorrect!');
    expect(round.calculatePercentCorrect()).to.deep.equal(50);
  }); 

  it('endRound logs stats to the console', () => {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('spleen')).to.equal('incorrect!');
    expect(round.endRound()).to.deep.equal(`There are still cards left in the round!`);

    expect(round.takeTurn('kittens')).to.equal('incorrect!');
    expect(round.endRound()).to.deep.equal(`** Round over! ** You answered 33% of the questions correctly!`);
  }); 
});