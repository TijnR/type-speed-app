import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  key: number
  correct?: boolean
  active?: boolean
}

const SpanLeft: FunctionComponent<Props> = ({
  key,
  children,
  correct,
  active,
}) => {
  const getActiveColor = () => {
    if (active && correct) {
      return '#FE890F'
    } else if (active && !correct) {
      return 'red'
    } else {
      return 'grey'
    }
  }

  const Span = styled.span`
    padding: 0 3px;
    font-size: 26px;
    font-family: MerriWeather, serif;
    color: ${getActiveColor()};
    text-decoration: ${correct ? 'none' : 'line-through'};
  `
  return <Span key={key}>{children}</Span>
}

export default SpanLeft
