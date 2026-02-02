import { runGame } from './index.js'

const rule = 'What is the result of the expression?'

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const limit = {
  min: 0,
  max: 100,
}

const operator = {
  plus: '+',
  minus: '-',
  prod: '*',
}

const calculateExpr = (firstNum, secondNum, oper) => {
  switch (oper) {
    case operator.plus:
      return firstNum + secondNum
    case operator.minus:
      return firstNum - secondNum
    case operator.prod:
      return firstNum * secondNum
    default:
      return `Unknown '${oper}'!`
  }
}

const getQuestionAndAnswer = () => {
  const randA = getRandomNum(limit.min, limit.max)
  const randB = getRandomNum(limit.min, limit.max)
  const randOper = Object.values(operator)[getRandomNum(0, Object.keys(operator).length - 1)]

  const question = `${randA} ${randOper} ${randB}`
  const value = calculateExpr(randA, randB, randOper)
  const answer = String(value)

  return { question, answer }
}

const startCalcGame = () => runGame(rule, getQuestionAndAnswer)

export default startCalcGame
