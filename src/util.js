const inquirer = require('inquirer');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

const genList = (game) => {
  let card = game.currentRound.returnCurrentCard();
  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  });
  return {
    type: 'rawlist',
    message: card.question,
    name: 'answers',
    choices: choices
  };
}

const getRound = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (id, game) => {
  const feedback = game.currentRound.takeTurn(id);
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

async function main(game) {

  const currentRound = await getRound(game);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, game));

    if(!game.currentRound.returnCurrentCard()) {
      determineRestart(game);
    } else {
      main(game);
    }
}

function determineRestart(game) {
  if (game.currentRound.calculatePercentCorrect() < 90) {
    game.currentRound.endRound();
    console.log('You didn\'t make it to 90%. Time to redo the cards you missed.')
    makeDeckFromIDs(game);
  } else {
    game.currentRound.endRound();
    process.exit(1);
  }
}

function makeDeckFromIDs(game) {
  const incorrectStack = prototypeQuestions.reduce((acc, item) => {
    if(game.currentRound.incorrectGuesses.includes(item.id)){
      acc.push(item)
    }
    return acc;
  }, []);
  game.start(incorrectStack);
}

module.exports.main = main;