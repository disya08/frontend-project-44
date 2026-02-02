import { runGame } from './index.js';
import generateRandomNumber from './helps.js';

const rule = 'Find the greatest common divisor of given numbers.';

const min = 1;
const max = 50;

const getGCD = (num1, num2) => (num2 === 0 ? num1 : getGCD(num2, num1 % num2));

const getQuestionAndAnswer = () => {
  const number1 = generateRandomNumber(min, max);
  const number2 = generateRandomNumber(min, max);

  const question = `${number1} ${number2}`;
  const answer = getGCD(number1, number2).toString();

  return { question, answer };
};

const startGcdGame = () => runGame(rule, getQuestionAndAnswer);

export default startGcdGame;
