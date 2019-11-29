import React from 'react'
import './Display.scss'
import Card from '../Card/Card'

export const Display = ({displayInfo}) => {
  let displayCards; 
  if (displayInfo) {
    displayCards = displayInfo.map(item => {
      return <Card item={item} key={item.name} />
    })
  }

  return(
    <div className="Display">
      {/* { displayPlanets } */}
      { displayCards }
      {/* { displayVehicles } */}
    </div>
  )
}

export default Display