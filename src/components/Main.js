import React, { Component } from 'react'

import MainSetDisplay from './MainSetDisplay';
import MainIndex from './MainIndex';

export class Main extends Component {
    
    render() {
        return (
            <main className="grid-main">
                {this.props.loadingSets ? <span className="loading">API, I choose you</span> : <MainSetDisplay setList={this.props.setList} />}
                <MainIndex />
            </main>
        )
    }
}

export default Main
