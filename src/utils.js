export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  return operators[Math.floor(Math.random() * operators.length)]
}

export const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}
