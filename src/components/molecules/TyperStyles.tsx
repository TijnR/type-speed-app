import styled from 'styled-components'

export const InputWrapperLeft = styled.div`
  width: 10%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  color: grey;
`

export const InputWrapperRight = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  align-items: center;
  font-family: MerriWeather, serif;

  span:first-child {
    padding-left: 0;
  }
`

export const SpanRight = styled.span`
  padding: 0 3px;
  font-size: 26px;
  color: #121212;
`
