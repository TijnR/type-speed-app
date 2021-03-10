import React from 'react'

const ScoreBoardStyles = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignText: 'center'
}

const ScoresStyles = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    fontFamily: 'Crossten Medium',
    alignText: 'left'
}

interface Props {
    
}

const ScoreBoard = (props: Props) => {
    return (
        <div style={ScoreBoardStyles}>
            <h3 style={{fontSize: 30}}>Leaderboard</h3>
            <div style={ScoresStyles}>
                <span>1. Still in the making..</span>
                <span>2. So you have to wait..</span>
                <span>3. For about 15 minutes..</span>
                <span>4. Okee maybe longer..</span>
            </div>
        </div>
    )
}

export default ScoreBoard
