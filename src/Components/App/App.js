import React, { Component } from 'react'
import './App.scss'
import fetchAnything from '../../fetchAnything'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import Display from '../Display/Display'
import fetchPeople from '../../fetchPeople'
import fetchPlanets from '../../fetchPlanets'

class App extends Component {
  constructor() {
    super()
    this.state = {
      film: {},
      people: [],
      planets: [],
      error: ''
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

  getPlanets = async () => {
    const url = 'https://www.swapi.co/api/planets'
    if (!this.state.planets.length) {
      try {
        const planets = await fetchPlanets(url)
        this.setState({ planets })
      } catch(error) {
        this.setState({ error: error.message })
      }
    }
  }

  render() {
    return(
      <div className="App">
        <Header film={this.state.film} />
        <Nav getPeople={this.getPeople}
             getPlanets={this.getPlanets} />
        <Display displayInfo={this.state}/>
      </div>
    )
  }
}

export default App