import React, { Component } from 'react'

import MainSetDisplay from './MainSetDisplay';
import MainIndex from './MainIndex';

export class Main extends Component {
    render() {
        return (
            <main className="grid-main">
                <MainSetDisplay setList={this.props.setList} loadingSets={this.props.loadingSets} />
                <MainIndex />
            </main>
        )
    }
}

export default Main
