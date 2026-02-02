import { runGame } from './index.js'

const rule = 'Answer "yes" if the number is even, otherwise answer "no".'

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const limit = {
  min: 0,
  max: 100,
}

const isEven = num => num % 2 === 0

const getQuestionAndAnswer = () => {
  const randNum = getRandomNum(limit.min, limit.max)
  const question = randNum.toString()
  const answer = isEven(randNum) ? 'yes' : 'no'

  return { question, answer }
}

const startEvenGame = () => runGame(rule, getQuestionAndAnswer)

export default startEvenGame
