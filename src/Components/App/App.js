import React, { Component } from 'react'
import './App.scss'
import fetchAnything from '../../fetchAnything'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import Display from '../Display/Display'

class App extends Component {
  constructor() {
    super()
    this.state = {
      film: {}
    }
  }

  async componentDidMount() {
    const randomNumber = Math.floor(Math.random() * 7) + 1
    const url = `https://www.swapi.co/api/films/${randomNumber}`
    const film = await fetchAnything(url)
    this.setState({ film })
  }

  render() {
    return(
      <div className="App">
        <Header film={this.state.film} />
        <Nav />
        {/* <Display /> */}
      </div>
    )
  }
}

export default App