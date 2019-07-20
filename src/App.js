import React, { Component } from 'react'

// Import local components
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

export class App extends Component {
constructor() {
  super()
  this.state = {
    sets: [],
    loadingSets: true
  }

}

async componentDidMount() {
  const url = "https://api.pokemontcg.io/v1/sets/"
  const response = await fetch(url)
  const data = await response.json()
  this.setState({sets: data.sets, loadingSets: false})
}

  render() {
    return (
      <div className="container">
        <Header />
        <Main setList={this.state} loadingSets={this.state.loadingSets}/>
        <Footer />
      </div>
    )
  }
}

export default App
