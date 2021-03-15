import React, { FunctionComponent, useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { Button, EscapeButton } from '../atoms/Button'
import HighscoreForm from './HighscoreForm'

import firebase from '../../util/firebase'

const ref = firebase.database().ref('leaderboard')

const ModuleInner = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 400px;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`

const BigText = styled.span`
  font-family: ImpactLTS;
  font-size: 40px;
  color: #fe890f;
`

interface Score {
  words: number
  accuracy: number
}
interface ScoreBoardScore {
  name: string
  words: number
  accuracy: number
}

interface Props {
  isOpen: boolean
  resetGame: any
  score: Score | undefined
  lowestScoreBoard: ScoreBoardScore
}

const Module: FunctionComponent<Props> = ({
  isOpen,
  resetGame,
  score,
  lowestScoreBoard,
}) => {
  const [tier, setTier] = useState('')
  const [highscoreFormOpen, setHighScoreFormOpen] = useState(false)

  const addLeaderBoardScore = (name: string) => {
    let newLeaderBoardScore = {
      name: name,
      ...score,
    }

    ref.push(newLeaderBoardScore)
    resetGame()
  }

  const ModuleContainer = styled.div`
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    padding: 100px;
    background-color: rgba(10, 10, 10, 0.25);
    opacity: ${isOpen ? 1 : 0};
    display: ${isOpen ? 'flex' : 'none'};
    pointer-events: ${isOpen ? 'auto' : 'none'};
  `

  useEffect(() => {
    setHighScoreFormOpen(false)
    if (score) {
      if (score.words >= 80) {
        setTier('S')
      } else if (score.words >= 70) {
        setTier('A+')
      } else if (score.words >= 65) {
        setTier('A')
      } else if (score.words >= 60) {
        setTier('A-')
      } else if (score.words >= 55) {
        setTier('B+')
      } else if (score.words >= 50) {
        setTier('B')
      } else if (score.words >= 45) {
        setTier('B-')
      } else if (score.words >= 40) {
        setTier('C+')
      } else if (score.words >= 35) {
        setTier('C')
      } else if (score.words >= 30) {
        setTier('C-')
      } else if (score.words >= 25) {
        setTier('D')
      } else if (score.words >= 20) {
        setTier('E')
      } else if (score.words <= 20) {
        setTier('F')
      }

      if (score.words > lowestScoreBoard.words) {
        setHighScoreFormOpen(true)
      }
    }
  }, [isOpen])

  return (
    <ModuleContainer>
      <ModuleInner>
        <EscapeButton click={resetGame} />
        <InfoContainer>
          <SubContainer>
            <h1>Tier: {tier}</h1>
            <h3>
              Typing speed:{' '}
              <BigText>{score?.words ? score.words : '0'}</BigText> Wpm
            </h3>
            <h3>
              Accuracy:{' '}
              <BigText>{score?.words ? score.accuracy : '100'}</BigText>%
            </h3>
          </SubContainer>
          <SubContainer>
            {highscoreFormOpen && (
              <HighscoreForm addLeaderBoardScore={addLeaderBoardScore} />
            )}
          </SubContainer>
        </InfoContainer>

        <Button click={resetGame}>Try Again</Button>
      </ModuleInner>
    </ModuleContainer>
  )
}

export default Module
