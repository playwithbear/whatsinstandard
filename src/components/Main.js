import React, { Component } from 'react'

import MainSetDisplay from './MainSetDisplay';
import MainIndex from './MainIndex';

export class Main extends Component {
    render() {
        return (
            <main className="grid-main">
                <MainSetDisplay />
                <MainIndex />
            </main>
        )
    }
}

export default Main
