import React, { Component } from 'react'
import SetItem from './SetItem'

export class MainSetDisplay extends Component {
    
    checkLegal = () => {

    }
    
    render() {
        return (
            <section className="grid-main-set">
                {this.props.loadingSets ? (
                    <span className="loading">Searching for Pokémon</span>
                ) : (
                               
                    
                    <SetItem />
                    
                )}                    
      
            </section>
        )
    }
}

export default MainSetDisplay
