import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Matches">Matches Stats</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/HigestPlayer">Highest Players</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/FiterByDate">GetFromDate</Link>
                    </li>
                <li className="nav-item active">
                        <Link className="nav-link" to="/CreatePlayer">Create Player</Link>
                    </li>
                    
                   
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
