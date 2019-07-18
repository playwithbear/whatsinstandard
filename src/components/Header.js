import React, { Component } from 'react'

// Import components
import Navbar from "./Navbar"

// Import page elements
import icon from "../img/icon-original.svg"

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="grid-header">
                    <div className="grid-header-logo">
                        <img id="site-icon" src={icon} alt="What's in Standard? logo" />
                        <h1>What's in Standard?</h1>
                        <small className="text-muted">for</small>
                        <span> Pokémon TCG</span>
                        <small className="text-muted"> / </small>
                        <a href="http://whatsinstandard.com/" class="text-muted" rel="noopener">Magic: The Gathering</a>
                        <small className="text-muted"> / </small>
                        <a href="http://standardhearth.com/" className="text-muted" rel="noopener">Hearthstone</a>    
                    </div>
                    <div className="grid-header-pokemon">
                        
                    </div>
                    <Navbar />     
                </div>
                
                <hr/>
            </header>
        )
    }
}

export default Header
