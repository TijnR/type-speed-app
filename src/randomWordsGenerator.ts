import { mostUsedWords } from './mostUsedWords'

export const getSmallerWordList = () => {
  const newWords = []

  for (let index = 0; index < 100; index++) {
    let randomNumber = Math.round(Math.random() * mostUsedWords.length)
    newWords.push(mostUsedWords[randomNumber])
  }
  return newWords
}
