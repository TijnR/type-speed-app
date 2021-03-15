import React, { useState, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  getActiveChar: any
  backspace: any
}

const Input = (props: Props, { getActiveChar }: any) => {
  const InputS = styled.input`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: transparent;
  `

  const handleChange = (e: any) => {
    if (props.getActiveChar) {
      props.getActiveChar(e.target.value)
    }
  }

  const handleOnKeyDown = (e: any) => {
    if (e.keyCode === 27 || e.keyCode === 13 || e.keyCode === 8) {
      props.backspace()
    }
  }

  return (
    <InputS
      onChange={handleChange}
      onKeyDown={handleOnKeyDown}
      autoFocus
      autoCapitalize="none"
      value=""
    />
  )
}

export default Input
