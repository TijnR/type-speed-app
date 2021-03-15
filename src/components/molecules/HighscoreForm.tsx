import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import { Button, EscapeButton } from '../atoms/Button'

const Title = styled.h2`
  font-size: 30px;
  color: #fe890f;
`

const CostomInput = styled.input`
  font-size: 18px;
  font-family: 'Crossten Medium', sans-serif;
  padding: 5px 10px;
  margin-bottom: 10px;
  max-width: 150px;
`

const WrongNameSpan = styled.span`
  font-size: 12px;
  color: red;
`

interface Props {
  addLeaderBoardScore: any
}

const HighscoreForm: FunctionComponent<Props> = ({ addLeaderBoardScore }) => {
  const [name, setName] = useState('')
  const [wrongName, setWrongName] = useState(true)

  const handleChange = (e: any) => {
    let newWordLength = e.target.value.length
    if (newWordLength > 3 && newWordLength < 11) {
      setWrongName(false)
    }
    setName(e.target.value)
  }

  const handleClick = () => {
    if (name.length > 3 && name.length < 11) {
      addLeaderBoardScore(name)
    } else {
      setWrongName(true)
    }
  }

  return (
    <>
      <Title>You're in top 10!</Title>
      <CostomInput
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="You're name"
      />
      <Button click={handleClick}>Enter Leaderboard</Button>
      {wrongName && (
        <WrongNameSpan>Name has to be between 2-10 characters</WrongNameSpan>
      )}
    </>
  )
}

export default HighscoreForm
