const chai = require('chai');
const expect = chai.expect;
const asserttype = require('chai-asserttype');
chai.use(asserttype);

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  let card, turn
  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', 
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    
    turn = new Turn('sea otter', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a user\'s guess', () => {
    expect(turn.guess).to.equal('sea otter');
  });  

  it('should store the current Card in play', () => {
    expect(turn.card).to.equal(card);
  });  

  it('returnGuess should be a method that returns the user\'s guess', () => {
    expect(turn.returnGuess()).to.equal('sea otter');
  });  

  it('returnCard should be a method that returns the current card', () => {
    expect(turn.returnCard()).to.equal(card);
  });  

  it('evaluateGuess returns true if the user\'s guess is the correct answer', () => {
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn.evaluateGuess()).to.be.boolean();
  });  

  it('evaluateGuess returns false if the user\'s guess is not the correct answer', () => {
    const turn2 = new Turn('kittens', card);
    expect(turn2.evaluateGuess()).to.not.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.be.boolean();
  });  

  it('giveFeedback returns a string if there\'s a correct answer', () => {
    turn.evaluateGuess();
    expect(turn.giveFeedback(true)).to.equal('correct!');
    expect(turn.giveFeedback(false)).to.not.equal('correct!');
  });  

  it('giveFeedback returns a string if there\'s an incorrect answer', () => {
    const turn2 = new Turn('kittens', card);
    turn2.evaluateGuess();
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });  
});