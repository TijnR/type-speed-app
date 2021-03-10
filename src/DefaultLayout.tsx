import React from 'react'
import styled from 'styled-components';
import {Logo} from './components/atoms/Logo'
import ScoreBoard from './components/molecules/ScoreBoard';
import InputContainer from './components/molecules/InputContainer';

const LayoutStyles = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 3fr 1fr 3fr;
    grid-template-areas:
    'logo logo scoreboard scoreboard'
    'input input input input'
    'author highscore stats stats';

    div{
        display: flex;
    }

    .logo__container {
     grid-area: logo;  
     border: 1px dashed green; 
    }

    .scoreboard__container {
     grid-area: scoreboard; 
     justify-content: flex-end;
     border: 1px dashed blue; 
    }

    .input__container {
     grid-area: input;
     border: 1px dashed steelblue;   
     display: flex;
     align-items: center;
     justify-content: center;
    }

    .author__container {
     grid-area: author; 
     border: 1px dashed purple  
    }

    .highscore__container {
     grid-area: highscore;
     border: 1px dashed red 
    }

    .stats__container {
     grid-area: stats;
     border: 1px dashed lime;   
    }

    @media only screen and (max-width: 800px) {
        grid-template-columns: 100%;
        grid-template-rows: auto;
        grid-template-areas:
        'logo'
        'input'
        'stats'
        'highscore'
        'scoreboard'
        'author';
    }
`

interface Props {
   
}


export const DefaultLayout = (props: Props) => {
    
    return (
        <LayoutStyles>
            <>
            <div className='logo__container'><Logo /></div>
            <div className='scoreboard__container'><ScoreBoard/></div>
            <div className='input__container'><InputContainer /></div>
            <div className='author__container'>author</div>
            <div className='highscore__container'>highscore</div>
            <div className='stats__container'>stats</div>
            </>
        </LayoutStyles>
    )
}
