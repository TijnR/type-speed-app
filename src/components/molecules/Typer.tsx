import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { InputWrapperLeft, InputWrapperRight } from './TyperStyles'
import Cursor from '../atoms/Cursor'
import Input from '../atoms/Input'
import SpanLeft from '../atoms/SpanLeft'

const wordList = [
  'hallo',
  'skurr',
  'brains',
  'cheese',
  'money',
  'gains',
  'firetruck',
]

const textRightAlign = {
  textAlign: 'right',
}

interface UsedWords {
  text: string
  wasGood: boolean
}

interface Props {}

const Typer = (props: Props) => {
  const [activeWord, setActiveWord] = useState('start')
  const [staticWord, setStaticWord] = useState(activeWord)
  const [usedWord, setUsedWord] = useState('')

  const [words, setWords] = useState(wordList)
  const [correctTyping, setCorrectTyping] = useState(true)
  const [usedWords, setUsedWords] = useState<UsedWords[]>([])
  const [onWord, setOnWord] = useState(1)
  const [wrongLetters, setWrongLetters] = useState(0)

  console.log(words)
  console.log(activeWord)
  console.log(staticWord)

  // const SpanLeft = styled.span`
  //   padding: 0 2px;
  //   font-size: 20px;
  //   color: grey;
  // `

  const SpanRight = styled.span`
    padding: 0 3px;
    font-size: 26px;
    color: #121212;
  `

  // const displayWords: any = words.map((word, i) => <SpanRight key={i}>{word}</SpanRight>)
  // const displayUsedWords: any = usedWords.map((word, i) => <SpanLeft key={i}>{word}</SpanLeft>)

  const getActiveChar = (char: string) => {
    checkType(char)
  }

  const backSpace = () => {
    if (wrongLetters > 0) {
      setUsedWord((prevState) => prevState.slice(0, -1))
      setWrongLetters((prevState) => prevState - 1)
    }
  }

  useEffect(() => {
    if (wrongLetters === 0) {
      setCorrectTyping(true)
    }
  }, [wrongLetters])

  const checkType = (char: string) => {
    if (char === ' ' && usedWord.length >= 1) {
      setOnWord(onWord + 1)

      console.log('CHECKING IF CORRECT: COMPARE!!')
      console.log(staticWord)
      console.log(usedWord)

      const isWordCorrect = staticWord === usedWord

      setWrongLetters(0)
      setCorrectTyping(true)
      setActiveWord(words[0])
      setStaticWord(words[0])

      const defaultAddingWord = {
        text: usedWord,
        wasGood: isWordCorrect,
      }

      let newUsedWords = usedWords
      newUsedWords.push(defaultAddingWord)

      setUsedWords(newUsedWords)
      setUsedWord('')

      let newArr = words
      newArr.shift()

      setWords(newArr)

      console.log('space')
      console.log(usedWords)
    } else if (char !== ' ') {
      if (char === activeWord[0] && wrongLetters === 0) {
        setActiveWord((prevState) => prevState.substring(1))
        setUsedWord((prevState) => prevState + char)
        console.log(words)
        console.log('correct')
      } else {
        setUsedWord((prevState) => prevState + char)
        setWrongLetters((prevState) => prevState + 1)
        setCorrectTyping(false)
        console.log('wrong')
      }
    }
  }

  const displayUsedWords = usedWords.map((word, i) => (
    <SpanLeft key={i} correct={word.wasGood}>
      {word.text}
    </SpanLeft>
  ))

  const displayWords = words.map((word, i) => (
    <SpanRight key={i}>{word}</SpanRight>
  ))

  const displayUsedWord = (
    <SpanLeft key={0} active={true} correct={correctTyping}>
      {usedWord}
    </SpanLeft>
  )
  const displayActiveWord = <SpanRight key={0}>{activeWord}</SpanRight>

  console.log(words)

  return (
    <>
      <Input getActiveChar={getActiveChar} backspace={backSpace} />
      <InputWrapperLeft>
        {displayUsedWords}
        {displayUsedWord}
        <Cursor />
      </InputWrapperLeft>

      <InputWrapperRight>
        {displayActiveWord}
        {displayWords}
      </InputWrapperRight>
    </>
  )
}

export default Typer
