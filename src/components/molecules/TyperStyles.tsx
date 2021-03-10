import styled from 'styled-components';

export const InputWrapperLeft = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    color: grey;
`

export const InputWrapperRight = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;

    span:first-child {
        padding-left: 0;
    }
`