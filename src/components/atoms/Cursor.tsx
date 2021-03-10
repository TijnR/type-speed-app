import React from 'react'
import styled, {keyframes} from 'styled-components';

const flicking = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }


    100% {
        opacity: 1;
    }
`

const Line = styled.div`
    position: absolute;
    width: 2px;
    height: 40px;
    right: 0;
    background-color: #FE890F;
    animation: ${flicking} 1s linear infinite;
`

interface Props {
    
}

const Cursor = (props: Props) => {
    return (
        <Line />
    )
}

export default Cursor
