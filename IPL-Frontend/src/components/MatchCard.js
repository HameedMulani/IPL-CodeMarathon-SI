import React from 'react'
import {Link} from  'react-router-dom';
const MatchCard = ({ Matches }) => {
    const { matchDate ,
        venue,
        teamName1,
        teamName2,
        totalNumberOfFanEngagements} = Matches;
    // const image = require(`../${imageUrl}`);
    return (
        <div className="card" style={{width: '18rem'}}>
    
            <div className="card-body bg-primary">
                <h5 className="card-header">Venue: {venue}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Teame 1:  {teamName1}</li>
                    <li className="list-group-item"> Teame 2: {teamName2}</li>
                    <li className="list-group-item">Total Number Of Fan Engagements :{totalNumberOfFanEngagements}</li>
                    <li className="list-group-item">Match date:  {matchDate}</li>
                </ul>
            </div>
        </div>
    )
}

export default MatchCard