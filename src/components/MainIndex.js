import React, { Component } from 'react'

export class MainIndex extends Component {
    render() {
        return (
            <section className="grid-main-text">
                <h2>What <em>is</em> Standard?</h2> 
                <p><a target="_blank" href="https://www.poke-spot.com/tcg-formats-explained/" rel="noopener noreferrer"><b>Standard</b></a> is a rotating
                group of <i>Pokémon TCG</i> sets. Sets enter Standard when they're released and drop out roughly 2 years later. 
                There are 4 main releases each year, usually in February, May, August, and November. In addition, some other                 
                smaller sets are also released throughout the year.</p>
                <p>
                    Each year, usually in Q2, there will be an <a target="_blank" href="https://www.pokemon.com/uk/pokemon-news/2020-season-pokemon-tcg-format-rotation/" rel="noopener noreferrer">
                        announcement</a> from The Pokémon Company outlining what will be allowable in the next 'Season', defined by competitive play and the official 
                        Pokémon TCG Championship Series. Although the new season starts on 1 July, the rotation doesn't happen until August, just prior to the World Championships.
                </p>
                <p>
                    A <b>Standard card</b> is a card printed or reprinted into a set currently in Standard.
                </p>
                <p>
                    A <b>Standard deck</b> contains only Standard cards (60 of them), and unlike many other TCG's, <b><i>does
                    not</i></b> have a sideboard, and apart from basic energy does not have more than four copies of any
                    one card (unless explicitly stated on the card, or later in FAQs).
                </p>
        
                <div>
                    <h2>Help us get better</h2>
                    <p>Although newly launched, and thus under constant development, if you have any feeback or suggestions for improvement please get in touch.</p>
                </div>
            </section>
        )
    }
}

export default MainIndex
