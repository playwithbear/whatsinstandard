import React, { Component } from 'react'

export class SetItem extends Component {
    render() {
        return (
            <li className="item">
                {this.props.name}
                <span className="set-logo">
                    <img src={this.props.url} alt={this.props.name + " set logo"} />
                </span>
            </li>
        )
    }
}

export default SetItem
