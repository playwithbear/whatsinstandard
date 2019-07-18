import React, { Component } from 'react'

// Import local components
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
