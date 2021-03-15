import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Logo } from './components/atoms/Logo'
import ScoreBoard from './components/molecules/ScoreBoard'
import InputContainer from './components/molecules/InputContainer'
import Stats from './components/molecules/Stats'
import Module from './components/molecules/Module'
import SmallPlug from './components/molecules/SmallPlug'
import TeslaSVG from './components/atoms/TeslaSVG'

const LayoutStyles = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 3fr 1fr 3fr;
  grid-template-areas:
    'logo logo scoreboard scoreboard'
    'input input input input'
    'author stats stats stats';

  div {
    display: flex;
  }

  .logo__container {
    grid-area: logo;
    /* border: 1px dashed green; */
  }

  .scoreboard__container {
    grid-area: scoreboard;
    justify-content: flex-end;
    /* border: 1px dashed blue; */
  }

  .input__container {
    position: relative;
    grid-area: input;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px dashed steelblue; */

    @media only screen and (max-width: 800px) {
      margin-top: 100px;
    }
  }

  .author__container {
    grid-area: author;
    align-items: flex-end;
    /* border: 1px dashed purple; */
  }

  .highscore__container {
    grid-area: highscore;
    /* border: 1px dashed red; */
  }

  .stats__container {
    grid-area: stats;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    /* border: 1px dashed lime; */
    @media only screen and (max-width: 800px) {
      margin-top: 100px;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas:
      'logo'
      'input'
      'stats'
      'highscore'
      'scoreboard'
      'author';
  }
`

interface Props {}
interface Score {
  words: number
  accuracy: number
}

interface ScoreBoardScore {
  name: string
  words: number
  accuracy: number
}

export const DefaultLayout = (props: Props) => {
  const [timer, SetTimer] = useState(60)
  const [isCounting, setIsCounting] = useState(false)
  const [totalWords, setTotalWords] = useState(0)
  const [correctWords, setCorrectWords] = useState(0)
  const [moduleOpen, setModuleOpen] = useState(false)
  const [score, setScore] = useState<Score>()
  const [lowestScoreBoard, setLowestScoreBoard] = useState<ScoreBoardScore>({
    name: 'unknown',
    words: 0,
    accuracy: 0,
  })

  const getResult = (correct: boolean) => {
    if (correct) {
      setCorrectWords((prevState) => prevState + 1)
    }
    setTotalWords((prevState) => prevState + 1)
  }

  const startTimer = () => {
    if (!moduleOpen) {
      setIsCounting(true)
    }
  }

  useEffect(() => {
    if (isCounting) {
      let seconds = timer
      const Interval = setInterval(() => {
        seconds--
        SetTimer(seconds)

        if (seconds === 0) {
          setModuleOpen(true)
          setIsCounting(false)
          clearInterval(Interval)
        }
      }, 1000)

      return () => {
        clearInterval(Interval)
      }
    }
  }, [isCounting])

  useEffect(() => {
    if (moduleOpen) {
      handleScore()
    }
  }, [moduleOpen])

  const resetGame = () => {
    window.location.reload()
  }

  const accuracy =
    totalWords > 0 ? Math.round((correctWords / totalWords) * 100) : 100

  const handleScore = () => {
    setScore({
      words: correctWords,
      accuracy: accuracy,
    })
  }

  return (
    <LayoutStyles>
      <>
        <div className="logo__container">
          <Logo />
        </div>
        <div className="scoreboard__container">
          <ScoreBoard setLowestScoreBoard={setLowestScoreBoard} />
        </div>
        <div className="input__container">
          <TeslaSVG />
          <InputContainer
            isCounting={isCounting}
            startTimer={startTimer}
            getResult={getResult}
          />
        </div>
        <div className="author__container">
          <SmallPlug />
        </div>
        <div className="stats__container">
          <Stats
            score={score}
            time={timer}
            correctWords={correctWords}
            accuracy={accuracy}
          />
        </div>
        {score && (
          <Module
            lowestScoreBoard={lowestScoreBoard}
            score={score}
            resetGame={resetGame}
            isOpen={moduleOpen}
          />
        )}
      </>
    </LayoutStyles>
  )
}
