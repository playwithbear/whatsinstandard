import React, { Component } from 'react'

import MainSetDisplay from './MainSetDisplay';
import MainContent from './MainContent';

export class Main extends Component {
    render() {
        return (
            <main>
                I'm mainly the main.
                <MainSetDisplay />
                <MainContent />
            </main>
        )
    }
}

export default Main
