import React, { Component } from 'react'
import SetItem from './SetItem'


export class MainSetDisplay extends Component {
    
    standardLegal = () => {
        
    }

    render() {
        return (
            <section className="grid-main-set">
                <ul className="set-list">
                    {this.props.setList.map((set) => <SetItem key={set.code} name={set.name} url={set.symbolUrl} />)}
                </ul>
                

            </section>
        )
    }
}

export default MainSetDisplay
