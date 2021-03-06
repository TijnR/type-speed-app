import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Typer from './Typer'

const InputCon = styled.div`
  display: flex;
  position: relative;

  overflow: hidden;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  max-width: 800px;
  width: 100%;
  height: 110px;
`

const MobileLabel = styled.span`
  position: absolute;
  display: none;
  color: red;
  bottom: -50px;
  text-align: center;

  @media only screen and (max-width: 400px) {
    display: flex;
  }
`

interface Props {
  getResult: any
  startTimer: any
  isCounting: boolean
}

const InputContainer: FunctionComponent<Props> = ({
  getResult,
  startTimer,
  isCounting,
}) => {
  return (
    <>
      <InputCon>
        <Typer
          isCounting={isCounting}
          startTimer={startTimer}
          getResult={getResult}
        />
      </InputCon>
      <MobileLabel>
        Application not optimised for mobile, please play on laptop/desktop.
      </MobileLabel>
    </>
  )
}

export default InputContainer
