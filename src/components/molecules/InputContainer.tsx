import React from 'react'
import styled from 'styled-components'
import Typer from './Typer'

const InputCon = styled.div`
  display: flex;
  position: relative;
  /* background: whitesmoke; */
  overflow: hidden;
  /* border: 2px solid rgb(255, 175, 108); */
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  max-width: 1000px;
  width: 100%;
  height: 80px;
`

interface Props {}

const InputContainer = (props: Props) => {
  return (
    <InputCon>
      <Typer />
    </InputCon>
  )
}

export default InputContainer
