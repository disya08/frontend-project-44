import { runGame } from './index.js';
import generateRandomNumber from './helps.js';

const rule = 'What number is missing in the progression?';

const minLength = 5;
const maxLength = 10;
const minRange = 1;
const maxRange = 100;
const minStep = 1;
const maxStep = 10;

const getProgression = (start, step, length, hiddenIndex) => {
  const progression = Array(length).fill(0).map((_, i) => start + (step * i));
  progression[hiddenIndex] = '..';
  return progression.join(' ');
};

const getQuestionAndAnswer = () => {
  const startNumber = generateRandomNumber(minRange, maxRange);
  const step = generateRandomNumber(minStep, maxStep);
  const length = generateRandomNumber(minLength, maxLength);
  const hiddenIndex = generateRandomNumber(2, length - 1);

  const question = getProgression(startNumber, step, length, hiddenIndex);
  const answer = (startNumber + step * hiddenIndex).toString();

  return { question, answer };
};

const startProgressionGame = () => runGame(rule, getQuestionAndAnswer);

export default startProgressionGame;