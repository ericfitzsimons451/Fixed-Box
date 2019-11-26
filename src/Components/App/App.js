import React, { Component } from 'react'
import './App.scss'
import fetchAnything from '../../fetchAnything'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import Display from '../Display/Display'
import fetchPeople from '../../fetchPeople'

class App extends Component {
  constructor() {
    super()
    this.state = {
      film: {},
      people: []
    }
  }

  async componentDidMount() {
    const randomNumber = Math.floor(Math.random() * 7) + 1
    const url = `https://www.swapi.co/api/films/${randomNumber}`
    const film = await fetchAnything(url)
    this.setState({ film })
  }

  getPeople = async () => {
    const url = 'https://www.swapi.co/api/people'
    if (!this.state.people.length) {
      try {
        const people = await fetchPeople(url)
        this.setState({ people })
      } catch(error) {
        this.setState({ error: error.message })
      }
    }
  }

  render() {
    return(
      <div className="App">
        <Header film={this.state.film} />
        <Nav getPeople={this.getPeople} />
        <Display displayInfo={this.state}/>
      </div>
    )
  }
}

export default App