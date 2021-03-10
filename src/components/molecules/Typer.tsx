import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { InputWrapperLeft, InputWrapperRight } from './TyperStyles'
import Cursor from '../atoms/Cursor'
import Input from '../atoms/Input'

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

interface Props {}

const Typer = (props: Props) => {
  const [activeWord, setActiveWord] = useState('start')
  const [usedWord, setUsedWord] = useState('')

  const [words, setWords] = useState(wordList)
  const [usedWords, setUsedWords] = useState<string[]>([])
  const [onWord, setOnWord] = useState(1)

  console.log(words)
  console.log(activeWord)

  const SpanLeft = styled.span`
    padding: 0 2px;
    font-size: 20px;
    color: grey;
  `

  const SpanRight = styled.span`
    padding: 0 2px;
    font-size: 20px;
    color: #121212;
  `

  // const displayWords: any = words.map((word, i) => <SpanRight key={i}>{word}</SpanRight>)
  // const displayUsedWords: any = usedWords.map((word, i) => <SpanLeft key={i}>{word}</SpanLeft>)

  const getActiveChar = (char: string) => {
    checkType(char)
  }

  const checkType = (char: string) => {
    let wrongNumbers = 0

    console.log(usedWord.length)

    if (char === ' ' && usedWord.length >= 1) {
      setOnWord(onWord + 1)

      setActiveWord(words[0])

      setUsedWords((prevState) => {
        let newArr = prevState
        newArr.indexOf(usedWord) < 0 && newArr.push(usedWord)
        return newArr
      })
      setUsedWord('')

      let newArr = words
      newArr.shift()

      setWords(newArr)

      console.log('space')
    } else if (wrongNumbers === 0 && char !== ' ') {
      if (char === activeWord[0]) {
        setActiveWord((prevState) => prevState.substring(1))
        setUsedWord((prevState) => prevState + char)
        console.log(words)
        console.log('correct')
      } else {
        setUsedWord((prevState) => prevState + char)
        wrongNumbers++
        console.log('wrong')
      }
    }
  }

  const displayUsedWords = usedWords.map((word, i) => (
    <SpanLeft key={i}>{word}</SpanLeft>
  ))

  const displayWords = words.map((word, i) => (
    <SpanRight key={i}>{word}</SpanRight>
  ))

  const displayUsedWord = <SpanLeft key={0}>{usedWord}</SpanLeft>
  const displayActiveWord = <SpanRight key={0}>{activeWord}</SpanRight>

  console.log(words)
  console.log(activeWord)

  return (
    <>
      <Input getActiveChar={getActiveChar} />
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
