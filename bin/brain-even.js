#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/utils.js'; // Предполагается, что у вас есть функция для генерации случайных чисел

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundsCount = 3;

const isEven = (number) => number % 2 === 0;

const brainEvenGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(gameDescription);

    for (let i = 0; i < roundsCount; i++) {
        const question = getRandomInt(1, 100); // Генерируем случайное число от 1 до 100
        const correctAnswer = isEven(question) ? 'yes' : 'no';

        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }

        console.log('Correct!');
    }

    console.log(`Congratulations, ${userName}!`);
};

brainEvenGame();