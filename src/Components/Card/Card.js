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
    </div>
  )
}

export default Card