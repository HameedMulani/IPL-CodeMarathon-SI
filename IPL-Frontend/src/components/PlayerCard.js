import React from 'react'
import {Link} from  'react-router-dom';
const PlayerCard = ({ Players }) => {
    const { playerName,
    matchesPLayed,
    fanEngagement} = Players;
    // const image = require(`../${imageUrl}`);
    return (
        <div className="card " style={{width: '18rem'}}>
    
            <div className="card-body bg-primary">
                <h5 className="card-heade">Player Name : {playerName}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Matches Played :  {matchesPLayed}</li>
                    
                    <li className="list-group-item">Fan Engagements :{fanEngagement}</li>
                </ul>
            </div>
        </div>
    )
}

export default PlayerCard