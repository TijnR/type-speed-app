import React, { useState, useEffect, FunctionComponent } from 'react'
import styled from 'styled-components'
import firebase from '../../util/firebase'

const ref = firebase.database().ref('leaderboard')

const ScoreBoardStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`

const ScoresStyles = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  fontFamily: 'Crossten Medium',
  alignText: 'left',
}

const ColorText = {
  color: '#fe890f',
}

interface ScoreBoardScore {
  name: string
  words: number
  accuracy: number
}

interface Props {
  setLowestScoreBoard: any
}

const ScoreBoard: FunctionComponent<Props> = ({ setLowestScoreBoard }) => {
  const [scoreBoard, setScoreBoard] = useState<ScoreBoardScore[]>([
    {
      name: 'demo',
      words: 0,
      accuracy: 0,
    },
  ])

  useEffect(() => {
    // leaderBoardScores.forEach((score) => {
    //   ref.push(score)
    // })
    ref.on('value', (snapshot) => {
      let data = snapshot.val()
      var key: any

      for (key in data) {
        // skip loop if the property is from prototype
        if (!data.hasOwnProperty(key)) continue

        let obj = data[key]

        setScoreBoard((prevState) => {
          if (prevState) {
            return [...prevState, obj]
          } else {
            return [obj]
          }
        })
      }
    })
  }, [])

  const sortedList = scoreBoard.sort(function (a, b) {
    return b.words - a.words
  })

  const displayScoreBoard = sortedList?.map((score, i) => {
    if (i < 10) {
      return (
        <span>
          <span style={ColorText}>{i + 1}.</span> {score.name}, {score.words}
          wpm, {score.accuracy}%
        </span>
      )
    }
  })

  sortedList[9] && setLowestScoreBoard(sortedList[9])

  return (
    <ScoreBoardStyled>
      <h3 style={{ fontSize: 30 }}>Leaderboard</h3>
      <div style={ScoresStyles}>{displayScoreBoard}</div>
    </ScoreBoardStyled>
  )
}

export default ScoreBoard
