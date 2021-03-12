import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ReactLogo } from '../../assets/images/tesla.svg'

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  left: 0;
  right: 0;
  bottom: 0;
  top: -220px;
  margin: 0 auto;

  svg {
    width: 500px;
  }
`

interface Props {}

const TeslaSVG = (props: Props) => {
  return (
    <Container>
      <ReactLogo />
    </Container>
  )
}

export default TeslaSVG
