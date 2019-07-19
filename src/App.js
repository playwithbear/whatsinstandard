import React, { Component } from 'react'

// Import local components
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

export class App extends Component {
constructor() {
  super()
  this.state = {
    sets: []
  }

}

componentDidMount() {
  // This is where fetch will go.
}

  render() {
    return (
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
