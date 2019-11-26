import React from 'react'
import './Display.scss'
import Card from '../Card/Card'

export const Display = ({displayInfo}) => {
  const displayCards = displayInfo.people.map(item => {
    return <Card item={item} key={item.name} />
  })
  return(
    <div className="Display">
      { displayCards }
    </div>
  )
}

export default Display