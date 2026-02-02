import { runGame } from './index.js'

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const limit = {
  min: 0,
  max: 1000,
}

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false
  }
  return num > 1
}

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(limit.min, limit.max)
  const answer = isPrime(question) ? 'yes' : 'no'

  return { question, answer }
}

const startPrimeGame = () => runGame(rule, getQuestionAndAnswer)

export default startPrimeGame
