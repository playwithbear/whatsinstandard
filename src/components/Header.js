import React, { Component } from 'react'

// Import components
import Navbar from "./Navbar"

// Import page elements
import icon from "../img/Whats-in-standard.png"

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="grid-header">
                    <div className="grid-header-links">
                        <small className="text-muted"><strong>What's in Standard? </strong>
                        <span> Pokémon TCG</span>
                        <small className="text-muted"> / </small>
                        <a href="http://whatsinstandard.com/" className="text-muted" rel="noopener">Magic: The Gathering</a>
                        <small className="text-muted"> / </small>
                        <a href="http://standardhearth.com/" className="text-muted" rel="noopener">Hearthstone</a></small>   
                    </div>
                    <div className="grid-header-logo">
                        <img id="site-icon" src={icon} alt="What's in Standard? logo" />                        
                    </div>
                    <Navbar />     
                </div>
                
                <hr/>
            </header>
        )
    }
}

export default Header
