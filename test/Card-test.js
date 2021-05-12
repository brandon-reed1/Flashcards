const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {

  let card
  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  })

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store an id', () => {
    expect(card.id).to.equal(1);
  });  

  it('should store a question', () => {
    expect(card.question).to.equal('What is Robbie\'s favorite animal');
  });  

  it('should store the correct question', () => {
    expect(card.question).to.not.equal('What is Robbie\'s favorite color');
  }); 

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
  });  

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal('sea otter');
  });

  it('should not store an incorrect answer', () => {
    expect(card.correctAnswer).to.not.equal('Jupiter');
  });
});