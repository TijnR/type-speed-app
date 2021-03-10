import React from 'react'
import styled from 'styled-components';
import Typer from './Typer'

const InputCon = styled.div`
    display: flex;
    position: relative;
    background: whitesmoke;
    max-width: 1000px;
    width: 100%;
    height: 80px;


`

interface Props {
    
}

const InputContainer = (props: Props) => {
    return (
        <InputCon>
           <Typer />
        </InputCon>
    )
}

export default InputContainer
