import React, { useState, useEffect, FunctionComponent } from 'react'
import { InputWrapperLeft, InputWrapperRight, SpanRight } from './TyperStyles'
import Cursor from '../atoms/Cursor'
import Input from '../atoms/Input'
import SpanLeft from '../atoms/SpanLeft'
import { getSmallerWordList } from '../../randomWordsGenerator'

const bruh = getSmallerWordList()

// const wordList = [
//   'hallo',
//   'skurr',
//   'brains',
//   'cheese',
//   'money',
//   'gains',
//   'firetruck',
// ]

interface OldWord {
  text: string
  wasGood: boolean
}

interface Props {
  getResult: any
  startTimer: any
  isCounting: boolean
}

const Typer: FunctionComponent<Props> = ({
  getResult,
  startTimer,
  isCounting,
}) => {
  const [activeWord, setActiveWord] = useState('start')
  const [staticWord, setStaticWord] = useState(activeWord)
  const [usedWord, setUsedWord] = useState('')
  const [oldWord, setOldWord] = useState<OldWord>()

  const [words, setWords] = useState(bruh)
  const [correctTyping, setCorrectTyping] = useState(true)
  const [wrongLetters, setWrongLetters] = useState(0)

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
    if (!isCounting) {
      setActiveWord('start')
      setStaticWord(activeWord)
      setUsedWord('')
      setWords(bruh)
      setCorrectTyping(true)
    }
  }, [isCounting])

  useEffect(() => {
    if (wrongLetters === 0) {
      setCorrectTyping(true)
    }
  }, [wrongLetters])

  const checkType = (char: string) => {
    if (char === ' ' && usedWord.length >= 1) {
      const isWordCorrect = staticWord === usedWord

      setWrongLetters(0)
      setCorrectTyping(true)
      setActiveWord(words[0])
      setStaticWord(words[0])

      const defaultAddingWord = {
        text: usedWord,
        wasGood: isWordCorrect,
      }

      setOldWord(defaultAddingWord)

      setUsedWord('')

      let newArr = words
      newArr.shift()
      setWords(newArr)
      getResult(isWordCorrect)
    } else if (char !== ' ') {
      if (char === activeWord[0] && wrongLetters === 0) {
        setActiveWord((prevState) => prevState.substring(1))
        setUsedWord((prevState) => prevState + char)
        startTimer()
      } else {
        setUsedWord((prevState) => prevState + char)
        setWrongLetters((prevState) => prevState + 1)
        setCorrectTyping(false)
      }
    }
  }

  const displayOldWord = oldWord ? (
    <SpanLeft key={1} correct={oldWord.wasGood}>
      {oldWord.text}
    </SpanLeft>
  ) : (
    ''
  )

  const displayActiveWord = <SpanRight key={0}>{activeWord}</SpanRight>

  const displayUsedWord = (
    <SpanLeft key={0} active={true} correct={correctTyping}>
      {usedWord}
    </SpanLeft>
  )

  const displayWords = words
    .filter((word, i) => i < 12)
    .map((word, i) => <SpanRight key={i}>{word}</SpanRight>)

  return (
    <>
      <Input getActiveChar={getActiveChar} backspace={backSpace} />
      <InputWrapperLeft>
        {displayOldWord}
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
