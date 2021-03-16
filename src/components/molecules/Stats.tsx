import React, { FunctionComponent, useState, useEffect } from 'react'
import styled from 'styled-components'

const SpacingStats = styled.div`
  max-width: 450px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    order: 1;
    max-width: 100%;
  }
`

const StatDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* border: 1px dotted green; */
  /* padding-left: 80px; */
`

const HighDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 30px;

  @media only screen and (max-width: 800px) {
    order: 2;
    width: 100%;
    padding-right: 0;
    padding-top: 20px;
  }
`

const Title = styled.h3`
  font-family: 'Crossten Bold';
  font-weight: 400;
  margin: 0;
  padding-left: 5px;
  padding-bottom: 20px;

  @media only screen and (max-width: 800px) {
    font-size: 18px;
  }
`

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Flex = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
`

const Stat = styled.span`
  color: #fe890f;
  font-family: ImpactLTS, Impact, Haettenschweiler, 'Arial Narrow Bold',
    sans-serif;
  font-size: 80px;
  align-self: flex-start;
  width: 120px;
  margin-bottom: -20px;

  @media only screen and (max-width: 800px) {
    font-size: 40px;
    width: 80px;
    margin-bottom: 0px;
  }
`

const SmallStat = styled.span`
  color: #fe890f;
  font-family: ImpactLTS, Impact, Haettenschweiler, 'Arial Narrow Bold',
    sans-serif;
  font-size: 30px;
  align-self: flex-start;
  margin-bottom: -20px;
`

const SmallSpan = styled.span`
  color: grey;
  font-family: 'Crossten Medium';
  padding-left: 5px;
`

interface HighScore {
  words: number
  accuracy: number
  tier: string
}

interface Score {
  words: number
  accuracy: number
}

interface Props {
  correctWords: number
  accuracy: number
  time: number
  score: Score | undefined
}

export let localWords = parseInt(getLocalStorageValue('words'))
export let localAccuracy = parseInt(getLocalStorageValue('accuracy'))
let localTier = getLocalStorageValue('tier') || 'F'

function getLocalStorageValue(key: string) {
  let result = window.localStorage.getItem(key)
  if (result) {
    return result
  }
  return '0'
}

const Stats: FunctionComponent<Props> = (props) => {
  const { score, correctWords, accuracy, time } = props
  const [highScore, setHighScore] = useState<HighScore>({
    words: localWords,
    accuracy: localAccuracy,
    tier: localTier,
  })

  useEffect(() => {
    let tier = ''
    if (score) {
      if (score.words >= 80) {
        tier = 'S'
      } else if (score.words >= 70) {
        tier = 'A+'
      } else if (score.words >= 65) {
        tier = 'A'
      } else if (score.words >= 60) {
        tier = 'A-'
      } else if (score.words >= 55) {
        tier = 'B+'
      } else if (score.words >= 50) {
        tier = 'B'
      } else if (score.words >= 45) {
        tier = 'B-'
      } else if (score.words >= 40) {
        tier = 'C+'
      } else if (score.words >= 35) {
        tier = 'C'
      } else if (score.words >= 30) {
        tier = 'C-'
      } else if (score.words >= 25) {
        tier = 'D'
      } else if (score.words >= 20) {
        tier = 'E'
      } else if (score.words <= 20) {
        tier = 'F'
      }

      if (score.words > highScore.words) {
        console.log('highscore')

        setHighScore({
          words: score.words,
          accuracy: score.accuracy,
          tier: tier,
        })
        window.localStorage.setItem('words', `${score.words}`)
        window.localStorage.setItem('accuracy', `${score.accuracy}`)
        window.localStorage.setItem('tier', `${tier}`)
      } else if (
        score.words === highScore.words &&
        score.accuracy > highScore.accuracy
      ) {
        console.log('highscore')
        setHighScore({
          words: score.words,
          accuracy: score.accuracy,
          tier: tier,
        })
        window.localStorage.setItem('words', `${score.words}`)
        window.localStorage.setItem('accuracy', `${score.accuracy}`)
        window.localStorage.setItem('tier', `${tier}`)
      }
    }
  }, [score])

  return (
    <>
      <HighDiv>
        <StatDiv>
          <Title style={{ padding: 0, paddingBottom: 10 }}>Highscore</Title>
          <Flex>
            <SmallStat>{highScore.words ? highScore.words : 0}</SmallStat>
            <SmallSpan>Words/min</SmallSpan>
          </Flex>
          <Flex>
            <SmallStat>
              {highScore.accuracy ? highScore.accuracy : 100}
            </SmallStat>
            <SmallSpan>Accuracy</SmallSpan>
          </Flex>
          <Flex>
            <SmallStat>{highScore.tier ? highScore.tier : 'F'}</SmallStat>
            <SmallSpan>Tier</SmallSpan>
          </Flex>
        </StatDiv>
      </HighDiv>
      <SpacingStats>
        <StatDiv>
          <Title>Time</Title>
          <StatsContainer>
            <Stat>{time >= 0 ? time : 0}</Stat>
            <SmallSpan>Sec</SmallSpan>
          </StatsContainer>
        </StatDiv>
        <StatDiv>
          <Title>Speed</Title>
          <StatsContainer>
            <Stat>{correctWords}</Stat>
            <SmallSpan>total</SmallSpan>
          </StatsContainer>
        </StatDiv>
        <StatDiv>
          <Title>Accuracy</Title>
          <StatsContainer>
            <Stat>{accuracy}</Stat>
            <SmallSpan>%</SmallSpan>
          </StatsContainer>
        </StatDiv>
      </SpacingStats>
    </>
  )
}

export default Stats
