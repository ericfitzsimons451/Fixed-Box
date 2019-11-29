import React from 'react'
import './Card.scss'

const Card = ({item}) => {
  return (
    <div className="Card">
      {item.name && <p>Name: {item.name}</p>}
      {item.species && <p>Species: {item.homeworld}</p>}
      {item.height && <p>Height: {item.homeworld}</p>}
      {item.homeworld && <p>Homeworld: {item.homeworld}</p>}
      {item.population && <p> Population: {item.population}</p>}
      {item.Name && <p>Planet: {item.Name}</p>}
      {item.Residents && <p>Residents: {item.Residents}</p>}
      {item.cargo_capacity && <p>Cargo Capacity: {item.cargo_capacity}</p>}
      {item.terrain && <p>Terrain: {item.terrain}</p>}
      {item.crew && <p>Crew: {item.crew}</p>}
      {item.passengers && <p>Passengers: {item.passengers}</p>}
      {item.model && <p>Model: {item.model}</p>}
    </div>
  )
}

export default Card