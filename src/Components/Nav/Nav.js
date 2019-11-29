import React from 'react'
import './Nav.scss'

export const Nav = (props) => {
  return(
    <div>
      <button type='button' onClick={props.getPeople}>People</button>
      <button type='button' onClick={props.getPlanets}>Planets</button>
      <button type='button' onClick={props.getVehicles}>Vehicles</button>
      <button type='button'>Favorites</button>
    </div>
  )
}

export default Nav