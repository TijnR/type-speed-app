import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/speed-type.svg'
import { ReactComponent as ReactLogo } from '../../assets/images/speed-type.svg'

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;

  transform: scale3d(1.5, 1.5, 1);

  svg {
    width: 200px;
  }

  @media only screen and (max-width: 800px) {
    margin: 0 auto;
    width: 100px;
    height: 100px;

    svg {
      width: 100px;
    }
  }
`

interface Props {}

export const Logo = (props: Props) => {
  return (
    <ImageContainer>
      <ReactLogo />
    </ImageContainer>
  )
}
