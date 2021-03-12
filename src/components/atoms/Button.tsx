import React from 'react'
import styled, { withTheme } from 'styled-components'
import { IconContext } from 'react-icons'
import { FaTimes } from 'react-icons/fa'

const StyledButton = styled.button`
  color: white;
  border: 1px solid #fe890f;
  background-color: #fe890f;
  padding: 10px;
  font-family: 'Crossten Medium', sans-serif;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  transition: 300ms ease-in-out;
  transition-property: transform;

  :hover {
    transform: scale3d(1.02, 1.05, 1);
  }
`

interface Props {
  click: any
}

export const Button: React.FC<Props> = ({ children, click }) => {
  return <StyledButton onClick={() => click()}>{children}</StyledButton>
}

const StyledEscapeButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  top: -10px;
  right: -10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fe890f;
  transition: 300ms ease-in-out;
  transition-property: transform;

  :hover {
    transform: scale3d(1.1, 1.1, 1);
  }
`

const ImageStyles = {
  width: 10,
  height: 10,
  fill: 'white',
}

export const EscapeButton: React.FC<Props> = ({ click }) => {
  return (
    <StyledEscapeButton onClick={() => click()}>
      <IconContext.Provider value={{ color: 'white', size: '1.5em' }}>
        <div>
          <FaTimes />
        </div>
      </IconContext.Provider>
    </StyledEscapeButton>
  )
}
