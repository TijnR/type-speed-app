import React from 'react'
import styled from 'styled-components'

const Tijn = styled.a`
  font-size: 20px;
  font-family: ImpactLTS, Impact, Haettenschweiler, 'Arial Narrow Bold',
    sans-serif;
  letter-spacing: 0.5em;
  text-decoration: none;
  color: black;

  :visited {
    text-decoration: none;
    color: #fe890f;
  }
`
const Roozen = styled.div`
  display: flex;
  flex-direction: column;
  transition: 300ms ease-in-out;

  :hover {
    cursor: pointer;
    letter-spacing: 0.3em;
  }

  @media only screen and (max-width: 800px) {
    margin-top: 100px;
  }
`

interface Props {}

const SmallPlug = (props: Props) => {
  return (
    <Roozen>
      <Tijn href="https://www.linkedin.com/in/tijn-roozen/" target="_blank">
        TIJN
      </Tijn>
      <Tijn href="https://www.linkedin.com/in/tijn-roozen/" target="_blank">
        ROOZEN
      </Tijn>
    </Roozen>
  )
}

export default SmallPlug
