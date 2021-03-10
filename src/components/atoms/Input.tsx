import React, { useState, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  getActiveChar: any
}

const Input = (props: Props, { getActiveChar }: any) => {
  const InputS = styled.input`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;
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

  return <InputS onChange={handleChange} autoFocus value="" />
}

export default Input
