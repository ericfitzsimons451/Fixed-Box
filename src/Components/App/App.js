import React, { Component } from 'react'
import './App.scss'
import fetchAnything from '../../fetchAnything'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import Display from '../Display/Display'
import fetchPeople from '../../fetchPeople'
import fetchPlanets from '../../fetchPlanets'
import fetchVehicles from '../../fetchVehicles'

class App extends Component {
  constructor() {
    super()
    this.state = {
      film: {},
      people: [],
      planets: [],
      vehicles: [],
      error: '',
      toView: ''
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
        this.setState({ people, toView: people })
      } catch(error) {
        this.setState({ error: error.message })
      }
    } else if (this.state.people.length) {
      this.setState({ toView: this.state.people})
    }
  }

  getPlanets = async () => {
    const url = 'https://www.swapi.co/api/planets'
    if (!this.state.planets.length) {
      try {
        const planets = await fetchPlanets(url)
        this.setState({ planets, toView: planets })
      } catch(error) {
        this.setState({ error: error.message })
      }
    } else if (this.state.planets.length) {
      this.setState({ toView: this.state.planets})
    }
  }

  getVehicles = async () => {
    const url = 'https://www.swapi.co/api/vehicles'
    if (!this.state.vehicles.length) {
      try {
        const vehicles = await fetchVehicles(url)
        this.setState({ vehicles, toView: vehicles })
      } catch (error) {
        this.setState({error: error.message})
      }
    } else if (this.state.vehicles) {
      this.setState({ toView: this.state.vehicles})
    }
  }

  render() {
    return(
      <div className="App">
        <Header film={this.state.film} />
        <Nav getPeople={this.getPeople}
             getPlanets={this.getPlanets}
             getVehicles={this.getVehicles} />
        <Display displayInfo={this.state.toView}/>
      </div>
    )
  }
}

export default App