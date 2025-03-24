#!/usr/bin/env node

import readlineSync from 'readline-sync';


const gcd = (a, b) => {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
};


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const playGcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i++) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const correctAnswer = gcd(num1, num2);

    const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playGcdGame();