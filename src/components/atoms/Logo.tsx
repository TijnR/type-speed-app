import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/speed-type.svg'

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  transform: scale3d(1.5, 1.5, 1);

  @media only screen and (max-width: 800px) {
    margin: 0 auto;
  }
`

interface Props {}

export const Logo = (props: Props) => {
  return (
    <ImageContainer>
      <img src={logo} alt="TYPE SPEED LOGO" />
    </ImageContainer>
  )
}
