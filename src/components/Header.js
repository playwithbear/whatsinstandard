import React, { Component } from 'react'

import Navbar from "./Navbar"

export class Header extends Component {
    render() {
        return (
            <header>
                <img src="../img/icon-original.svg" alt="What's in Standard? logo" />
                <h1>What's in Standard?</h1>
                <div>
                    <small class="text-muted">for</small>
                    <span>Pokémon TCG</span>
                    <small class="text-muted"> / </small>
                    <a href="http://whatsinstandard.com/" class="text-muted" rel="noopener">Magic: The Gathering</a>
                    <small class="text-muted"> / </small>
                    <a href="http://standardhearth.com/" class="text-muted" rel="noopener">Hearthstone</a>
                </div>
                <Navbar />
            </header>
        )
    }
}

export default Header
